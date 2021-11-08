class Trail < ApplicationRecord

    validates :name, :summary, :length, :elevation_gain, :time, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}
    validates :route_type, inclusion: { in: ["Loop", "Out & back", "Point to point"]}

    belongs_to :park
    has_one_attached :photo
    
end