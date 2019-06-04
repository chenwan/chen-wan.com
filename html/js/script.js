// Google Analytics

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32209095-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$("#projects_index > ul > li > a").click(function (e) {
    var id = $(this).attr('href');
    $(id).parent().effect("highlight", { 'color': '#ffe0f0' }, 1500);
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#header').css("top", "-50px");
        $('#projects_index').css("top", "0px");
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#header').css("top", "0px");
            $('#projects_index').css("top", "50px");
        }
    }

    lastScrollTop = st;
}