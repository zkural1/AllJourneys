json.currentTrail do
    json.extract! @trail, :id, :name, :summary, :description, :lng, :lat, :difficulty, :length, :elevation_gain, :route_type, :time, :park_id, :tags
    json.photoUrl url_for(@trail.photo)
    json.reviews do
        json.array! @trail.reviews do |review|
            json.extract! review, :id, :rating, :date, :review_text, :activity_type, :activity_date, :trail_id, :user_id, :tags, :reviewer
                json.photoUrl url_for(review.reviewer.photo)
        end
    end
end
json.otherTrails do 
    @trails.each do |trail|
        json.set! trail.id do 
            json.extract! trail, :id, :name, :summary, :description, :lng, :lat, :difficulty, :length, :elevation_gain, :route_type, :time, :park_id, :tags
        json.photoUrl url_for(trail.photo)
        end
    end
end

json.park @park