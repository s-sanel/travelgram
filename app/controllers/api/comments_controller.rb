class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    # @comment = current_user.comments.find_by(post_id: params[:comment][:post_id])
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :body)
  end
end
