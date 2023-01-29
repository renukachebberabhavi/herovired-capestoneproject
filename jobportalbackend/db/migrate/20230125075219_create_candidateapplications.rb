class CreateCandidateapplications < ActiveRecord::Migration[7.0]
  def change
    create_table :candidateapplications do |t|
      t.integer :candidateid
      t.integer :jobdetailid
      t.string :jobcode
      t.date :applieddate
      t.string :candidateapplicationstatus
      t.string :location
     
      t.timestamps
    end
  end
end
