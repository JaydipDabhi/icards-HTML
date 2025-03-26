
/* thumbnail Swiper */

var sliderThumbnail = new Swiper(".thumbnailSwiper-slide", {
  loop:true,
  autoplay: true,
  spaceBetween: 8,
  slidesPerView: 3,
  watchSlidesProgress: true,
  breakpoints: {
     1200: {
      spaceBetween: 8,
      slidesPerView: 4,
     },
  },
});
var swiper2 = new Swiper(".thumbnail-slide", {
  loop:true,
  autoplay: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});

$(document).ready(function() {
    // $('#language-toggle').change(function() {
    //     // Check if the checkbox is checked
    //     if ($(this).val() == 'arb') {
    //         // Redirect to another page when checkbox is checked
    //         window.location.href = 'http://203.109.113.157/icards/rtl-index.html';
    //     }else{
    //         window.location.href = 'http://203.109.113.157/icards/';
    //     }
    // });

    //===============  video Js Start  ========================================================//
    const video = document.getElementById("video");
    const circlePlayButton = document.getElementById("circle-play-b");

    function togglePlay() {
    	if (video.paused || video.ended) {
            video.play();
    	} else {
            video.pause();
    	}
    }

    circlePlayButton.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
    	$('.play-button-wrapper').addClass('pause');
    });
    video.addEventListener("pause", function () {
    	$('.play-button-wrapper').removeClass('pause');
    });
});

//=============== Menu JS Mobile  ========================================================//
if ($(window).width() < 992) {

    // new header js only for icon click

    let listItem2 = document.querySelectorAll('.menulist .inner-list .icon-pluse');
    $(listItem2).click(function () {
        var $accordionContent2 = $(this).parent(".inner-list").parent(".menulist").children('.sub-menu');
        if (!$accordionContent2.is(':visible')) {
            $(listItem2).removeClass('active').parent(".inner-list").parent(".menulist").children('.sub-menu').slideUp();
            $(this).addClass('active');
            $accordionContent2.slideDown(350);
        } else {
            $(this).removeClass('active');
            $accordionContent2.slideUp(350);
        }
    });
  
  // new header js only for icon click
  
    let listItem = document.querySelectorAll('.menulist > .nav-link');
    $(listItem).click(function () {
        var $accordionContent = $(this).next('.sub-menu');
        if (!$accordionContent.is(':visible')) {
            $(listItem).removeClass('active').siblings('.sub-menu').slideUp();
            $(this).addClass('active');
            $accordionContent.slideDown(350);
        } else {
            $(this).removeClass('active');
            $accordionContent.slideUp(350);
        }
    });

    let mrColItem = document.getElementsByClassName('menutype');
    $(mrColItem).click(function () {
        var $accordionContent = $(this).next('.inner-nav-wrap');
        if (!$accordionContent.is(':visible')) {
            $(mrColItem).removeClass('active').siblings('.inner-nav-wrap').slideUp();
            $(this).addClass('active');
            $accordionContent.slideDown();
        } else {
            $(this).removeClass('active');
            $accordionContent.slideUp();
        }
    });
}

//=============== Menu JS Desktop  ========================================================//
if ($(window).width() >= 992) {
    $("#menulist").hover(function () {
      $(".sub-menu").stop().slideDown(350);
    }, function(){
      $(".sub-menu").stop().slideUp(350);
    });
}

//===============  backToTop  ===============//
$(document).ready(() => {
    const backToTop = $('#backToTop')
   const amountScrolled = 300
    $(window).scroll(() => {
     $(window).scrollTop() >= amountScrolled 
       ? backToTop.fadeIn('fast') 
       : backToTop.fadeOut('fast')
   })
   
   backToTop.click(() => {
     $('body, html').animate({
       scrollTop: 0
     }, 600)
     return false
   })
})

//===============  header Fixed js  ===============//
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('header').addClass('fixed-header');
    }
    else {
      $('header').removeClass('fixed-header');
    }
});

//===============  Animation Js Start  ========================================================//
$(document).ready(function () {
  function animate() {

    $('.animated').not('.load').each(function (i) {

      var $this = $(this);
      var ind = i * 100;
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + ($(window).height() / 1);
      var elemTop = $this.offset().top;

      if (docViewBottom >= elemTop) {
        setTimeout(function () {
          $this.addClass('load');
          $this.trigger('animated');
        }, ind);
      }
    });
  }

  jQuery(document).ready(function ($) {
    animate();
  });

  $(window).scroll(function () {
    animate();
  });
});

