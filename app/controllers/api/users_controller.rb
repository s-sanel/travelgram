class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
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
    @user = User.find(params[:id])
    if @user.update(user_params)
      render @user
      # "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :name, :image)
  end

end
