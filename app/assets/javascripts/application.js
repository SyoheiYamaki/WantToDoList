// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

// ラジオボタン選択で入力可能に。
$(function() {
    $("#date_inputable").click(function(){
         $("select").attr("disabled", false);
    });
});





$(function(){
	$('#back-to-top').hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > 130){
			$('#back-to-top').fadeIn();
		}else{
			$('#back-to-top').fadeOut();
		}
	});


    $('#back-to-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});

// サイドバー固定用
$(function(){

 var fix = $('#pc-side-nav'), //固定したいコンテンツ
 side = $('.sidebar'), //サイドバーのID
 main = $('#main'), //固定する要素を収める範囲
 sideTop = side.offset().top;
 fixTop = fix.offset().top,
 mainTop = main.offset().top,
 w = $(window);

 var adjust = function(){
	 fixTop = fix.css('position') === 'static' ? sideTop + fix.position().top : fixTop;
	 var fixHeight = fix.outerHeight(true),
	 mainHeight = main.outerHeight(),
	 winTop = w.scrollTop();

	 if(winTop + fixHeight > mainTop + mainHeight){
		fix.removeClass('pc-side-nav-fixed');
	}else if(winTop >= fixTop){
		fix.addClass('pc-side-nav-fixed');
	}else{
		fix.removeClass('pc-side-nav-fixed');
	 }
 }

 w.on('scroll', adjust);
});