//===============  Home Page Hero Banner Slider  ========================================================//
var swiper1 = new Swiper('.banner-slider', {
    loop:true,
    autoplay: true,
    pauseOnMouseEnter:true,
    speed: 1000,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//===============  Cards Slider  ========================================================//
var swiper2 = new Swiper('.card-slider', {
    slidesPerView: 6,
    loop:true,
    spaceBetween: 12,
    autoplay: true,
    navigation: {
        nextEl: ".card-next",
        prevEl: ".card-prev",
    },
    breakpoints: {
      0: {
         slidesPerView: 2,
        
       },
       576: {
         slidesPerView: 3,
        
       },
       768: {
         slidesPerView: 4,
       },
       1025: {
         slidesPerView:6,
        
       },
    },
});

//===============  Top Deals Slider  ========================================================//
var swiper3 = new Swiper('.top-deals-slider', {
    slidesPerView: 4,
    loop:true,
    spaceBetween: 16,
    autoplay: true,
    navigation: {
        nextEl: ".deals-next",
        prevEl: ".deals-prev",
    },
    breakpoints: {
        0: {
           slidesPerView: 1,
        },
        359: {
            slidesPerView: 1.2,
        },
        375: {
            slidesPerView: 1.4,
        },
        480: {
            slidesPerView: 1.8,
        },
        575: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
        },
        821: {
            slidesPerView: 3,
        },
         1024: {
           slidesPerView:4,
          
         },
    },
});

//===============  card-collections-slider Slider  ========================================================//
var swiper4 = new Swiper('.card-collections-slider', {
    slidesPerView: 4,
    spaceBetween: 16,
    loop:true,
    autoplay: true,
    navigation: {
        nextEl: ".collections-next",
        prevEl: ".collections-prev",
    },
    breakpoints: {
        0: {
           slidesPerView: 1,
        },
        359: {
            slidesPerView: 1.2,
        },
        375: {
            slidesPerView: 1.4,
        },
        480: {
            slidesPerView: 1.8,
        },
        575: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
        },
        821: {
            slidesPerView: 3,
        },
         1024: {
           slidesPerView:4,
          
         },
    },
});

//===============  Entertainment Area Slider  ========================================================//
var swiper5 = new Swiper('.area-slider', {
    loop:true,
    spaceBetween: 31,
    autoplay: true,
    navigation: {
        nextEl: ".entertainment-area-next",
        prevEl: ".entertainment-area-prev",
    },
    breakpoints: {
        320: {
           slidesPerView: 1,
           
         },
         480: {
           slidesPerView: 2,
          
        },
         768: {
           slidesPerView: 2.5,
          
         },
         821: {
            slidesPerView: 3,
          },
         1024: {
           slidesPerView:4,
           
         },
    },
});

//===============  Top Rated Categories Slider  ========================================================//
var swiper6 = new Swiper('.top-rated-categories', {
    slidesPerView: 3,
    loop:true,
    spaceBetween:16,
    autoplay: true,
    navigation: {
        nextEl: ".top-categories-next",
        prevEl: ".top-categories-prev",
    },
    breakpoints: {
        320: {
           slidesPerView: 1,
         },
         480: {
           slidesPerView: 2,
        },
         768: {
           slidesPerView: 2.5,
          
         },
         821: {
            slidesPerView: 3,
          },
         1024: {
           slidesPerView:4,
          
         },
    },
});

//===============  Digital card Slider  ========================================================//
var swiper7 = new Swiper('.digitalcard-slider', {
    loop:true,
    autoplay: true,
    // grabCursor: true,
    slidesPerView: 1,
    speed: 1000,
      effect: "creative",
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  
});
  

//===============  Digital card Brand Slider  ========================================================//
var swiper8 = new Swiper('.brand-slider', {
  loop:true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
       315: {
         slidesPerView: 2,
         spaceBetween: 10,
       },
       375: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
       480: {
         slidesPerView: 4,
         spaceBetween: 10,
      },
       575: {
         slidesPerView: 6,
         spaceBetween: 10,
       },
       991: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView:7,
          spaceBetween: 16,
        },
        1366: {
          slidesPerView:9,
          spaceBetween: 16,
        },
        1600: {
          slidesPerView:9,
          spaceBetween: 16,
        },
  },
});

