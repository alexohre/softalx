require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe "GET /" do
    it "returns http success" do
      get "/"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /contact" do
    it "returns http success" do
      get "/contact"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /about" do
    it "returns http success" do
      get "/about"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /services" do
    it "returns http success" do
      get "/services"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /products" do
    it "returns http success" do
      get "/products"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /clients" do
    it "returns http success" do
      get "/clients"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /testimonials" do
    it "returns http success" do
      get "/testimonials"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /privacy-policy" do
    it "returns http success" do
      get "/privacy-policy"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /terms" do
    it "returns http success" do
      get "/terms"
      expect(response).to have_http_status(:success)
    end
  end

end
