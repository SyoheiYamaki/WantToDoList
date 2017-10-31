class PostsController < ApplicationController

	def index
		@posts = Post.all
	end 

	def new
		# 新規作成画面へ
		@post = Post.new
	end

	def create
		@post = Post.new(params.require(:post).permit(:title, :body))
		if @post.save
			redirect_to posts_path
		else
			render new
		end
	end



end
