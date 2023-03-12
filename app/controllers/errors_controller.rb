class ErrorsController < ActionController::Base
  def not_found
    @title = "Page not Found"
  end

  def internal_server_error
    @title = "Something Went Wrong"
  end
end
