jQuery(document).ready(function(){
	var explore = jQuery('#gsx').offset().top;

	jQuery('#topbutton').click(function(){
		jQuery('html, body').animate({scrollTop:explore}, 'slow');
		return false;
	});
});
