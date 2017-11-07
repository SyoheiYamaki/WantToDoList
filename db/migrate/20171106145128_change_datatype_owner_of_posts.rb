class ChangeDatatypeOwnerOfPosts < ActiveRecord::Migration[5.1]
  def up
    change_column :posts, :owner, :string
  end

  def down
    change_column :posts, :owner, :integer
  end
end
