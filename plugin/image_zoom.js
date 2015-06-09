(function(){
	var isEnabled = true;
    var image_zoom = document.querySelector('#image_zoom');
    image_zoom.innerHTML = '<img id=image_show src=""/>'
    var hide = function() { image_zoom.style.display = 'none'; };
    var show = function(_src) { return function() {
            var image_show = document.getElementById('image_show');
            var image_zoom_show = document.getElementById('image_zoom');
            image_zoom.style.display = 'inline';
            image_show.src = _src;
        }; };
    image_zoom.addEventListener('click', hide);
    document.querySelector('#image_show').addEventListener('click', hide);
	var images = document.querySelectorAll( 'img' );
    for (var i = 0; i < images.length; i++)
        images[i].addEventListener('click', show(images[i].src), false);
    }
})()
