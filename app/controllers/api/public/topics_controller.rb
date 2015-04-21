class API::Public::TopicsController < ApplicationController

  def index
    @topics = Topic.all
  end

  def destroy
    @topic = Topic.where({ id: params[:id] }).first  
    @topic.destroy
  end

end
