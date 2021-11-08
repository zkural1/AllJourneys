class Park < ApplicationRecord

    validates :name,:description,:contact,:lng,:lat,presence: true
    validates :park_type, inclusion: { in: ['National','State']}
    has_many :trails
    has_many :photos, 
        through: :trails,
        source: :photo_blob

    has_one_attached :photo
end

