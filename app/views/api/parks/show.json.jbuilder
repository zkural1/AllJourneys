json.extract! @park, :id, :name, :description, :contact, :park_type, :lat, :lng, :country, :state, :acreage, :trails, :photos
json.photos (@park.trails) do |trail|
    json.trailUrl url_for(trail.photo)
end
