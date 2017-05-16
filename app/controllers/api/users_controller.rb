class Api::UsersController < ApplicationController

  def index
    @users = User.includes(:posts, :followers, :followees).all
  end

  def show
    @user = User.includes(:posts, :followers, :followees).find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    update_params = user_params
    update_params = user_params_no_image if params[:user][:image] == "null"
    @user = User.find(params[:id])
    if @user.update(update_params)
      render @user
    else
      render json: @user.errors, status: 422
    end
  end



  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :name, :bio, :website, :image)
  end
  def user_params_no_image
    params.require(:user).permit(:username, :password, :email, :name, :bio, :website)
  end

end
