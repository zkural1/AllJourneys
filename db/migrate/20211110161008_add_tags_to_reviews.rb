class AddTagsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :tags, :string, array: true, default: []
  end
end
