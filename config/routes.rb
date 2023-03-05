Rails.application.routes.draw do
  # Defines the root path route ("/")
  root "pages#index"

  get 'pages/index'
  get 'pages/contact'
  get 'pages/about'
  get 'pages/services'
  get 'pages/products'
  get 'pages/clients'
  get 'pages/testimonials'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
end
