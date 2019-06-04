var videosCallback = 'html_showThumbs';
var currentPage = 1;
var MAX_PAGE = 3;

// loads the data from Vimeo
function loadVideos(page) {
	var videosUrl = 'http://vimeo.com/api/v2/channel/staffpicks/videos.json?callback=' + videosCallback + '&page=' + currentPage;
	
	var head = document.getElementsByTagName('head').item(0);
	
	var videosJs = document.createElement('script');
	videosJs.setAttribute('type', 'text/javascript');
	videosJs.setAttribute('src', videosUrl);
	head.appendChild(videosJs);
	
	if (currentPage === MAX_PAGE) {
		document.getElementById('loadmore').style.display = 'none';
	}
}

// goes through the retrived videos and puts them on the page
function html_showThumbs(videos) {
	var thumbs = document.getElementById('thumbs');
	//thumbs.innerHTML = '';
	
	var ul = document.getElementsByTagName('ul').item(0);
	
	//videos.sort(helper_compare('-stats_number_of_plays'));
	var length = videos.length;
	for (var i = 0; i < length; i++) {
		ul.appendChild(html_getThumbLi(videos[i]));
	}
}

// shows preview on the page
function html_showPreview(video) {
	var loader = document.createElement('div');
	loader.className = 'loader';
	var player = document.createElement('iframe');
	player.id = 'player';
	player.setAttribute('src', 'http://player.vimeo.com/video/' + video.id + '?autoplay=1');
	player.onload = function() {
		this.previousSibling.style.display = 'none';
	};
	
	var title = document.createElement('a');
	title.id = 'title';
	title.setAttribute('href', video.url);
	title.innerHTML = video.title;
	var user = document.createElement('a');
	user.id = 'user';
	user.setAttribute('href', video.user_url);
	var user_portrait = document.createElement('img');
	user_portrait.setAttribute('src', video.user_portrait_small);
	var user_name = document.createElement('span');
	user_name.innerHTML = video.user_name;
	user_name.className = 'font_medium';
	user.appendChild(user_portrait);
	user.appendChild(user_name);
	var description = document.createElement('p');
	description.id = 'description';
	description.className = 'font_medium';
	description.innerHTML = video.description;
	
	var info = document.createElement('p');
	info.id = "info";
	info.appendChild(title);
	info.appendChild(user);
	info.appendChild(description);
	
	var button_close = document.createElement('img');
	button_close.id = 'button_close';
	button_close.setAttribute('src', 'image/button_close.png');
	button_close.onclick = function() {
		document.body.removeChild(previewContainer);
	};
	
	var previewContent = document.createElement('div');
	previewContent.id = "preview";
	previewContent.appendChild(loader);
	previewContent.appendChild(player);
	previewContent.appendChild(info);
	previewContent.appendChild(button_close);
	
	var previewContainer = document.createElement('div');
	previewContainer.id = 'previewContainer';
	previewContainer.appendChild(previewContent);
	
	document.body.appendChild(previewContainer);
}

