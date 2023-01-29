class CreateCandidateprofiles < ActiveRecord::Migration[7.0]
  def change
    create_table :candidateprofiles do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :contact
      t.string :address
      t.string :about
      t.string :profilepiclink
      t.string :currentcompany
      t.integer :ctc
      t.integer :experience
      t.string :currentrole
      t.string :addskills
      t.string :resumelink
      t.string :expectedsalary
      t.string :preferredlocation

      t.timestamps
    end
  end
end
