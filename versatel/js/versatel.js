/*
 @name      Versatel
 @author    Peter Burdette
 @version   1.0
 @license   Released under the MIT license.
*/

$(function () {
    // Default controls
    var defControls = {
        content: 'img', // Sets the content type of the carsousel. Accepts any DOM element (div, img, table, etc.)
        showControls: true, // If set to false, the carousel's navigational controls will be hidden.
        effect: 'default', // Sets the slide transition effect. Supports default, fade, slide, verticalSlide and slidingFade.
        effectDuration: 0.25, // Sets the animation speed in seconds (to be used in tandem with effect).
        prevText: '&laquo; Previous', // Sets the text for the "Previous" button.
        nextText: 'Next &raquo;', // Sets the text for the "Next" button.
        containerWidth: 'auto', // Sets the width of the content container for non-image DOM elements.
        cycleback: false, // If set to true, this setting will allow for the cycling back through content if the min or max index is reached.
        autoplay: false, // If set to true, the carousel will start playing after the page loads.
        pauseTime: 10 // Sets the pause time in between each slide (to be used in tandem with autoplay).
    };

    // Variable declarations
    var controls = {};

    // Checks for userControls
    if (typeof userControls !== 'undefined') {
        controls = $.extend({}, defControls, userControls);
    } else {
        controls = defControls;
    }

    var $el = $('#showcase');
    var $leftArrow = '#left_arrow';
    var $rightArrow = '#right_arrow';
    var slideCount = $el.children().length;
    var slideContent = $el.children();
    var slideNum = 1;
    var counter = $('.active').index();

    // Sets the showcase width
    if (controls.content !== 'img') {
        if (userControls.containerWidth == 0 || userControls.containerWidth == undefined) {
            controls.containerWidth = 800;
            $el.css('width', controls.containerWidth);
        } else {
            $el.css('width', userControls.containerWidth);
        }
    }

    // Finds the first child in #showcase and sets it to active
    $el.find(controls.content)[0].setAttribute('class', 'active');

    // Checks to see if the setting for carousel controls are set to show on the page
    if (controls.showControls === true) {
        $(
            '<div id="controls"><a href="#" id="' +
            $leftArrow.replace('#', '') +
            '">' +
            controls.prevText +
            '</a> <a href="#" id="' +
            $rightArrow.replace('#', '') +
            '">' +
            controls.nextText +
            '</a></div>'
        ).insertAfter('#showcase');
        $('#controls').find('#left_arrow').addClass('disabled');
    }

    // Checks to see if the setting for cycleback is enabled
    if (controls.cycleback === true) {
        $('#controls').find('#left_arrow').removeClass('disabled');
    }

    // Checks to see if the setting for autoplay is enabled
    if (controls.autoplay === true) {
        $('#controls').find('#left_arrow').removeClass('disabled');
        controls.cycleback = true;
        var interval;
        var timer = function () {
            interval = setInterval(function () {
                $('#right_arrow').click();
            }, controls.pauseTime * 1000);
        };
        timer();
    }

    // Logic for the carousel effects
    function effects(action) {
        switch (controls.effect) {
            // Fade effect
            case 'fade':
                if (controls.content == 'img') {
                    $el.css('background', '#000');
                }

                $('.slide').stop().animate({
                    opacity: 0
                }, controls.effectDuration * 300, function () {
                    $('.active').stop().animate({
                        opacity: 1
                    }, controls.effectDuration * 1000);
                });
                break;

                // Slide effect
            case 'slide':
                if (action == 'prev') {
                    if (controls.content == 'img') {
                            containerWidth = 2000;
                        } else {
                            containerWidth = controls.containerWidth;
                        }
                    $('.slide').css('left', -containerWidth);
                    $('.slide')
                        .stop()
                        .animate({
                                left: -containerWidth
                            }, controls.effectDuration * 800,
                            function () {
                                $('.active').stop().animate({
                                    left: 0
                                }, controls.effectDuration * 1000);
                            }
                        );
                } else if (action == 'next') {
                    if (controls.content == 'img') {
                            containerWidth = 2000;
                        } else {
                            containerWidth = controls.containerWidth;
                        }
                    $('.slide').css('left', containerWidth);
                    $('.slide')
                        .stop()
                        .animate({
                                left: containerWidth
                            }, controls.effectDuration * 800,
                            function () {
                                $('.active').stop().animate({
                                    left: 0
                                }, controls.effectDuration * 1000);
                            }
                        );
                }
                break;

            case 'verticalSlide':
                if (action == 'prev') {
                    if (controls.content == 'img') {
                            containerWidth = 2000;
                        } else {
                            containerWidth = controls.containerWidth;
                        }
                    $('.slide').css('top', -containerWidth);
                    $('.slide')
                        .stop()
                        .animate({
                                top: -containerWidth
                            }, controls.effectDuration * 800,
                            function () {
                                $('.active').stop().animate({
                                    top: 0
                                }, controls.effectDuration * 1000);
                            }
                        );
                } else if (action == 'next') {
                    if (controls.content == 'img') {
                            containerWidth = 2000;
                        } else {
                            containerWidth = controls.containerWidth;
                        }
                    $('.slide').css('top', containerWidth);
                    $('.slide').stop().animate({
                            top: containerWidth
                        }, controls.effectDuration * 800,
                        function () {
                            $('.active').stop().animate({
                                top: 0
                            }, controls.effectDuration * 1000);
                        }
                    );
                }
                break;

                // Sliding fade effect
            case 'slidingFade':
                if (action == 'prev') {
                    if (controls.content == 'img') {
                            containerWidth = 2000;
                        } else {
                            containerWidth = controls.containerWidth;
                        }
                    $('.slide').css('left', -containerWidth);
                    $('.slide').stop().animate({
                            left: -containerWidth,
                            opacity: 0
                        }, controls.effectDuration * 1400,
                        function () {
                            $('.active').stop().animate({
                                left: 0,
                                opacity: 1
                            }, controls.effectDuration * 1200);
                        }
                    );
                } else if (action == 'next') {
                    if (controls.content == 'img') {
                            containerWidth = 2000;
                        } else {
                            containerWidth = controls.containerWidth;
                        }
                    $('.slide').css('left', containerWidth);
                    $('.slide').stop().animate({
                            left: containerWidth,
                            opacity: 0
                        }, controls.effectDuration * 1400,
                        function () {
                            $('.active').stop().animate({
                                left: 0,
                                opacity: 1
                            }, controls.effectDuration * 1200);
                        });
                }
                break;

                // Default effect
            case 'default':
                break;
        }
    }

    // Checks for the first and last index in the carousel
    function checkSlide() {
        if (controls.cycleback === false) {
            if (slideNum == 1) {
                $($leftArrow).addClass('disabled');
            } else {
                $($leftArrow).removeClass('disabled');
            }

            if (slideNum == slideCount) {
                $($rightArrow).addClass('disabled');
            } else {
                $($rightArrow).removeClass('disabled');
            }
        } else {
            $($leftArrow).removeClass('disabled');
            $($rightArrow).removeClass('disabled');
        }
    }

    // Navigational logic for the previous/next buttons
    $(document).on('click', $leftArrow, function (e) {
        if (controls.cycleback === false) {
            if (slideNum > 1) {
                $('.active').addClass('slide');
                $('.active').removeClass('active');

                slideNum--;
                if (slideNum == -1) {
                    slideNum = slideCount;
                }
                counter = slideNum - 1;
                // Sends the effect value to the switch
                effects('prev');
                $el.find(controls.content).eq(counter).addClass('active');

                // Checks the current slide index
                checkSlide();
            }
            e.preventDefault();
        } else {

            slideNum--;
            if (slideNum == -1) {
                slideNum = slideCount - 1;
            }
            counter = slideNum - 1;
            if (counter < 0) {
                counter = counter + slideCount;
            }

            effects('prev');
            $('.active').addClass('slide');
            $('.active').removeClass('active');
            $el.find(controls.content).eq(counter).addClass('active');

            // Checks the current slide index
            checkSlide();

            // Resets the autoplay timer if previous is clicked
            if (controls.autoplay === true) {
                clearInterval(interval);
                timer();
            }

            e.preventDefault();
        }
    });

    $(document).on('click', $rightArrow, function (e) {
        if (controls.cycleback === false) {
            if (slideNum < slideCount) {
                counter = slideNum;
                $('.active').addClass('slide');
                $('.active').removeClass('active');
                // Sends the effect value to the switch
                effects('next');
                $el.find(controls.content).eq(counter).addClass('active');

                if (slideNum < slideCount) {
                    slideNum++;
                }

                // Checks the current slide index
                checkSlide();
            }
            e.preventDefault();
        } else {
            if (slideNum < slideCount) {
                counter = slideNum;
                $('.active').addClass('slide');
                $('.active').removeClass('active');

                // Sends the effect value to the switch
                effects('next');
                $el.find(controls.content).eq(counter).addClass('active');
                slideNum++;

                if (slideNum == slideCount) {
                    slideNum = 0;
                } else if (slideNum < 0) {
                    slideNum = slideCount + slideNum;
                }

                // Checks the current slide index
                checkSlide();

                // Resets the autoplay timer if previous is clicked
                if (controls.autoplay === true) {
                    clearInterval(interval);
                    timer();
                }
            } else {
                counter = (slideCount - slideNum);
                $('.active').addClass('slide');
                $('.active').removeClass('active');

                // Sends the effect value to the switch
                effects('next');
                $el.find(controls.content).eq(counter).addClass('active');
                slideNum++;

                if (slideNum == slideCount) {
                    slideNum = 0;
                } else if (slideNum < 0) {
                    slideNum = slideCount + slideNum;
                }

                // Checks the current slide index
                checkSlide();

                // Resets the autoplay timer if previous is clicked
                if (controls.autoplay === true) {
                    clearInterval(interval);
                    timer();
                }
            }
            e.preventDefault();
        }
    });
});