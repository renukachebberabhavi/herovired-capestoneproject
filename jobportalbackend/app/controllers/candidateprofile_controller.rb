class CandidateprofileController < ApplicationController

    skip_before_action :verify_authenticity_token
    
    def index
        render json: Candidateprofile.all
    end

    # def index
    #     current_user = User.find_by_id(session[:current_user_id])
    #     render json: current_user
    # end
    
    def show 
        v = Candidateprofile.find(params[:id])
        render json: v
    end
    def create
        puts "post Candidateprofile req"
        
        v = !params[:firstName].empty? and !params[:email].empty? and !params[:resumelink].empty?
        if (v)
              p=Candidateprofile.create(
                'firstName': params[:firstName],
                'lastName': params[:lastName],
                'email': params[:email],
                'contact': params[:contact],
                'address': params[:address],
                'about': params[:about],
                'profilepiclink': params[:profilepiclink],
                'currentcompany': params[:currentcompany],
                'ctc': params[:ctc],
                'experience': params[:experience],
                'currentrole': params[:currentrole],
                'addskills': params[:addskills],
                'resumelink': params[:resumelink],
                'expectedsalary': params[:expectedsalary],
                'preferredlocation': params[:preferredlocation]
            )
              puts p
              render json: "Data Added"
            else
                 render json: "Data not added"
        end
           
    end
    def update
        p = Candidateprofile.find(params[:id].to_i)
            p.update('firstName': params[:firstName],
                'lastName': params[:lastName],
                'email': params[:email],
                'contact': params[:contact],
                'address': params[:address],
                'about': params[:about],
                'profilepiclink': params[:profilepiclink],
                'currentcompany': params[:currentcompany],
                'ctc': params[:ctc],
                'experience': params[:experience],
                'currentrole': params[:currentrole],
                'addskills': params[:addskills],
                'resumelink': params[:resumelink],
                'expectedsalary': params[:expectedsalary],
                'preferredlocation': params[:preferredlocation]
               )
            render json: "Data Updated"
    end
    def destroy 
        p = Candidateprofile.find(params[:id])
        p.destroy
        render json: "Data Deleted"
    end
end
