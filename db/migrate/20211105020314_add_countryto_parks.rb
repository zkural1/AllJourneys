class AddCountrytoParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks,:country,:string,null:false
    add_column :parks,:state,:string,null:false
  end
end
