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

	describe("getUserBirthday", function() {
		beforeEach(function(){
			$('.Birthday').val('March 9')
		});
		it ('should get supplied birthday from getFormValues', function()  {
			expect(getFormValues().birthday).toBe('March 9');
		});	
	});	
});

describe('modal', function() {
	
	describe('modalToActive', function() {
		it ('should add class of modal-active to modal', function() {
			 $('.About').click();
			expect($('.modal').hasClass('modal-active')).toBe(true);
		});
	});

	describe('modalRemoveActive', function() {
		it ('should remove class of modal-active from modal', function() {
			 $('.Button-2').click();
			expect($('.modal').hasClass('modal-active')).toBe(false);
		});
	});
});

describe('updateUserList', function() {
	beforeEach(function(){
			$('input').val('hello world')
	});

	describe('updateUserName',function() {
		it ('should add an li with username to .userlist ul', function() {
			$('.Name').val('Andy');
			$('.Button').click();
			expect($('.users-list ul li').last().text()).toContain('Andy');
		});
	});

	describe('updateUserHome',function() {
		it ('should add an li with username to .userlist ul', function() {
			$('.Hometown').val('Greenville');
			$('.Button').click();
			expect($('.users-list ul li').last().text()).toContain('Greenville');
		});
	});

});
