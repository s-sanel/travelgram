class Api::LikesController < ApplicationController

  def create
    @like = current_user.likes.new(like_params)
    if @like.save
      render "api/likes/show"
    else
      ender json: @like.errors, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:like][:post_id])
    @like.destroy
    render json: @like
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end

end
