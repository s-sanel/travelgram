class Api::PostsController < ApplicationController

  def index
    # sleep 1
    # @posts = Post.all
    @posts = Post.includes(:user).includes(:comments).includes(:likes).all
    render :index
    # if current_user
    #   users_array = [current_user]
    #   current_user.followees.each do |user|
    #     users_array << user
    #   end
    #   user = current_user
    #   @posts = Post.where(user: users_array).includes(:comments).order('comments.created_at') #.order(created_at: :desc).page(params[:page]).per(5)
    #   render :index
    #   # @posts = Post.where(user: current_user.followees).includes(:comments).order('comments.created_at') #.order(created_at: :desc).page(params[:page]).per(5)
    # end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end


  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors, status: 422
    end
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:image, :description)
  end

end
