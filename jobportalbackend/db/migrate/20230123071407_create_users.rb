class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :phone_number
      #role_id 1 is for jobposter role_id 2 is for job seeker
      t.string :role_id  

      t.timestamps
    end
  end
end
