var $root = $('html, body');

$('a href="#gsx"').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, ('#topbutton'), function () {
        window.location.hash = href;
    });

    return false;
});
