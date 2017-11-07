class AddOwnerToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :owner, :integer
    add_column :posts, :schedule, :datetime
  end
end
