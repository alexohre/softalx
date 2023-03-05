require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/pages/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /contact" do
    it "returns http success" do
      get "/pages/contact"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /about" do
    it "returns http success" do
      get "/pages/about"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /services" do
    it "returns http success" do
      get "/pages/services"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /products" do
    it "returns http success" do
      get "/pages/products"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /clients" do
    it "returns http success" do
      get "/pages/clients"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /testimonials" do
    it "returns http success" do
      get "/pages/testimonials"
      expect(response).to have_http_status(:success)
    end
  end

end
