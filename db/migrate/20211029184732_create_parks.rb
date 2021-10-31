class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :contact, null: false
      t.string :park_type, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.timestamps
    end
    add_index :parks, :name
  end
end
