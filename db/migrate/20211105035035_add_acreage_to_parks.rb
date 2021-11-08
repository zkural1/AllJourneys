class AddAcreageToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks,:acreage,:string,null:false
  end
end
