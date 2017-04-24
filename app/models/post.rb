# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  description        :string
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  url                :string
#

class Post < ApplicationRecord
  # validates :url, presence: true
  validates :user_id, presence: true

  has_attached_file :image, default_url: "beach.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_many :likes

end
