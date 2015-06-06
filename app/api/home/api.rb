module Home
  class API < Grape::API

    format :json
    prefix :home

    get :welcome do
      { message: 'Hello, world!' }
    end

  end
end