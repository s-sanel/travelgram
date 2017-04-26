Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :edit, :show, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]

    resources :posts
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    # comments nested under posts?
    resources :follows, only: [:create, :destroy]
  end
end
