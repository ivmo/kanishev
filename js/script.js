$(document).ready(function(){

function scrollParallax(current){

        var currentMultiplier = 0.2;
        var currentDirection = 'down';
        var defaultOffset = 0;

        if($(current).attr('data-multiplier')) {
            currentMultiplier = $(current).attr('data-multiplier');
        }

        if($(current).attr('data-direction')) {
            currentDirection = $(current).attr('data-direction');
        }

        if($(current).attr('data-start')){
            defaultOffset = parseFloat($(current).attr('data-start'));
        }

        var make = function(){
            var scrollTop = window.pageYOffset;

            var currentDelta = $(current).attr('data-pos');

            var newDelta = (0 - (scrollTop * currentMultiplier));

            if(currentDirection == "down") {
                newDelta = (0 + (scrollTop * currentMultiplier));
            }

            var tweenDelta = (currentDelta - ((currentDelta - newDelta) * 0.08));

            var posResult = tweenDelta + defaultOffset;
            $(current).css(
                {
                    '-webkit-transform' : 'translate3d(0px, '+posResult+'px, 0px)',
                    '-ms-transform'     : 'translate3d(0px, '+posResult+'px, 0px)',
                    '-o-transform'      : 'translate3d(0px, '+posResult+'px, 0px)',
                    'transform'         : 'translate3d(0px, '+posResult+'px, 0px)'
                });

            $(current).attr('data-pos', tweenDelta);

            window.requestAnimationFrame(make);
        }
        if(window.requestAnimationFrame) {
            make();
        }
    };



    function scrollParallaxDestroy(current){
        $(current).css(
            {
                '-webkit-transform' : 'translate3d(0px, 0px, 0px)',
                '-ms-transform'     : 'translate3d(0px, 0px, 0px)',
                '-o-transform'      : 'translate3d(0px, 0px, 0px)',
                'transform'         : 'translate3d(0px, 0px, 0px)'
            });
    }


        $('.scroll-parallax').each(function () {
            scrollParallax($(this));
        });

    new WOW().init();


    jQuery("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

});

google.maps.event.addDomListener(window, 'load', init);

       function init() {

           var mapOptions = {
             scrollwheel: false,
               zoom: 15,

               center: new google.maps.LatLng(59.848634, 30.204301),

               styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]}]

           };


           var mapElement = document.getElementById('map1');

           var map = new google.maps.Map(mapElement, mapOptions);

           var point1 = new google.maps.LatLng(59.848634, 30.204301);


           var mapOptions2 = {
             scrollwheel: false,
               zoom: 15,

               center: new google.maps.LatLng(59.836677, 30.245521),

               styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]}]

           };


           var mapElement2 = document.getElementById('map2');

           var map2 = new google.maps.Map(mapElement2, mapOptions2);

           var point2_1 = new google.maps.LatLng(59.836677, 30.245521);
       }
