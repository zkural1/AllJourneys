json.trail do
    json.extract! @trail, :id, :name, :summary, :description, :lng, :lat, :difficulty, :length, :elevation_gain, :route_type, :time
    json.photoUrl url_for(@trail.photo)
end