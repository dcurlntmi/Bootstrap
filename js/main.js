$(function () {
    $('nav a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


});

<!-- js初始結構 -->

function sunNumber(a, b) {
    return a + b;
}

function () {}

$(function () {

});
