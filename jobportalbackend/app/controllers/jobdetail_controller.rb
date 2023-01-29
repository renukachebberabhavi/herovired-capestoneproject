class JobdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        puts "index jobetails req"
        render json: Jobdetail.all
    end

    # def index
    #     current_user = User.find_by_id(session[:current_user_id])
    #     render json: current_user
    # end
    
    def show 
        puts "show jobetails req"
        v = Jobdetail.find(params[:id])
        render json: v
    end
    def create
        puts "post jobetails req"
        
         v = !params[:jobtitle].empty? and !params[:companyname].empty? and !params[:jobcode].empty? and !params[:jobType].empty? and !params[:salary].nil?
        if (v)
              p=Jobdetail.create(
                'jobtitle': params[:jobtitle],
                'companyname': params[:companyname],
                'location': params[:location],
                'jobType': params[:jobType],
                'salary': params[:salary],
                'posteddate': params[:posteddate],
                'domain': params[:domain],
                'jobcode': params[:jobcode],
                'skillsrequired': params[:skillsrequired],
                'applicationstatus': params[:applicationstatus])
              puts p
              render json: "Data Added"
            else
                 render json: "Data not added"
        end
           
    end
    def update
        puts "update jobetails req"
        p = Jobdetail.find(params[:id].to_i)
            p.update('jobtitle': params[:jobtitle],
                'companyname': params[:companyname],
                'location': params[:location],
                'jobType': params[:jobType],
                'salary': params[:salary],
                'posteddate': params[:posteddate],
                'domain': params[:domain],
                'jobcode': params[:jobcode],
                'skillsrequired': params[:skillsrequired],
                'applicationstatus': params[:applicationstatus]
               
                )
            render json: "Data Updated"
    end
    def destroy 
        puts "destroy jobetails req"
        p = Jobdetail.find(params[:id])
        p.destroy
        render json: "Data Deleted"
    end
end

