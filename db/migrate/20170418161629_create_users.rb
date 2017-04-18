class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null:false
      t.string :session_token, null:false
      t.string :name
      t.string :profile_photo

      t.timestamps
    end
  end
end
