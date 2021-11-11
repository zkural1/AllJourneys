class AddMoreTagsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :activity_type, :string, null: false
  end
end
