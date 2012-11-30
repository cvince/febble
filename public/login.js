// Handle login form slideup and click
$(document).ready(function () {
    $('body').append(ich.fbLogin());
	// handle facebook login click
	$('#fbLogin').click(function() {
		// client side animation once FB returns
		$('.login-fb').slideUp('slow', function() {
			window.location.replace('/auth/facebook');
		});
	});
});