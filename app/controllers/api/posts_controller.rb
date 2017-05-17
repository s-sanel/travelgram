class Api::PostsController < ApplicationController

  def index
    # @posts = Post.where(user: current_user.followees).includes(:comments => [:user]).includes(:user, :likes).order(created_at: :desc).limit(2)
    @posts = Post.includes(:comments => [:user]).includes(:user, :likes).order(created_at: :desc)
    render :index

    # followees = current_user.followees
    # followees.map { |followee| followee.id }
    # @posts = Post.where(user_id: followees).includes(:user, comments: :user, likes: :user).order('created_at DESC')

  end

  def show
    # @post = Post.includes(:user, :comments, :likes).find(params[:id])
    @posts = Post.includes(:comments => [:user]).includes(:user, :likes).all
  end

  def edit
    @post = Post.includes(:user, :comments, :likes).find(params[:id])
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
