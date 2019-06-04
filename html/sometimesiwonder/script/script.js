$(document).ready(function(){
	$("#button-add").click(function() {
		$(this).addClass("hidden");
		$("#form-wrapper").slideDown(500, function(){
			$("textarea").focus();
			$("#button-close").click(function(){
				$("#form-wrapper").slideUp(500, function(){
					$("#button-add").removeClass("hidden");
				});
			});
		});
	});
	
	$(".answer").each(function() {
		var red = Math.floor((Math.random() + 1) * 255 * 0.5);
		var green = Math.floor((Math.random() + 0.8) * 255 * 0.5);
		var blue = Math.floor((Math.random() + 0.8) * 255 * 0.5);
		var brightness = (0.2126*red+0.7152*green+0.0722*blue)/255;
		var randColor = "rgb(" + red + "," + green + "," + blue + ")";
		//var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background", randColor);
		$(this).css("color", brightness > 0.75 ? "black" : "white");
	}).hover(function(){
		$(this).find(".hidden").show();
		}, function() {
		$(this).find(".hidden").hide();
	});
});