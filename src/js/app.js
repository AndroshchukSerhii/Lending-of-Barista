function openTab(evt, Name) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("course__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Name).style.display = "flex";
    evt.currentTarget.className += " active";
}
var scrollPage = (function() {
  return {
    set: function() {
      $("a[href*=#]").on("click", function(e){
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top
          }, 777);
          e.preventDefault();
          return false;
      });
    }
  }
}());

var blogMenu = (function() {
  var 
    linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.5, // скорость скрола при нажатии на меню
    activeHeight =  50; // высота от верха экрана при которой срабатывает переключение
  // var 
    // stickySidebar = $('.header-wrap').offset().top + 300;
    
    var navFixed = $(".header-wrap"),
        navHeight = $('.header-wrap').height();

  return {
    set: function(){  
        var nav = $('.header-wrap');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("header-wrap-fix");
        } else {
            nav.removeClass("header-wrap-fix");
        }
    });
      window.addEventListener('scroll', function(e) {
        var 
          nav = document.querySelectorAll('[id^="nav"]');

        // for (var i = 0; i < nav.length; i++) { 
        //   // document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top-activeHeight && nav[i].getBoundingClientRect().top >= activeHeight-nav[i].offsetHeight) ? 'blog__list-item_active' : '');
        // }
      }, false);
    }
  }
}());

$(document).ready(function(){
    if ($('#section').length) {
      scrollPage.set();
    }
    if ($('.header-wrap').length) {
    blogMenu.set();
    }
    $('.slider-one').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    center: false,
    stagePadding: 0,
    dots: false,
    // autoWidthClass: 'thems__auto',
    autoplay: false,
    navText: ["<img src=\"assets/img/arrow2.png\"</img>","<img src=\"assets/img/arrow2.png\"</img>"],
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        770:{
            items:3
        },
        1770:{
            items:5
        }
    }
})
$('.slider-two').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    smartSpeed:2000,
    center: false,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout:4000,
    startPosition: 2,
    navText: ["&#10096;","&#10097;"],
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slider-three').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    smartSpeed:500,
    center: false,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout:6000,
    startPosition: 2,
    navText: ["&#10096;","&#10097;"],
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        900:{
            items:5
        },
        1239:{
            items:6
        }
    }
})
$(window).scroll(function (){
    $(' .mov').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass($(this).data('animation'));
                // alert("lox")
            }
        });
    });﻿
});