class ChangeTimeToStringToTrails < ActiveRecord::Migration[5.2]
  def change
    remove_column :trails, :time
    add_column :trails, :time, :string, null: false
  end
end
