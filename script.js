$(document).ready(function(){
	$('.Button').click(function() {
		// condition that calls validateForm listed below before proceeding 
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

// MODAL OPEN/CLOSE SCRIPTS

	$('.About').click(function () {
		console.log('what?')
		$('.modal').addClass('modal-active');
	})

	$('.Button-2').click(function () {
		console.log('we closed it!')
		$('.modal').removeClass('modal-active');
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
			// change modal to active HERE 
		}
	})
	console.log(good)
	return good
}

