json.trails do 
    @trails.each do |trail|
        json.set! trail.id do 
            json.extract! trail, :id, :name, :summary, :description, :lng, :lat, :difficulty, :length, :elevation_gain, :route_type, :time, :park_id, :tags
        json.photoUrl url_for(trail.photo)
        end
    end
end

json.park @park