//===============  Related Items Slider  ========================================================//
var swiper9 = new Swiper('.related-items-slider', {
  slidesPerView: 3,
  loop:true,
  spaceBetween:16,
  navigation: {
      nextEl: ".related-items-next",
      prevEl: ".related-items-prev",
  },
  breakpoints: {
      0: {
            slidesPerView: 1,
      },
      359: {
            slidesPerView: 1.2,
      },
      375: {
            slidesPerView: 1.4,
      },
       480: {
         slidesPerView: 2,
      },
       768: {
         slidesPerView: 2.5,
       },
       821: {
          slidesPerView: 3,
        },
       1024: {
         slidesPerView:4,        
       },
  },
});

//=============== Items Preview JS Start   ========================================================//

$(document).ready(function() {
    // Function to show preview panel and add class to body
    $(".open-preview").click(function() {
        $("body").addClass("show-view-panel");
    });
  
    // Function to hide preview panel and remove class from body
    $(".preview-header .close").click(function() {
        $("body").removeClass("show-view-panel");
    });
  
    // Function to handle click outside of preview wrapper
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".preview-wrapper").length && !$(event.target).hasClass("open-preview")) {
            $("body").removeClass("show-view-panel");
        }
    });
  
    // Prevent click propagation within preview wrapper
    $(".preview-wrapper").on("click", function(event) {
        event.stopPropagation();
    });
  });

//=============== Mobile Search Box   ========================================================//
$(".search_btn").on("click", function (e) {
    $("body").addClass("search-open");
  });

  $(".close-search-bar").on("click", function (e) {
    $("body").removeClass("search-open");
});

//=============== fancybox JS Start   ========================================================//
$().fancybox({
    slideShow:true,
  });
  
  const mySwiper = new Swiper(".swiper-entertainment-listing", {
    loop:true,
    slidesPerView:4,
    spaceBetween:12,
    centeredSlides: false,
    navigation: {
      nextEl: ".fancy-next",
      prevEl: ".fancy-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
     },
       360: {
         slidesPerView: 2.5,
         spaceBetween:8,
      },
       576: {
           slidesPerView:3,
      },
       768: {
         slidesPerView: 4,
         spaceBetween:10,  
       }
  },
  });
  $("[data-fancybox='gallery']").fancybox({
    margin: 10,
    slideShow : {
      autoStart : false,
      speed     : 5000,
   },
     buttons : ['close'],
      hash : false,
      loop: false,
  });


  //=============== language-toggle Js   ========================================================//

  $(document).ready(function() {

    // Toggle dropdown when input field gains focus
    $("#recentSearchInput").focus(function(){
        $("#recentSearchDropdown").show();
    });

    // Hide dropdown when clicking outside of it
    $(document).on("click", function(event){
        if (!$(event.target).closest("#recentSearchDropdown").length && !$(event.target).closest("#recentSearchInput").length) {
            $("#recentSearchDropdown").hide();
        }
    });

    // Prevent dropdown from closing when clicking inside it
    $("#recentSearchDropdown").on("click", function(event){
        event.stopPropagation(); // Prevent event from bubbling up to document
    });

    // Prevent dropdown from closing when clicking inside recent searches dropdown
    $(".recent-search-wrap").on("click", function(event){
        event.stopPropagation(); // Prevent event from bubbling up to document
    });
});


//===============   Range Slider Js  start =========================//
let min = 10;
let max = 100;

const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

