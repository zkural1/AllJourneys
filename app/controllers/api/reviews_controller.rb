class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all.includes(:reviewer)
        render :index
    end

    def create
        @review = Review.new(review_params)
        
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if (@review.user_id == current_user.id) && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.user_id == current_user.id
            @review.destroy!
            render json: @review.trail_id   
        else
            render json: ["Review cannot be destroyed."]
        end
    end 

    private

    def review_params
        new_params = params.require(:review).permit(:id, :rating, :date, :review_text, :activity_type, :activity_date, :trail_id, :user_id, :tags)
        new_params['tags'] = params['review']['tags'].split(',')
        new_params
    end

end
