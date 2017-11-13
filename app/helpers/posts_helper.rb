module PostsHelper

	# 投稿者に応じたアイコンを返す
	def get_member_icon(name)
		if name == "やましょ" 
			image_tag "yamaki_icon.png" 
		elsif name == "だーひろ"
			image_tag "ono_icon.png"
		elsif name == "えってぃ"
			image_tag "suzue_icon.png" 
		end
	end

end