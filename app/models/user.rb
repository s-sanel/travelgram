# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string
#  profile_photo   :string
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ApplicationRecord

	validates :username, :password_digest, :session_token, :email, presence: true
	validates :username, uniqueness: true
  validates :email, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}

  has_many :posts, dependent: :destroy

	after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials (username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

	def password= (password)
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def password_is? (password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

	def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

  private
	def ensure_session_token
    self.session_token ||= User.generate_session_token
	end
end
