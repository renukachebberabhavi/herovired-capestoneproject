class CandidateapplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        render json: Candidateapplication.all
    end

    # def index
    #     current_user = User.find_by_id(session[:current_user_id])
    #     render json: current_user
    # end
    
    def show 
        v = Candidateapplication.find(params[:id])
        render json: v
    end
    def create
        puts "post jobetails req"
        
        # v = !params[:name].empty? and !params[:email].empty? and !params[:password].empty? and !params[:phone_number].empty? and !params[:role_id].nil?
        if (v)
              p=Candidateapplication.create(
                'candidateid': params[:candidateid],
                'jobdetailid': params[:jobdetailid],
                'jobcode': params[:jobcode],
                'applieddate': params[:applieddate],
                'candidateapplicationstatus': params[:candidateapplicationstatus],
                'location': params[:location]
            )
              puts p
              render json: "Data Added"
            else
                 render json: "Data not added"
        end
           
    end
    def update
        p = Candidateapplication.find(params[:id].to_i)
            p.update('candidateid': params[:candidateid],
                'jobdetailid': params[:jobdetailid],
                'jobcode': params[:jobcode],
                'applieddate': params[:applieddate],
                'candidateapplicationstatus': params[:candidateapplicationstatus],
                'location': params[:location]
                         
                )
            render json: "Data Updated"
    end
    def destroy 
        p = Candidateapplication.find(params[:id])
        p.destroy
        render json: "Data Deleted"
    end
end
