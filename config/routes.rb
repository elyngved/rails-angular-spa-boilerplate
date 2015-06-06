Rails.application.routes.draw do

  # catch-all routes to render HTML page; leave these at the bottom of this file
  root to: 'application#index'
  get '/*path', to: 'application#index'

end
