class Api::ParksController < ApplicationController
    def show
        @park = Park.find_by(id: params[:id])
        @trails = @park.trails
        render :show
    end

end