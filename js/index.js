(function() {
    var img = new Image();
    img.src = "media/_Y8Q7598.JPG";
    console.log(img);
    img.onload = function(){
        console.log("loaded");
        Reveal.initialize({
            autoSlide: 8000,
            width: '100%',
            height: '100%',
            margin: 0,
            controls: false,
            loop: true,
            overview: false,
            dependencies: [ { src: 'plugin/image_zoom/image_zoom.js', async: true }, ],
        });
    }
})()
