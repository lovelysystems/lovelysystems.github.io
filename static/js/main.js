// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};



(function($){
 
	$.fn.shuffle = function() {
 
		var allElems = this.get(),
			getRandom = function(max) {
				return Math.floor(Math.random() * max);
			},
			shuffled = $.map(allElems, function(){
				var random = getRandom(allElems.length),
					randEl = $(allElems[random]).clone(true)[0];
				allElems.splice(random, 1);
				return randEl;
		   });
 
		this.each(function(i){
			$(this).replaceWith($(shuffled[i]));
		});
 
		return $(shuffled);
 
	};
 
})(jQuery);

// print a nice output into the console
(function(){
    if (typeof(window.console) == 'undefined') return;
    if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
      var lovely_bug_logo = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.cls-1{fill:#231f20;}.cls-2{fill:#ed1c24;}.cls-3{fill:#fff;}</style></defs><title>Artboard 1</title><path class="cls-1" d="M103.67,26.06,98.34,4a4.75,4.75,0,0,0-9.22,2.28L93.63,24.9a55.35,55.35,0,0,0-27.92,6.65L61.22,13.07a4.79,4.79,0,1,0-9.53.94A4.57,4.57,0,0,0,52,15.32l5.3,21.82C44,47.74,35.12,64.22,32.66,82.9L146.13,55.35C135.49,40,120.27,29.47,103.67,26.06Z"/><path class="cls-1" d="M44.91,191.58a6.39,6.39,0,0,0-.5,4.3,5.09,5.09,0,0,0,2.75,3.5,5,5,0,0,0,3.35.34,6.45,6.45,0,0,0,4.13-3.47L69.14,166l-5.08-14.37ZM12.19,100.7a6.51,6.51,0,0,0-4.32-.49A5,5,0,0,0,4.39,103a4.93,4.93,0,0,0-.33,3.36,6.4,6.4,0,0,0,3.47,4.13l50.86,24.35L19.3,148.56a5.86,5.86,0,0,0-4.08,6.63,4.26,4.26,0,0,0,.15.47,5.68,5.68,0,0,0,6.87,3.27c.21-.05.43-.12.65-.19l41.2-14.5-7.92-22.47Zm133.26,31.11,2.1,15.15L174.3,167.2a6.4,6.4,0,0,0,5.26,1.19,5.08,5.08,0,0,0,2.87-1.83,5.23,5.23,0,0,0,.84-4.37,6.52,6.52,0,0,0-2.41-3.6Zm42.74-24.26-41,5.68,34-44.94A6.35,6.35,0,0,0,182.36,63a5,5,0,0,0-1.82-2.88,5.11,5.11,0,0,0-4.36-.84,6.48,6.48,0,0,0-3.61,2.42l-1.43-1.07,1.42,1.07-29.4,38.93,3.27,23.59,43.22-6a3.2,3.2,0,0,0,.7-.12c3.05-.76,5-3.43,4.6-6a2,2,0,0,0-.09-.52,5.84,5.84,0,0,0-6.67-4Z"/><path class="cls-2" d="M26.73,127.64c11.59,47.73,53.49,78.56,93.58,68.81s63.23-56.32,51.63-104.06a103.23,103.23,0,0,0-15-33.9L90.73,74.58l-66.22,16A103.22,103.22,0,0,0,26.73,127.64Z"/><path class="cls-3" d="M72.78,53.76a6.37,6.37,0,1,1-7.7-4.69h0A6.39,6.39,0,0,1,72.78,53.76Z"/><path class="cls-1" d="M70.75,54.26a4.28,4.28,0,1,1-5.18-3.16,4.28,4.28,0,0,1,5.18,3.16Z"/><path class="cls-3" d="M109.89,44.76a6.37,6.37,0,1,1-7.69-4.69h0A6.38,6.38,0,0,1,109.89,44.76Z"/><path class="cls-1" d="M107.86,45.24a4.28,4.28,0,1,1-5.17-3.15A4.29,4.29,0,0,1,107.86,45.24Z"/><path class="cls-3" d="M76.76,150.63q3.58,2.7,7.28,5.19a35.52,35.52,0,0,1,48.52-13c.5.29,1,.59,1.48.9,1.42-2.61,2.81-5.27,4.09-8A44.44,44.44,0,0,0,77,150.28c-.08.11-.15.23-.22.35Zm36,14.37a8.8,8.8,0,0,0-5.81,4.59c4.79,2.57,7.9,4.06,7.9,4.06s2.09-2.75,5.17-7.24a8.86,8.86,0,0,0-7.26-1.46Zm-4.2-17.25a26.51,26.51,0,0,0-17,12.91q4,2.46,7.66,4.57a17.74,17.74,0,0,1,24-7.35A17.08,17.08,0,0,1,125,159c1.5-2.35,3.09-4.89,4.69-7.56a26.55,26.55,0,0,0-21.12-3.73Zm9.14-60.84C103.13,90.43,98.62,106.84,99,108.48c-.39-1.64-11.93-14.15-26.49-10.61a23,23,0,0,0-17.21,27.59l0,.08c1.56,6.43,7.23,13.2,14.49,19.54a53.3,53.3,0,0,1,71.91-17.46c3.54-9,5.49-17.57,3.92-24a23.05,23.05,0,0,0-27.94-16.79h0Z"/></svg>';
      console.log('%c  ', 'font-size:100px; opacity: 0; background-repeat: no-repeat; background-image: url("data:image/svg+xml;utf8,'+escape(lovely_bug_logo)+'"');
    }
    console.log("Built with Love by https://www.lovelysystems.com");
})();
   

$(document).ready(retina);
$(document).ready(function(){ $('.asp_refs a').shuffle() });