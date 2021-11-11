json.array! @reviews do |review| 
    json.extract! review, :id, :rating, :date, :review_text, :activity_type, :activity_date, :trail_id, :user_id, :reviewer
end