class Api::SessionsController < ApplicationController
   skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        
        if @user
            login!(@user)
            render "/api/users/show"
        else 
            render json: ["Login failed. Invalid email and password combination."], status: 422
        end
    end

    def destroy
        @user = current_user
        if @user
            logout! 
            render json: {}
        else
            render json: ["user not found"], status: 404
        end
    end
end