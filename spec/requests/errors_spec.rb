require 'rails_helper'

RSpec.describe "Errors", type: :request do
  describe "GET /404" do
    it "returns http success" do
      get "/404"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /500" do
    it "returns http success" do
      get "/500"
      expect(response).to have_http_status(:success)
    end
  end

end
