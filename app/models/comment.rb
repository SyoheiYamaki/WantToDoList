class Comment < ApplicationRecord
  belongs_to :post
  validates :body, presence: true
  validates :owner, presence: true
end