$('#rangeMin').on('input', function(e) {
const newValue = parseInt(e.target.value);
if (newValue > max) return;
min = newValue;
$('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
$('#min').html(newValue);
$('#line').css({
    'left': calcLeftPosition(newValue) + '%',
    'right': (100 - calcLeftPosition(max)) + '%'
});
});

$('#rangeMax').on('input', function(e) {
const newValue = parseInt(e.target.value);
if (newValue < min) return;
max = newValue;
$('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
$('#max').html(newValue);
$('#line').css({
    'left': calcLeftPosition(min) + '%',
    'right': (100 - calcLeftPosition(newValue)) + '%'
});
});


  $(function() {
    $(".price-range").click(function(a){
      if($('button.btn-light').hasClass('show')){
        $('button.btn-light').trigger('click');
      }
      $(this).toggleClass('clicked');
      a.stopPropagation();
    });
    $('body,.pricerangelsider').click(function(){
        $('.price-range').removeClass("clicked");     
    });
  });
//===============   Range Slider Js  End =========================//


//===============   Product list sticy js start =========================//
$('.productlist .item').on("click", function() {
    var productsection = $(this).data('section');
    var section = $('.synthetic-leather[data-section=' + productsection + ']');
    $('html, body').animate({
      scrollTop: $(section).offset().top - 130
    }, 'slow');
  });

  
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.productlist').addClass('sticky');
    }
    else {
      $('.productlist').removeClass('sticky');
    }
  });
//===============   Product list sticy js End =========================//



//===============   Side Bar Menu JS Start  =========================//

  $( document ).ready(function() {

    $('.menulist .nav-link').click(function(){
      if($(window).width() > 991){
        var menuId = $(this).parent().attr('data-id');
        var menuTitle = $(this).parent().attr('data-title');
        var menuSrcTitle = $('.sidebar-menu-section .main-navenode > li').eq(menuId).attr('data-src');
        if(menuTitle == menuSrcTitle){
          $('.sidebar-menu-section .main-navenode > li').eq(menuId).find('ul.navenode1').addClass('isOpen');
        }
      }
    });

    var $menuTrigger = $('.js-menuToggle');
    var $topNav = $('.js-topPushNav');
    var $openLevel = $('.js-openLevel');
    var $closeLevel = $('.js-closeLevel');
    var $closeLevelTop = $('.js-closeLevelTop');
    var $navLevel = $('.js-pushNavLevel');
    var $logoutMobile = $(".logout-mobile");
    
    function openPushNav() {
      $topNav.addClass('isOpen');
      $('body').addClass('pushNavIsOpen');
      $('.nmb-01').addClass('fadeInLeft animated load delay-01s');
      $('.nmb-02').addClass('fadeInRight animated load delay-02s');
      $('.nmb-03').addClass('fadeInUp animated load delay-04s');
      $('.digital-new').addClass('fadeInLeft animated load delay-04s');
      $('.entertainment-new').addClass('fadeInLeft animated load delay-06s');
      $('.accessories-new').addClass('fadeInLeft animated load delay-08s');
    }
    $("body").append("<span class='body-append'></span>");
    function closePushNav() {
      $topNav.removeClass('isOpen');
      $openLevel.siblings().removeClass('isOpen');
      $('body').removeClass('pushNavIsOpen');
    }
    
    $menuTrigger.on('click touchstart', function(e) {
      e.preventDefault();
      if ($topNav.hasClass('isOpen')) {
        closePushNav();
      } else {
        openPushNav();
      }
    });
    
    $openLevel.on('click touchstart', function(){
      $(this).next($navLevel).addClass('isOpen');
    });
    
    $closeLevel.on('click touchstart', function(){
      $(this).closest($navLevel).removeClass('isOpen');
    });

    $logoutMobile.on('click touchstart', function(){
      console.log("logOut")
      setTimeout(() => {
        $('body').removeClass('pushNavIsOpen');
        $openLevel.siblings().removeClass('isOpen');
        $topNav.removeClass('isOpen');
      }, 500);
    });
    
    $closeLevelTop.on('click touchstart', function(){
      closePushNav();
    });
    
    $closeLevelTop.on('click touchstart', function(){
      closePushNav();
    });
    $('.body-append').click(function() {
        closePushNav();
    });
    });
