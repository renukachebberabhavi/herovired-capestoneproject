class User < ApplicationRecord
    has_secure_password
    # validates :name, :password, :phone_number, :role_id, :email, presence: true
end
