class PostsController < ApplicationController

	def index
		@posts = Post.all
	end 

	def new
		# 新規作成画面へ
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			redirect_to posts_path
		else
			render new
		end
	end

	def show
		@post = Post.find(params[:id])
	end 


private 
	def post_params
		params.require(:post).permit(:title, :content)
	end



end
