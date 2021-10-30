
class User < ApplicationRecord

    validates :firstname, :lastname, :email, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true 
    validates :password, presence: true, length: {minimum: 6}, allow_nil: true 
    
    before_validation :ensure_session_token

    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Review

    has_many :photos,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Photo

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end