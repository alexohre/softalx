class PagesController < ApplicationController
  def index
    @title = "Home"
  end

  def contact
    @title = "Contact Us"
  end

  def about
    @title = "About Us"
  end

  def services
    @title = "Services"
  end

  def products
    @title = "Our Products"
  end

  def clients
    @title = "Our Top Clients"
  end

  def testimonials
    @title = "What People Say"
  end

  def privacy
    @title = "Our Privacy"
  end

  def terms
    @title = "Terms"
  end
end
