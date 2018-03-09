jQuery('#bg_slide').backstretch([
    '../images/traveller/main-search-video-poster.jpg',
    '../images/traveller/seaworld.jpg',
    '../images/traveller/pasar-tanah-abang.jpg',
    '../images/traveller/kotatua.jpg'
], {
    duration: 3000,
    fade: 750
  });

jQuery('#bg_slide_one').backstretch([
  '../images/traveller/kotatua.jpg'
], {
  duration: 3000,
  fade: 750
});

$('.slide-fullwidth-list').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1441,
            settings: {
                centerPadding: '10%',
                slidesToShow: 3
              }
          }, {
            breakpoint: 1025,
            settings: {
                centerPadding: '10px',
                slidesToShow: 2
              }
          }, {
            breakpoint: 767,
            settings: {
                centerPadding: '10px',
                slidesToShow: 1
              }
          }
    ]
  });

$('.slide-fullwidth-smalllist').slick({
  centerMode: false,
  centerPadding: '15%',
  slidesToShow: 5,
  dots: true,
  arrows: false,
  responsive: [
      {
          breakpoint: 1441,
          settings: {
              centerPadding: '10%',
              slidesToShow: 6
            }
        }, {
          breakpoint: 1025,
          settings: {
              centerPadding: '10px',
              slidesToShow: 5
            }
        }, {
          breakpoint: 767,
          settings: {
              centerPadding: '10px',
              slidesToShow: 2
            }
        }
  ]
});

$('.slide-fullwidth-listing').slick({
  centerMode: false,
  centerPadding: '0%',
  slidesToShow: 5,
  dots: false,
  arrows: true,
  responsive: [
      {
          breakpoint: 1441,
          settings: {
              centerPadding: '10%',
              slidesToShow: 5
            }
        }, {
          breakpoint: 1025,
          settings: {
              centerPadding: '10px',
              slidesToShow: 5
            }
        }, {
          breakpoint: 767,
          settings: {
              centerPadding: '10px',
              slidesToShow: 2
            }
        }
  ]
});

$('.slide-center-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
          }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          }
    ]
  });

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


// This will create a single gallery from all elements that have class "gallery-item"

$(document).ready(function() {
  $('.gallery-item').magnificPopup({
    delegate: 'a',
    type: 'image',
    // tLoading: 'Loading image #%curr%...',
    // mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      //navigateByImgClick: true,
      //preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    // image: {
    //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //   titleSrc: function(item) {
    //     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    //   }
    // }
  });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 100) {
    //console.log('a');
    $('.header-single').addClass('-scroll');
  } else {
    //console.log('a');
    $('.header-single').removeClass('-scroll');
  }
});
