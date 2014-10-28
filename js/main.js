
$(document).ready(function() {
	$(function(){
		$('#nav li a').click(function(){
			// var $linkClicked = $(this).attr('href');
   //      	document.location.hash = $linkClicked;
   //      	if (!$(this).hasClass("active")) {
	  //           $("#nav li").removeClass("active");
	  //           $(this).addClass("active");
	  //           $('#main-content').hide();
	  //           $($linkClicked).fadeIn();
	  //           return false;
	  //       }
	  //       else {
	  //           return false;
	  //       }
		});
	});

	function login() {
                    var user1 = "j.nguyen";
                    var user2 = "fm.lopes";
                    var pass = "1234";
                    // Get the value of input field with id="username"
                    var userInserted = $("#username").val();
                    var passInserted = $("#password").val();
                    
				if((userInserted == user1 || userInserted == user2) && passInserted == pass)
                    $("#error").html("Success login (REMOVE MESSAGE)");
				else{
                      $("#error").html("Incorrect or password, please try again. Contact the academic services for further help (REMOVE MESSAGE)");
                      var x = $("#error");
                      x.style.fontSize = "15px";           
                      x.style.color = "red"; 
                      $("#password").val("");
                    }
                }

});