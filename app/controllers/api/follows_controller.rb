class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors, status: 422
    end
  end

  def delete
    @follow = Follow.find_by(follower_id: follow_params[:follower_id], following_id: follow_params[:following_id])
    @follow.destroy
    render json: @follow
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: @follow
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
