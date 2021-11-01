json.trail do
    json.extract! @trail, :id, :name, :summary, :description, :lng, :lat, :difficulty, :length, :elevation_gain, :route_type, :time
end