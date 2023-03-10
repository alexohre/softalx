Rails.application.routes.draw do
  match "/404", via: :all, to: "errors#not_found"
  match "/500", via: :all, to: "errors#internal_server_error"
  # Defines the root path route ("/")
  root "pages#index"

  get "contact", to: "pages#contact"
  get "about", to: "pages#about"
  get "services", to: "pages#services"
  get "products", to: "pages#products"
  get "clients", to: "pages#clients"
  get "testimonials", to: "pages#testimonials"
  get "privacy-policy", to: "pages#privacy"
  get "terms", to: "pages#terms"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
end
