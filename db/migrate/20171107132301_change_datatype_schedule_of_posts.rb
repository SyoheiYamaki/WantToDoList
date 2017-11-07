class ChangeDatatypeScheduleOfPosts < ActiveRecord::Migration[5.1]
  def up
    change_column :posts, :schedule, :date
  end

  def down
    change_column :posts, :schedule, :datetime
  end
end
