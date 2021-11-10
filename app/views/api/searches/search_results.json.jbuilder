trails = json.array! @trails do |trail| 
    json.extract! trail, :id, :name, :park
    json.category trail.class.name
end

parks = json.array! @parks do |park| 
    json.extract! park, :id, :name, :country, :state
    json.category park.class.name
end

trails + parks