//===============   Side Bar Menu JS End  =========================//

 var swiper20 = new Swiper('.login-banner', {
  loop:true,
  autoplay: true,
  pauseOnMouseEnter:true,
  speed: 1000,
  effect: "creative",
  creativeEffect: {
      prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
      },
      next: {
      translate: ["100%", 0, 0],
      },
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  });


  $('#filterCard').selectpicker();




  // ==============  counter Js Start =================== //

  document.querySelector('.TrashIcon').style.display = 'inline-block';
  document.querySelector('.minusIcon').style.display = 'none';
   document.addEventListener('DOMContentLoaded', function () {
      // Get the counter element
      var counterElement = document.getElementById('counterValue');

      // Get the plus and minus buttons
      var minusButton = document.querySelector('.quantity__minus');
      var plusButton = document.querySelector('.quantity__plus');

      // Add click event listener to the minus button
      minusButton.addEventListener('click', function () {
          // Get the current counter value
          var currentValue = parseInt(counterElement.innerText, 10);
          
          // Decrease the counter value (if greater than 1)
          if (currentValue > 1) {
              var number = currentValue - 1
              counterElement.innerText = leftPad(number,2);
          }

          setTrash(counterElement.innerText);
      });

      // Add click event listener to the plus button
      plusButton.addEventListener('click', function () {
          // Get the current counter value
          var currentValue = parseInt(counterElement.innerText, 10);

          // Increase the counter value
          var number = currentValue +   1;
          counterElement.innerText = leftPad(number,2);
          setTrash(counterElement.innerText);
      });

      let readLessElement = '<a href="javascript:void(0);" class="read-less" title="Read Less">Read Less</a>';
      const lastIndex = document.querySelectorAll('.conditions-list li.condlist-li').length-1
      document.querySelectorAll('.conditions-list li.condlist-li')[lastIndex].insertAdjacentHTML('beforeend', readLessElement);
      /*======Readmore=======*/
      $('.read-more').click(function() {
        $(this).css({'display':'none'});
        $('.read-less').css({'display':'inline'});
        $(this).parents('.conditions-list').find('li.condlist-li').slideDown(200);
      });
      $('.read-less').click(function() {
        $(this).css({'display':'none'});
        $(this).parents('.conditions-list').find('li.condlist-li').slideUp(200, function () {
          $('.read-more').css({'display':'inline-block'});
        });
      });

      
  });

  function setTrash(currentValue){
      console.log("currentValue = "+ currentValue);
      if (currentValue == 1) {
          document.querySelector('.TrashIcon').style.display = 'inline-block';
          document.querySelector('.minusIcon').style.display = 'none';
      }
      else{
          document.querySelector('.TrashIcon').style.display = 'none';
          document.querySelector('.minusIcon').style.display = 'inline-block';
      }
  }

  function leftPad(number, targetLength) {
      var output = number + '';
      while (output.length < targetLength) {
          output = '0' + output;
      }
      return output;
  }

  // ==============  counter Js End =================== //

//===============  Popular Iteam-slider  =================//
  var swiper16 = new Swiper('.popularItem-slider', {
    slidesPerView: 3,
    loop:true,
    spaceBetween:16,
    autoplay: false,
    navigation: {
        nextEl: ".top-categories-next",
        prevEl: ".top-categories-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
          
        },
        821: {
            slidesPerView: 3,
          },
        1024: {
          slidesPerView:4,
          
        },
    },
  });
  // ================show hide ===========

  document.addEventListener("DOMContentLoaded", function () {
    // Run this code when the DOM is fully loaded
    var list = document.getElementById("list");
    var listItems = list.getElementsByTagName("li");

    // Hide items 6 to 10 initially
    for (var i = 5; i < listItems.length; i++) {
        listItems[i].style.display = "none";
    }

    var buttonText = document.getElementById("toggleButton");
    if (listItems.length <= 5) {
        buttonText.style.display = "none";
    }
});

  function toggleList() {
    var list = document.getElementById("list");
    var listItems = list.getElementsByTagName("li");

    for (var i = 5; i < listItems.length; i++) {
        listItems[i].style.display = (listItems[i].style.display === "none" || listItems[i].style.display === "") ? "list-item" : "none";
    }

    var buttonText = document.getElementById("toggleButton");

    if (buttonText.innerHTML === "Show More") {
        buttonText.innerHTML = "Show Less";
    } else {
        buttonText.innerHTML = "Show More";
    }
}


// ========== Reset Filter ===========

// function resetForm() {
//   var form = document.getElementById("myForm");
//   form.reset();
// }


$(document).ready(function(){
  $("#filterMobile").click(function(){
    $(".accessories-filter").addClass("show");
  });
  $(".ftl-close").click(function(){
    $(".accessories-filter").removeClass("show");
  });
});