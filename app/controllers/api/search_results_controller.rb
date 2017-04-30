class Api::SearchResultsController < ApplicationController

  def index
    query = params[:query].downcase
    @results = User.where("LOWER(username) LIKE ?", "%#{query}%").limit(10)
  end

end
