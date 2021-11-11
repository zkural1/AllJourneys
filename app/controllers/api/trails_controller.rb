class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.find_by(id: params[:id])
        @park = @trail.park
        @trails = @park.trails.where.not(id: @trail.id)
        render :show
    end
end
