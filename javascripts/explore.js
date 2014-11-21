jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
	var explore = jQuery('#work').offset().top;
	
	// When #scroll is clicked
	jQuery('#explore').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:explore}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});