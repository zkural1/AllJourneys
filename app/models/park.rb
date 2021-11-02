class Park < ApplicationRecord

    validates :name,:description,:contact,:lng,:lat,presence: true
    validates :park_type, inclusion: { in: ['National','State']}
    has_many :trails
    
end
