class Park < ApplicationRecord

    validates :name,:description,:contact,:lng,:lat,presence: true
    validates :park_type, inclusion: { in: ['national']}
    has_many :trails
    
end
