class AddOwnerToComment < ActiveRecord::Migration[5.1]
  def change
  	add_column :comments, :owner, :string
  end
end
