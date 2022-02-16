class Article < ApplicationRecord

  has_one_attached :image

  validates :title, presence: true, length: { minimum: 5 }
  validates :content, presence: true, length: { minimum: 10 }
  validates :image, presence: true
end
