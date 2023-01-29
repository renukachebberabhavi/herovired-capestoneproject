class ApplicationController < ActionController::Base
    def landingpage
        render html: "Welcome to jobportal home page"
    end
end
