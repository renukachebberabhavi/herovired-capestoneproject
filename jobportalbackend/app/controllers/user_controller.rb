require 'bcrypt'

class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        render json: User.all
    end

    # def index
    #     current_user = User.find_by_id(session[:current_user_id])
    #     render json: current_user
    # end
    
    def show 
        v = User.find(params[:id])
        render json: v
    end
    def create
        puts "post user req"
        
        v = !params[:email].empty? and !params[:password].empty? and !params[:role_id].nil?
        if (v)
              p=User.create(
              'name': params[:name],
              'email': params[:email],
              'password': params[:password],
              'phone_number': params[:phone_number],
              'role_id': params[:role_id])
              puts p
              render json: "Data Added to user"
            else
                 render json: "Data not added"
        end
           
    end
    def update
        p = User.find(params[:id].to_i)
            p.update('name': params[:name],
                'email': params[:email],
                'password': params[:password],
                'phone_number': params[:phone_number],
                'role_id': params[:role_id])
            render json: "Data Updated"
    end
    def destroy 
        p = User.find(params[:id])
        p.destroy
        render json: "Data Deleted"
    end
end
