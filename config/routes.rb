Rails.application.routes.draw do
  root 'article#index'

  get '/article/:id/get-image', to: 'article#get_image'
  get '/article/by-date/', to: 'article#get_articles_by_date'
  resources :article


  get '/admin/', to: 'admin#index'
  get '/admin/new', to: 'admin#new'
  get '/admin/:id', to: 'admin#edit'
  post '/admin/create', to: 'admin#create'
  delete '/admin/:id/delete', to: 'admin#destroy'
  patch '/admin/:id(.:format)', to: 'admin#update'
end
