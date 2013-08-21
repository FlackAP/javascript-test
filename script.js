$(document).ready(function(){
	$('.Button').click(function() {
		if (validateForm()) {
			var Value = $('.Name').val();
			$('#Name').text(Value);
	
			var Value = $('.Birthday').val();
			$('#Birthday').text(Value);
	
			var Value = $('.Hometown').val();
			$('#Hometown').text(Value);
	
			var Value = $('.Jellybean').val();
			$('#Jellybean').text(Value);
	
			var Value = $('.Buffett').val();
			$('#Buffett').text(Value);
	
			var Value = $('.Cage').val();
			$('#Cage').text(Value);
		}
	})


})

// this checks if inputs are empty
// make sure you have if (validateForm) in your initial function
function validateForm (){
	// reset status
	var good=true																				
	$('.errormessage').removeClass('active')
	$('input').removeClass("warning")
	$('input').each(function(){
		if ($(this).val() == "") {
			console.log("found a bad one");
			good=false
			$(this).addClass("warning")
			$('.errormessage').addClass('active')
		}
	})
	console.log(good)
	return good
}