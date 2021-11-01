class AddTimeToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :time, :time, null: false
  end
end
