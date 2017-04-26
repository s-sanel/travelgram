# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer
#  following_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower, :followee, presence: true

  belongs_to :follower,
    class_name: :User,
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: :User,
    primary_key: :id,
    foreign_key: :following_id
end
