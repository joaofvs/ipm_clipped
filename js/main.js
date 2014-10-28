
$(document).ready(function() {
	$(function(){
		$('#nav li a').click(function(){
			var $linkClicked = $(this).attr('href');
        	document.location.hash = $linkClicked;
        	if (!$(this).hasClass("active")) {
	            $("#nav li").removeClass("active");
	            $(this).addClass("active");
	            $('#main-content').hide();
	            $($linkClicked).fadeIn();
	            return false;
	        }
	        else {
	            return false;
	        }
		});
		// var hash = window.location.hash;
  //   	hash = hash.replace(/^#/, '');
  //   	switch (hash) {
	 //        case 'page2' :
	 //            $("#" + hash + "-link").trigger("click");
	 //            break;
	 //        case 'page3' :
	 //            $("#" + hash + "-link").trigger("click");
	 //            break;
	 //        case 'page4' :
	 //            $("#" + hash + "-link").trigger("click");
	 //            break;
  //   	}
	});

});