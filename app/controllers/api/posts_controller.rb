class Api::PostsController < ApplicationController

  def index
    # sleep 1
    @posts = Post.all
    render :index
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
