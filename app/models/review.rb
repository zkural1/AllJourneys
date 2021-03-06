class Review < ApplicationRecord

    validates :rating, :date, :activity_type, :activity_date, presence:true

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :trail

end