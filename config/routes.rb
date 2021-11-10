Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
      resources :users, only: [:show, :create, :update]
      resources :parks, only: [:show]
      resources :trails, only: :show
      resources :reviews, only: [:index, :create, :update, :destroy]
      resources :searches, only: :index
      resource :session, only: [:create, :destroy]
  end
end
