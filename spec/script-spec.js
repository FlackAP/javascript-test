describe('validateForm', function() {

	describe ("errorToActive", function(){
		beforeEach(function(){
			$('input').val('')
		});
		it ('should change class of errormessage to active ', function() {
			 $('.Button').click();
			expect($('.errormessage').hasClass('active')).toBe(true);
		});
	});
	
	describe ("inputWarning", function(){
		beforeEach(function(){
			$('input').val('')
		});
		it ('should change class of input to warning', function() {
			 $('.Button').click();
			expect($('input').hasClass('warning')).toBe(true);
		});
	});

	describe ("validateFormFalseReturn", function(){
		beforeEach(function(){
			$('input').val('')
		});
		it ('should return false if inputs are empty', function() {
			$('.Button').click();
			expect(validateForm()).toBe(false);
		})
	});

});

describe('getUserInfo', function() {
		
	describe("getUserName", function() {
		beforeEach(function() {
			$('.Name').val('Andy')
		});
		it ('should get supplied name from getFormValues', function() {
			expect(getFormValues().name).toBe('Andy');
		});
	});

	describe("getUserHome", function() {
		beforeEach(function(){
			$('.Hometown').val('Greenville')
		});
		it ('should get supplied hometown from getFormValues', function()  {
			expect(getFormValues().home).toBe('Greenville');
		});	
	});
})