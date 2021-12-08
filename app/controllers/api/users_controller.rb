class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    default_profile_picture = open("app/assets/images/defaultProfilePicture.png")
    @user.photo.attach(io: default_profile_picture, filename: 'DefaultProfilePicture.jpeg')
    
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password)
  end
end