// returns li element of the thumb
function html_getThumbLi(video) {	
	var thumb = document.createElement('img');
	thumb.className = 'img_thumb';
	thumb.setAttribute('src', video.thumbnail_medium);
	thumb.setAttribute('alt', video.title);
	thumb.setAttribute('title', video.title);
	
	var button_play = document.createElement('img');
	button_play.className = 'button_play';
	button_play.setAttribute('src', 'image/button_play.png');
	
	var user = document.createElement('a');
	user.setAttribute('href', video.user_url);
	user.innerHTML = 'by ' + video.user_name;
	
	var showOnHover = document.createElement('div');
	showOnHover.className = "hidden font_medium";
	showOnHover.appendChild(button_play);
	showOnHover.appendChild(user);
	
	var aThumb = document.createElement('div');
	aThumb.className = 'thumb';
	//aThumb.setAttribute('href', video.url);
	aThumb.appendChild(thumb);
	aThumb.appendChild(showOnHover);
	aThumb.title = "Preview";
	aThumb.onclick = function() {
		html_showPreview(video);
		helper_setStyleDynamic();
	};
	
	var duration = document.createElement('time');
	duration.className = "duration font_small";
	duration.innerHTML = helper_getDurationString(video.duration);
	
	var title = document.createElement('p');
	title.innerHTML = video.title;
	
	var aTitle = document.createElement('a');
	aTitle.className = "title";
	aTitle.title = 'Go to video: ' + video.title;
	aTitle.setAttribute('href', video.url);
	aTitle.appendChild(title);
	
	var stats = document.createElement('p');
	stats.className = "stats font_small";
	var stats_likes = document.createElement('span');
	stats_likes.innerHTML = (video.stats_number_of_likes ? "<img src='image/icon_like.png'>" + helper_getShortNumString(video.stats_number_of_likes) : '');
	var stats_plays = document.createElement('span');
	stats_plays.innerHTML = (video.stats_number_of_plays ? " <img src='image/icon_view.png'>" + helper_getCommaSeparateNumString(video.stats_number_of_plays) : '');
	var upload_date = document.createElement('time');
	upload_date.className = 'upload_date';
	upload_date.innerHTML = helper_getDateString(video.upload_date);
	stats.appendChild(stats_plays);
	stats.appendChild(stats_likes);
	stats.appendChild(upload_date);
	
	var figcaption = document.createElement('figcaption');
	figcaption.appendChild(aTitle);
	figcaption.appendChild(stats);
	
	var figure = document.createElement('figure');
	figure.appendChild(aThumb);
	figure.appendChild(duration);
	figure.appendChild(figcaption);
	
	var li = document.createElement('li');
	li.appendChild(figure);
	return li;
}

// displays load more button
function input_loadMore() {
	currentPage = currentPage + 1;
	loadVideos(currentPage);
}

// returns duration string
function helper_getDurationString(totalSeconds) {
    var sec_num = parseInt(totalSeconds, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = /*hours+':'+*/minutes+':'+seconds;
    return time;
}

// returns date string
function helper_getDateString(str) {
	return str.substr(0, 7);
}

// returns short number string
function helper_getShortNumString(num) {
	var retval = num.toString();
	if (num >= 1000000) {
		retval = (num / 1000000).toString().substr(0, 4).replace(/\.$/, '') + 'M';
	}
	else if (num >= 1000) {
		retval = (num / 1000).toString().substr(0, 4).replace(/\.$/, '') + 'K';
	}
	return retval;
}

// returns number string separated by commas
function helper_getCommaSeparateNumString(num){
	while (/(\d+)(\d{3})/.test(num.toString())){
	  num = num.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return num;
}

// not used
function helper_compare(key) {
	var order = 1;
	if (key[0] === '-') {
		order = -1;
		key = key.substr(1);
	}
	return function (a,b) {
        var result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
        return result * order;
	}
}

// sets style dynamically
function helper_setStyleDynamic() {
	var previewContent = document.getElementById('preview');
	if (previewContent) {
		previewContent.style.height = previewContent.offsetWidth * 0.56 + 'px';
		previewContent.style.marginTop = (window.innerHeight - previewContent.offsetHeight) * 0.5 + 'px';
		var description = document.getElementById('description');
		var ratio = previewContent.offsetWidth > 1024 ? 0.75 : 0.6;
		description.style.height = (previewContent.offsetWidth * 0.56 - document.getElementById('title').offsetHeight - document.getElementById('user').offsetHeight) * ratio + 'px';
		var loader = previewContent.firstChild;
		loader.style.marginLeft = previewContent.offsetWidth * 0.5 * 0.74 + 'px';
		loader.style.marginTop = previewContent.offsetHeight * 0.45 + 'px';
	}
}

// loads first page of results when the page loads
window.onload = function(event) {
	loadVideos(currentPage);
}

// sets style when window gets resized
window.onresize = function(event) {
	helper_setStyleDynamic();
}