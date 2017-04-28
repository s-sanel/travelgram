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
  has_attached_file :image, s3_protocol: :https, default_url: "beach.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_many :likes
  has_many :comments

  def created_ago
    diff_in_secs =(Time.now - self.created_at).round
    mins = diff_in_secs / 1.minutes
    hours = diff_in_secs / 1.hours
    days = diff_in_secs / 1.days

    if (days > 730)
      "#{days / 365} year"
    elsif (days >= 365)
      "#{days / 365} years"
    elsif (days >= 14)
      "#{days / 7} weeks"
    elsif (days >= 7)
      "#{days / 7} week"
    elsif (days > 1)
      "#{days} days"
    elsif (days > 0)
      "#{days} day"
    else
      if (hours > 1)
        "#{hours} hours"
      elsif (hours > 0)
        "#{hours} hour"
      else
        if(mins > 1)
          "#{mins} minutes"
        else
          "1 minute"
        end
      end
    end
  end

end
