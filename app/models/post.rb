class Post < ApplicationRecord
  # validates :url, presence: true
  validates :user_id, presence: true

  has_attached_file :image, default_url: "beach.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user

end
