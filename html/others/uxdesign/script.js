var windowHeight;
var windowWidth;
var keyTrigger = false;
var mouseTrigger = false;

// default view
function defaultView() {
	for(var i=1;i<=150;i++) {
	    var item = $("<div class='item list'>Item " + i + "</div>");
	    $('#main').append(item);
	    item.attr('id', 'item-' + i);
	}
	listView();
}
// list view
function listView() {
    $('.item').removeClass('grid').removeClass('metro').addClass('list');
    $('button').removeClass('selected');
    $('.button_list').addClass('selected');
    var top = 10;
    var left = 10;
    for (var i = 1; i <= 150; i++) {
        var id = "#item-" + i;
        $(id).css('left', left + 'px');
        $(id).css('top', top + 'px');
        top += 60;
    }
}
// grid view
function gridView() {
    $('.item').removeClass('list').removeClass('metro').addClass('grid');
    $('button').removeClass('selected');
    $('.button_grid').addClass('selected');
    $('#main').css('overflow-x', 'hidden');
    $('#main').css('overflow-y', 'auto');
    var top = 5;
    var left = 5;
    windowWidth = $(window).width();
    for (var i = 1; i <= 150; i++) {
        var id = "#item-" + i;
        $(id).css('left', left + 'px');
        $(id).css('top', top + 'px');
        left += 90;
        if (left > windowWidth - 80) {
            top += 110;
            left = 5;
        }
    }
}
// metro view
function metroView() {
    $('.item').removeClass('list').removeClass('grid').addClass('metro');
    $('button').removeClass('selected');
    $('.button_metro').addClass('selected');
    $('#main').css('overflow-x', 'auto');
    $('#main').css('overflow-y', 'hidden');
    var top = 5;
    var left = 5;
    windowHeight = $(window).height();
    for (var i = 1; i <= 150; i++) {
        var id = "#item-" + i;
        $(id).css('left', left+'px');
        $(id).css('top', top + 'px');
        top += 110;
        if (top > windowHeight - 100) {
            top = 5;
            left += 90;
        }
    }
} 

$(document).ready(function () {
    // key event
    var keys = {
        length: 0
    };
    var multipleKeys = false;
    document.onkeydown = function (e) {
        if (!keys[e.keyCode]) {
            keys[e.keyCode] = true;
            keys.length++;
        }
        if (keys.length > 1) {
            multipleKeys = true;
        }
        else {
            multipleKeys = false;
        }

    }
    document.onkeyup = function (e) {
        // Count
        if (keys[e.keyCode]) {
            keys[e.keyCode] = false;
            keys.length--;
        }
        // Alt show sidebar
        if ((e.which == 18) && ($('#sidebar_left').css('left') == '-90px') && (!mouseTrigger) && (!multipleKeys)) {
            e.preventDefault();
            $('#sidebar_left').css('left', '0px');
			$('#sidebar_left .badge_left').css('display', 'block');
            keyTrigger = true;
        }
        // Alt hide sidebar
        if ((e.which == 18) && ($('#sidebar_left').css('left') == '0px') && (!mouseTrigger) && (!multipleKeys)) {
            e.preventDefault();
            $('#sidebar_left').css('left', '-90px');
            $('#sidebar_left .badge_left').css('display', 'none');
            keyTrigger = false;
        }
        // Alt+Q left to right
        if ((e.altKey) && (e.which == 81) && ($('#sidebar_left').css('left') == '0px') && (!mouseTrigger)) {
            e.preventDefault();
            $('#sidebar_right').css('right', '0px');
            $('#sidebar_right .badge_right').css('display', 'block');
            $('#sidebar_left').css('left', '-90px');
            $('#sidebar_left .badge_left').css('display', 'none');
            keyTrigger = true;
        }
        // Alt+Q right to left
        if ((e.altKey) && (e.which == 81) && ($('#sidebar_right').css('right') == '0px') && (!mouseTrigger)) {
            e.preventDefault();
            $('#sidebar_right').css('right', '-90px');
            $('#sidebar_right .badge_right').css('display', 'none');
            $('#sidebar_left').css('left', '0px');
            $('#sidebar_left .badge_left').css('display', 'block');
            keyTrigger = true;
        }
        // L
        if ((e.which == 76) && (($('#sidebar_left').css('left') == '0px') || ($('#sidebar_right').css('right') == '0px')) && (keyTrigger)) {
            listView();
            $('#sidebar_left').css('left', '-90px');
            $('#sidebar_right').css('right', '-90px');
        }
        // G
        if ((e.which == 71) && (($('#sidebar_left').css('left') == '0px') || ($('#sidebar_right').css('right') == '0px')) && (keyTrigger)) {
            gridView();
            $('#sidebar_left').css('left', '-90px');
            $('#sidebar_right').css('right', '-90px');
        }
        // M
        if ((e.which == 77) && (($('#sidebar_left').css('left') == '0px') || ($('#sidebar_right').css('right') == '0px')) && (keyTrigger)) {
            metroView();
            $('#sidebar_left').css('left', '-90px');
            $('#sidebar_right').css('right', '-90px');
        }
        // Alt+L
        if (($('#sidebar_left').css('left') == '-90px') && (e.altKey) && (e.which == 76)) {
            listView();
        }
        // Alt+G
        if (($('#sidebar_left').css('left') == '-90px') && (e.altKey) && (e.which == 71)) {
            gridView();
        }
        // Alt+M
        if (($('#sidebar_left').css('left') == '-90px') && (e.altKey) && (e.which == 77)) {
            metroView();
        }
    }
    // mouse event
    var timeout;
    $('#sidebar_wrapper_left').hover(function () {
        if (!timeout) {
            timeout = window.setTimeout(function () {
                timeout = null;
                $('#sidebar_left').css('left', '0px');
                mouseTrigger = true;
            }, 1000);
        }
    },
    function () {
        if (timeout) {
            window.clearTimeout(timeout);
            timeout = null;
        }
        else {
            $('#sidebar_left').css('left', '-90px');
            mouseTrigger = false;
        }
    });

    // mouse right sidebar show on right
    $('#sidebar_wrapper_right').hover(function () {
        if (!timeout) {
            timeout = window.setTimeout(function () {
                timeout = null;
                $('#sidebar_right').css('right', '0px');
                mouseTrigger = true;
            }, 1000);
        }
    },
    function () {
        if (timeout) {
            window.clearTimeout(timeout);
            timeout = null;
        }
        else {
            $('#sidebar_right').css('right', '-90px');
            mouseTrigger = false;
        }
    });

    // window resize event
    $(window).resize(function () {
        // update metro view
        windowHeight = $(window).height();
        var top = 5;
        var left = 5;
        for (var i = 1; i <= 150; i++) {
            var id = ".metro#item-" + i;
            $(id).css('left', left + 'px');
            $(id).css('top', top + 'px');
            top += 110;
            if (top > windowHeight - 100) {
                top = 5;
                left += 90;
            }
        }
        // update grid view
        windowWidth = $(window).width();
        var grid_top = 5;
        var grid_left = 5;
        for (var i = 1; i <= 150; i++) {
            var id = ".grid#item-" + i;
            $(id).css('left', grid_left + 'px');
            $(id).css('top', grid_top + 'px');
            grid_left += 90;
            if (grid_left > windowWidth - 80) {
                grid_top += 110;
                grid_left = 5;
            }
        }
    });
}); 