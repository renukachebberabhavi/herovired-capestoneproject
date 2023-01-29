# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_25_075219) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "candidateapplications", force: :cascade do |t|
    t.integer "candidateid"
    t.integer "jobdetailid"
    t.string "jobcode"
    t.date "applieddate"
    t.string "candidateapplicationstatus"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "candidateprofiles", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "email"
    t.string "contact"
    t.string "address"
    t.string "about"
    t.string "profilepiclink"
    t.string "currentcompany"
    t.integer "ctc"
    t.integer "experience"
    t.string "currentrole"
    t.string "addskills"
    t.string "resumelink"
    t.string "expectedsalary"
    t.string "preferredlocation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobdetails", force: :cascade do |t|
    t.string "jobtitle"
    t.string "companyname"
    t.string "location"
    t.string "jobType"
    t.integer "salary"
    t.date "posteddate"
    t.string "domain"
    t.string "jobcode"
    t.string "skillsrequired"
    t.string "applicationstatus"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "skillname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.string "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
