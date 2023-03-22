var sections = document.querySelectorAll('#wrapper section');
$paddingTop=0;
$paddingBottom=0;
lastScrollPos=80;
$(document).ready(function(){ 

$('#homepage-slide-desktop').height($(window).height());
setTimeout(function(){
  $('.tabbed_animate .tabbed_nav').addClass('active');
},500);

  sliders();
  styleIsotope();
  accordionMenu();
  coreAnimation();
  fullHeight();
  infoBox();
  megaMenu();
  megaMenuNews();
  buttonIcons();
  loadYouTubeApi();
  play_btn();
  word_animation();
  addMoreBtn();
  fancyBoxImages();
  pageDown();
  scrollDown();
  videoSectionBtn();
  pageBreak();
  inputAnim();
  tab_list_images();
  flip_face();
  search_modal();
  logo_hover_link();
  cookie_modal();
  setTimeout(function(){
    TweenMax.staggerTo('.write_text span',.02, { css:{'opacity':'1'}, ease: Power1.easeInOut},0.02);
  },500);


  menuBtn();

  $('input[type="text"],input[type="email"],textarea').on('input', function(){
    if($(this).attr('name')!='occ_other_text') {
      if($(this).val()=='') {
        $(this).parents('label').removeClass('animate');
      } else {
        $(this).parents('label').addClass('animate');
      }
    }
  });
  $('input[type="text"],input[type="email"],textarea').on('focus', function(){
    if($(this).attr('name')!='occ_other_text') {
      $(this).parents('label').addClass('animate');
    }
  });
  $('input[type="text"],input[type="email"],textarea').on('focusout', function(){
    if($(this).attr('name')!='occ_other_text') {
      if($(this).val()=='') {
        $(this).parents('label').removeClass('animate');
      } else {
        $(this).parents('label').addClass('animate');
      }
    }
  });
  $('input[type="text"], input[type="email"], textarea').each(function(){
    if($(this).attr('name')!='occ_other_text') {
      if($(this).val()!='') {
        $(this).parents('label').addClass('animate');
      }
    }
  });
  $('input.date').on('focus', function(){
    $(this).parents('label').addClass('animate');
  });
  $('input.date').on('focusout', function(){
    $(this).parents('label').addClass('animate');
  });
  
});

$('.contained_left').css({'padding-left':($(window).width() - $('.content_wrapper .container').width())/2,'opacity':'1'});
$('.contained_right').css({'padding-right':($(window).width() - $('.content_wrapper .container').width())/2,'opacity':'1'});

$(window).on('resize',function(){ 
  fullHeight();
});

$(window).on('scroll',function(){
  setSections();
  if($(window).scrollTop() > lastScrollPos) {
    $('header').addClass('hide_header');
  }
  else {
    $('header').removeClass('hide_header');
  }
  if($(window).scrollTop()>80) {
    lastScrollPos = $(window).scrollTop();
    $('header').addClass('fixed_top');
  } else {
    lastScrollPos = 80;
    $('header').removeClass('fixed_top');
  }
});


function cookie_modal() {
  $('a[href="/#change-cookie"]').on('click',function(e) {
    e.preventDefault();
    $('.lcc-button.lcc-button--link.js-lcc-settings-toggle').trigger('click');
    $('.lcc-backdrop.js-lcc-backdrop').css({'opacity':1});
    $('div[role="dialog"]').css({'display':''});
    $('div[role="dialog"]').removeAttr('aria-hidden');
    $('div[role="dialog"]').removeAttr('inert');
  });
}

function scrollDown() {
  $('.scroll_icon').on('click', function(){
    $(window).scrollTop($(this).parents('section').offset().top + $(this).parents('section').height());
  });
}
function logo_hover_link() {
  $('.logo_hover_link').on('mouseenter', function(){
    var imgSrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',$(this).attr('data-href'));
    $(this).attr('data-href',imgSrc);
  });
  $('.logo_hover_link').on('mouseleave', function(){
    var imgSrcH = $(this).find('img').attr('src');
    $(this).find('img').attr('src',$(this).attr('data-href'));
    $(this).attr('data-href',imgSrcH);
  });
}
function search_modal() {
  $('.search-close').on('click', function(){
    TweenMax.to('.search-form',.3, {opacity:0 ,
      onComplete:function(){
        TweenMax.to('.search-form',.0, { css:{'display':'none'} });
      }
    });
  });

  $('.splash-overlay, .splash-close').on('click', function(){
    TweenMax.to('#splash-modal-container',.4, { opacity:0, 
      onComplete:function(){
        $('#splash-modal-container').remove();
      } 
    });
  });

  $('.search a, .search-btn-mobile a').on('click', function(e){
    e.preventDefault();
    TweenMax.to('.search-form',0, { css:{'display':'block'},
      onComplete:function(){
        TweenMax.to('.search-form',.3, { opacity:1 });
      }
    });
    $('.search-form input').focus();
  });

  $('.search-close').on('click', function(){
    TweenMax.to('.search-form',.3, {opacity:0 ,
      onComplete:function(){
        TweenMax.to('.search-form',.0, { css:{'display':'none'} });
      }
    });
  });
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      TweenMax.to('.search-form',.3, {opacity:0 ,
        onComplete:function(){
          TweenMax.to('.search-form',.0, { css:{'display':'none'} });
        }
      });
    }
  });
  $('#search_media, .media_search_label').on('click', function(){
    $('.media_search_label').css({'opacity':'0'});
  });

  if($('#search_media').val()!='') {
    $('.media_search_label').css({'opacity':'0'});
  }
}

function flip_face() {
  $('.flip_faces').on('click', function(e) {
    e.preventDefault();
    var elm = $(this);
    if(elm.hasClass('active')) {
      elm.removeClass('active');
    } else {
      $('.flip_faces').removeClass('active');
      elm.addClass('active');
    }
  });
}
var menuClicked = true;

function megaMenu() {
  $('.mega_container .close_menu').on('click', function(){
    menuClicked = false;
    //$('header .navbar-main .navbar-nav li.mega_menu').unbind();
    $('header .navbar-main .navbar-nav li.mega_menu').trigger('mouseleave');
    $('header .navbar-main .navbar-nav li.mega_menu .mega_container').css({'overflow':''});
    $('header .navbar-main .navbar-nav li.mega_menu').removeClass('m_active');
    if($(window).width()>1290) {
      $('header').removeClass('head_active');
    }
    setTimeout(function(){
      menuClicked = true;
    },620);
  });
  if($(window).width() > 1290) {
    $('header .navbar-main .navbar-nav li.mega_menu>a').on('click', function(e) {
      e.preventDefault();
    });
    $('header .navbar-main .navbar-nav li.mega_menu').on('mouseenter', function(e) {
      e.preventDefault();
      if(menuClicked==true) {
        console.log(1);
        var elm = $(this).find('a').first();
        $('header .navbar-main .navbar-nav.header_second_nav li.low_menu').removeClass('hovered');
        
        $('header .navbar-main .navbar-nav li.mega_menu .mega_container').css({'overflow':''});
        $('header .navbar-main .navbar-nav li.mega_menu').removeClass('m_active');
        $(elm).parents('li').addClass('m_active');
        //setTimeout(function() {
        //  elm.parents('li').find('.mega_container').css({'overflow':'visible'});
        //},200);
        if($(window).width()>1290) {
          $(elm).parents('header').addClass('head_active');
        }
        if($(elm).parents('li').attr('data-href')=='cozumlerimiz' || $(elm).parents('li').attr('data-href')=='solutions' || $(elm).parents('li').attr('data-href')=='heller') {
          if($('.first_child_cont ul li.active').attr('data-href')=='urunler' || $('.first_child_cont ul li.active').attr('data-href')=='products') {
            productMenu($(elm).parent('li').find('.mega_main'));
          }
        }
      }
    });
    $('header .navbar-main .navbar-nav li.mega_menu').on('mouseleave', function(e) {
      e.preventDefault();
      var elm = $(this).find('a').first();
      $('header .navbar-main .navbar-nav.header_second_nav li.low_menu').removeClass('hovered');
        //$('header .navbar-main .navbar-nav li.mega_menu .mega_container').css({'overflow':''});
        $('header .navbar-main .navbar-nav li.mega_menu').removeClass('m_active');
        if($(window).width()>1290) {
          $('header').removeClass('head_active');
        }
    });
  } else {
    $('header .navbar-main .navbar-nav li.mega_menu>a').on('click', function(e) {
      e.preventDefault();
      var elm = $(this);
      $('header .navbar-main .navbar-nav.header_second_nav li.low_menu').removeClass('hovered');
      if($(this).parents('li').hasClass('m_active')) {
        $('header .navbar-main .navbar-nav li.mega_menu .mega_container').css({'overflow':''});
        $('header .navbar-main .navbar-nav li.mega_menu').removeClass('m_active');
        if($(window).width()>1290) {
          $('header').removeClass('head_active');
        }
      } else {
        $('header .navbar-main .navbar-nav li.mega_menu .mega_container').css({'overflow':''});
        $('header .navbar-main .navbar-nav li.mega_menu').removeClass('m_active');
        $(this).parents('li').addClass('m_active');
        setTimeout(function() {
          elm.parents('li').find('.mega_container').css({'overflow':'visible'});
        },200);
        if($(window).width()>1290) {
          $(this).parents('header').addClass('head_active');
        }
      }
      if($(this).parents('li').attr('data-href')=='cozumlerimiz' || $(this).parents('li').attr('data-href')=='solutions' || $(elm).parents('li').attr('data-href')=='heller') {
        if($('.first_child_cont ul li.active').attr('data-href')=='urunler' || $('.first_child_cont ul li.active').attr('data-href')=='products') {
          productMenu($(this).parent('li').find('.mega_main'));
        }
      }
    });
  }
  $('header .navbar-main .navbar-nav li.mega_menu .mega_main .first_child_cont ul li.open_menu>a').on('click', function(e) {
    e.preventDefault();
    $('.hizmet_infos').remove();
    if($(this).parent('li').hasClass('active')) {
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .first_child_cont ul li').removeClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont>ul').removeClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul').removeClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont').removeClass('w_0');
    } else {
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .first_child_cont ul li').removeClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont>ul').removeClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont').removeClass('w_0');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul').removeClass('active');
      $(this).parent('li').addClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont>ul').eq($(this).parents('li').index()).addClass('active');

      if($(this).parent('li').attr('data-href')=='urunler' || $(this).parent('li').attr('data-href')=='products' || $(this).parent('li').attr('data-href')=='mehsullar') {  
        var secondIndex = $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont>ul>li.active').attr('data-href');
        $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul[data-parent="'+secondIndex+'"]').addClass('active');
        productMenu($(this).parents('.mega_main'));
      }

      if($(this).parent('li').attr('data-href')=='cozumlerimiz/hizmetlerimiz' || $(this).parent('li').attr('data-href')=='solutions/services' || $(this).parent('li').attr('data-href')=='heller/xidmetler') {  
        $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont>ul.active>li').removeClass('active');
        $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont').addClass('w_0');
        hizmetlerMenu($(this).parents('.mega_main'));
      }
      if($(window).width() < 769) {
        $(this).parents('.mega_main').find('.second_child_cont').addClass('active');
        $(this).parents('.mega_main').find('.second_child_cont').prepend('<span class="menu_back"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3588 20.009C11.3067 20.0572 11.2676 20.1174 11.2416 20.1777C11.2416 20.1777 11.2416 20.1777 11.2416 20.1897C11.2155 20.25 11.2025 20.3102 11.2025 20.3825C11.2025 20.4548 11.2155 20.515 11.2416 20.5753C11.2416 20.5753 11.2416 20.5753 11.2416 20.5873C11.2676 20.6476 11.3067 20.7078 11.3588 20.756L18.7723 27.6114C18.9938 27.8162 19.3456 27.8162 19.5671 27.6114C19.7886 27.4066 19.7886 27.0813 19.5671 26.8765L13.1177 20.8885L28.0765 20.8885C28.3892 20.8885 28.6367 20.6596 28.6367 20.3705C28.6367 20.0813 28.3892 19.8524 28.0765 19.8524L13.1047 19.8524L19.5671 13.8885C19.7886 13.6837 19.7886 13.3584 19.5671 13.1536C19.3456 12.9488 18.9938 12.9488 18.7723 13.1536L11.3588 20.009Z" fill="#1C1C1B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1816 31.7564C38.5832 28.4564 40 24.3937 40 20C40 15.6063 38.5832 11.5436 36.1816 8.24364L35.3731 8.83208C37.6544 11.9668 39 15.8248 39 20C39 24.1752 37.6544 28.0332 35.3731 31.1679L36.1816 31.7564ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83206 35.3731L8.24362 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816ZM3.81839 31.7564C1.41677 28.4564 -5.6223e-06 24.3937 -4.60964e-06 20C-3.59698e-06 15.6063 1.41677 11.5436 3.8184 8.24363L4.62694 8.83207C2.34556 11.9668 0.999996 15.8248 0.999995 20C0.999994 24.1752 2.34556 28.0332 4.62693 31.1679L3.81839 31.7564ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34557 15.8248 1 20 1C24.1752 1.00001 28.0332 2.34557 31.1679 4.62695L31.7564 3.81841C28.4564 1.41678 24.3937 5.6223e-06 20 4.60964e-06C15.6063 3.59698e-06 11.5436 1.41678 8.24363 3.8184Z" fill="#1C1C1B"></path></svg><span>'+$(this).text()+'</span></span>');
        menuBack(1);
      }
    }
  });

  $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont ul li.open_menu>a').on('click', function(e) {
    e.preventDefault();
    $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul').css({'overflow-y':'hidden'});
    if($(this).parent('li').hasClass('active')) {
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul').removeClass('active');
      $(this).parent('li').removeClass('active');
    } else {
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul').removeClass('active');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont>ul>li').removeClass('active');
      $(this).parent('li').addClass('active');
      var thirdIndex = $(this).parent('li').attr('data-href');
      $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul[data-parent="'+thirdIndex+'"]').addClass('active');
      //$('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul').eq($(this).parents('li').index()).addClass('active');
      setTimeout(function(){
        $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont>ul[data-parent="'+thirdIndex+'"]').css({'overflow-y':'auto'});
      },500);
    }
    if($('.first_child_cont ul li.active').attr('data-href')=='urunler' || $('.first_child_cont ul li.active').attr('data-href')=='products') {
      productMenu($(this).parents('.mega_main'));
    }
    if($(window).width() < 769) {
      $(this).parents('.mega_main').find('.third_child_cont').addClass('active');
      $(this).parents('.mega_main').find('.third_child_cont').prepend('<span class="menu_back"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3588 20.009C11.3067 20.0572 11.2676 20.1174 11.2416 20.1777C11.2416 20.1777 11.2416 20.1777 11.2416 20.1897C11.2155 20.25 11.2025 20.3102 11.2025 20.3825C11.2025 20.4548 11.2155 20.515 11.2416 20.5753C11.2416 20.5753 11.2416 20.5753 11.2416 20.5873C11.2676 20.6476 11.3067 20.7078 11.3588 20.756L18.7723 27.6114C18.9938 27.8162 19.3456 27.8162 19.5671 27.6114C19.7886 27.4066 19.7886 27.0813 19.5671 26.8765L13.1177 20.8885L28.0765 20.8885C28.3892 20.8885 28.6367 20.6596 28.6367 20.3705C28.6367 20.0813 28.3892 19.8524 28.0765 19.8524L13.1047 19.8524L19.5671 13.8885C19.7886 13.6837 19.7886 13.3584 19.5671 13.1536C19.3456 12.9488 18.9938 12.9488 18.7723 13.1536L11.3588 20.009Z" fill="#1C1C1B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1816 31.7564C38.5832 28.4564 40 24.3937 40 20C40 15.6063 38.5832 11.5436 36.1816 8.24364L35.3731 8.83208C37.6544 11.9668 39 15.8248 39 20C39 24.1752 37.6544 28.0332 35.3731 31.1679L36.1816 31.7564ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83206 35.3731L8.24362 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816ZM3.81839 31.7564C1.41677 28.4564 -5.6223e-06 24.3937 -4.60964e-06 20C-3.59698e-06 15.6063 1.41677 11.5436 3.8184 8.24363L4.62694 8.83207C2.34556 11.9668 0.999996 15.8248 0.999995 20C0.999994 24.1752 2.34556 28.0332 4.62693 31.1679L3.81839 31.7564ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34557 15.8248 1 20 1C24.1752 1.00001 28.0332 2.34557 31.1679 4.62695L31.7564 3.81841C28.4564 1.41678 24.3937 5.6223e-06 20 4.60964e-06C15.6063 3.59698e-06 11.5436 1.41678 8.24363 3.8184Z" fill="#1C1C1B"></path></svg><span>'+$(this).text()+'</span></span>');
      menuBack(2);
    }
  });
  $('header .navbar-main .navbar-nav li.mega_menu').each(function(){
    //$(this).find('.special_menu').css({'max-width':($(window).width() - ($(this).find('.first_child_cont').width() + $(this).find('.second_child_cont').width() + $(this).find('.third_child_cont').width()))  - 60 + 'px'});
  });
  $('header .navbar-main .navbar-nav.header_second_nav li.low_menu>a').on('click', function(e) {
    e.preventDefault();
    $('header .navbar-main .navbar-nav li.mega_menu').removeClass('m_active');
    if($(this).parent('li').hasClass('hovered')) {
      $('header').removeClass('head_active');
      $('header .navbar-main .navbar-nav.header_second_nav li.low_menu').removeClass('hovered');
    } else {
      $('header').addClass('head_active');
      $(this).parent('li').addClass('hovered');
    }
  });
  if($(window).width() < 769) {
    $('header .navbar-main .navbar-nav li div.mega_container .first_child_cont ul li').removeClass('active');
    $('header .navbar-main .navbar-nav li div.mega_container .second_child_cont ul').removeClass('active');
    $('header .navbar-main .navbar-nav li div.mega_container .second_child_cont ul li').removeClass('active');
    $('header .navbar-main .navbar-nav li div.mega_container .third_child_cont ul').removeClass('active');
  }
}

function menuBack(menuS) {
  $('.menu_back').on('click', function(e) {
    e.preventDefault();
    $(this).parent('div').removeClass('active');
    $(this).siblings('ul').removeClass('active');
    if(menuS==1) {
      $('header .navbar-main .navbar-nav li div.mega_container .first_child_cont ul li').removeClass('active');
    }
    if(menuS==2) {
      $('header .navbar-main .navbar-nav li div.mega_container .second_child_cont ul li').removeClass('active');
    }
    
    $(this).remove();
  });
}

var productMenuOver;

function productMenu(elm,first) {
  var token = $('meta[name="csrf-token"]').attr('content');
  var urls =[];
  $('header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont ul.active>li').each(function(){
    var url = $(this).find('a').attr('href').split('/');
    urls.push(url[(url.length-1)]);
  });
  $.ajaxSetup({
    headers: {'X-CSRF-TOKEN': token}
  });

  $.ajax({
    type: 'POST',
    url: '/'+$('html').attr('lang')+'/productMenu',
    data: {
      lang: $('html').attr('lang'),
      urls: urls
    },
    error: function (data) {

    },
    success: function (res) {
      if(res!='' && res!=undefined && res!=null) {
        clearTimeout(productMenuOver);
        $('.product_photos div').remove();
        $('.hizmet_infos').remove();
        if($('.product_photos').length > 0) {
          var pp = $('.product_photos').append(res);
          elm.append(pp);
        } else {
          elm.append('<div class="product_photos">'+res+'</div>');
        }
        
        menuProductHover();
      }
    }
  });
}

function menuProductHover() {
  setTimeout(function(){
    $("header .navbar-main .navbar-nav li.mega_menu .mega_main .third_child_cont ul.active li").mouseover(function(e) {
      if($(this)[0].offsetTop > $(this).parent('ul').height() ) {
        
        $("header .product_photos .product_photo").eq($(this).index()).css({'top':($(this)[0].offsetTop - $(this).parent('ul').scrollTop())+'px'});
      } else {
        $("header .product_photos .product_photo").eq($(this).index()).css({'top':($(this)[0].offsetTop - $(this).parent('ul').scrollTop())+'px'});
        //$("header .product_photos .product_photo").eq($(this).index()).css({'top':($(this)[0].offsetTop)+'px'});
      }
      var productPhotoW = $("header .product_photos .product_photo").eq($(this).index()).find('.product_photo_img').width();
      $("header .product_photos .product_photo").eq($(this).index()).find('.product_photo_img').css({'height':productPhotoW+'px'});
      $("header .product_photos .product_photo").eq($(this).index()).addClass('active');
    }).mouseout(function() {
      $("header .product_photos .product_photo").removeClass('active');
    });
  },0);
}

var hizmetMenuOver;

function hizmetlerMenu(elm) {
  var token = $('meta[name="csrf-token"]').attr('content');
  var urls =[];
  $('header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont ul.active>li').each(function(){
    var url = $(this).find('a').attr('href').split('/');
    urls.push(url[(url.length-1)]);
  });

  $.ajaxSetup({
    headers: {'X-CSRF-TOKEN': token}
  });

  $.ajax({
    type: 'POST',
    url: '/'+$('html').attr('lang')+'/hizmetlerMenu',
    data: {
      lang: $('html').attr('lang'),
      urls: urls
    },
    error: function (data) {

    },
    success: function (res) {
      if(res!='' && res!=undefined && res!=null) {
        clearTimeout(hizmetMenuOver);
        $('.hizmet_infos').remove();
        $('.product_photos').remove();
        elm.append('<div class="hizmet_infos" style="max-width:'+($(window).width() - (elm.find('.first_child_cont').width() + elm.find('.second_child_cont').width() + elm.find('.third_child_cont').width()) - 60)+ 'px;">'+res+'</div>');
        menuHizmetHover();
      }
    }
  });
}

function menuHizmetHover() {
  setTimeout(function(){
    $("header .navbar-main .navbar-nav li.mega_menu .mega_main .second_child_cont ul.active li").mouseover(function() {
      $("header .hizmet_infos .hizmet_info").eq($(this).index()).addClass('active');          
    }).mouseout(function() {
      $("header .hizmet_infos .hizmet_info").removeClass('active');
    });
  },0);
}

function videoSectionBtn() {
  $('.video_btn_section').each(function(){
    $(this).html('<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="45" cy="45" r="43.5" stroke="white" stroke-width="3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M66.5879 44.5463L33.3613 65.1769L33.3613 51.4963H30.3613L30.3613 65.1769C30.3613 67.5292 32.9454 68.9664 34.9438 67.7256L68.1703 47.0949C70.0611 45.921 70.0602 43.1693 68.1687 41.9966L34.9421 21.3965C32.9436 20.1574 30.3613 21.5947 30.3613 23.9462L30.3613 37.6361H33.3613L33.3613 23.9462L66.5879 44.5463Z" fill="white"/></svg>');
  });
  $('.video_btn_section').on('click', function(e){
    e.preventDefault();
    var playerid = 'player_'+Date.now();
    $('.play_btn #player').remove();
    $('.play_btn').removeClass('active');
    $(this).append('<div id="'+playerid+'"></div>');
    e = e ? e : event;
    //window.playerid = (e.target.dataset.id ? e.target.dataset.id : e.target.parentNode.dataset.id);
    var vidsrc = $(this).attr('href');
    
    onYouTubeIframeAPIReady(vidsrc,playerid);
    $(this).addClass('active');
  });
}
function pageDown() {
  $('.page_down').on('click', function(e){
    e.preventDefault();
    var icon = $(this);
    var offset = icon.offset().top;
    TweenMax.to(window,.6,{ scrollTo: offset });
  });
}

var yPlayer;
function loadYouTubeApi() {
  //window.playerid = document.querySelectorAll('.swiper-slide-active .play_btn')[0].dataset.id;
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady(url,playerid) {
  if(url) {
    yPlayer = new YT.Player(playerid, {
      height: '100%',
      width: '100%',
      //videoId: 'M7lc1UVf-VE',
      videoId: url,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {rel: 0, showinfo: 0, ecver: 2, autoplay:1}
    });
  } else {
    yPlayer = new YT.Player(playerid, {
      height: '100%',
      width: '100%',
      //videoId: 'M7lc1UVf-VE',
      videoId: '',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {rel: 0, showinfo: 0, ecver: 2, autoplay:0}
    });
  }
}
function onPlayerReady(event) {
  //yPlayer.setPlaybackRate(1);
  //event.target.playVideo();

  //yPlayer.playVideo();
  //yPlayer.mute();
}
function onPlayerStateChange(event) {
  window.playerEvent = event;
  if(event.data === 0) {          
    $('.play_btn').removeClass('active');
    $('.play_btn').find('iframe').remove();
    $('.video_btn_section').removeClass('active');
    $('.video_btn_section').find('iframe').remove();
  }
}
function video_list(e) {
  $('.video_cont .video_item a').on('click', function(e){
    e.preventDefault();
    $('body').append('<div class="modal_cont"><div class="modal_body"><iframe src="https://www.youtube.com/embed/'+$(this).attr('href')+'?rel=0&showinfo=0&autoplay=1" /></div><div class="modal_overlay"></div><div class="modal_close"></div></div>');
    setTimeout(function(){
      $('.modal_cont').addClass('active');
      modal_close();
    },200);
  });
}
function modal_close() {
  $('.modal_close, .modal_overlay').on('click', function(e){
    e.preventDefault();
    $('.modal_cont').removeClass('active');
    setTimeout(function(){
      $('.modal_cont').remove();
    },800);
  });
}
function play_btn(e) {
  $('.play_btn').on('click', function(e){
    $('.play_btn iframe').remove();
    var playerid = 'player_'+Date.now();
    $('.play_btn #player').remove();
    $('.play_btn').removeClass('active');
    $(this).append('<div id="'+playerid+'"></div>');
    e = e ? e : event;
    //window.playerid = (e.target.dataset.id ? e.target.dataset.id : e.target.parentNode.dataset.id);
    var vidsrc = $(this).attr('data-src');
    var url = vidsrc.split('/')[vidsrc.split('/').length-1].split('?')[0];
    onYouTubeIframeAPIReady(url,playerid);
    $(this).addClass('active');
    if($(window).width()>480) {
      $('.video_up_text').css({'display':'none'});
    }
  });
}
function addMoreBtn() {
  $('.load_more').on('click', function(e) {
    e.preventDefault();
    var btn = $(this);
    var href = $(this).attr('href');
    var token = $('meta[name="csrf-token"]').attr('content');

    var lang = $('html').attr('lang');
    var categoryID = $(this).attr('data-category');
    var type = $(this).attr('data-type');
    var search = $(this).attr('data-search');
    var year = $(this).attr('data-year');
    var offset = $(this).attr('data-offset');  
    var number = $(this).attr('data-number');  
    var desc = $(this).attr('data-desc');  
    $.ajaxSetup({
      headers: {'X-CSRF-TOKEN': token}
    });
    $.ajax({
      type: 'POST',
      url: '/' + lang + '/newsload',
      data: {
        category: categoryID,
        type: type,
        year: year,
        search: search,
        offset: offset,
        desc: desc,
        number: number,
        lang: lang
      },
      error: function (data) {

      },
      success: function (res) {
        if(res!='' && res!=undefined && res!=null) {
          res = JSON.parse(res);
          var content = res.ret;
          if(res.count==0) {
            btn.addClass('hide');
            setTimeout(function(){
              btn.remove();
            },100);
          }
          if(res.type=='photo') {
            btn.siblings('.'+type+'_grid_cont').append(content);
            setTimeout(function(){
              $('.visible .photo_item').addClass('animate');
              setTimeout(function(){
                $('.visible .photo_item').addClass('finish_animate');
                btn.attr('data-offset', parseInt(offset) + parseInt(number));
              },200);
            },100);
          } else {
            btn.siblings('.'+type+'_grid_cont').append(content);
            setTimeout(function(){
              $('.visible .news_item').addClass('animate');
              setTimeout(function(){
                $('.visible .news_item').addClass('finish_animate');
                btn.attr('data-offset', parseInt(offset) + parseInt(number));
              },200);
            },100);
          }
        }
      }
    });
  });
}

function fancyBoxImages() {
  $('[data-fancybox="images"]').fancybox({
    beforeLoad:function(instance, current) {
      var checkDownload = $.fancybox.getInstance().current.opts.$orig;
      if($(checkDownload).attr('data-download')=='false') {
        $('.fancybox-container').attr('remove_download','yes');
      } else {
        $('.fancybox-container').attr('remove_download','no');
        $('.fancybox-container[remove_download="no"] .fancybox-button--download').attr('href',$('.fancybox-container[remove_download="no"] .fancybox-button--download').attr('href').replace('/gallery/','/'));
      }
    },
    buttons : [
      "slideShow","fullScreen","thumbs","download","share","close"
    ],
  });
}
function megaMenuNews() {
  var token = $('meta[name="csrf-token"]').attr('content');
  $.ajaxSetup({
    headers: {'X-CSRF-TOKEN': token}
  });

  $.ajax({
    type: 'POST',
    url: '/'+$('html').attr('lang')+'/latestNews',
    data: {
      lang: $('html').attr('lang')
    },
    error: function (data) {

    },
    success: function (res) {
      if(res!='' && res!=undefined && res!=null) {
        $('header .navbar-main .navbar-nav li div.mega_container .latest_news').html('');
        res = JSON.parse(res);
        $('header .navbar-main .navbar-nav li div.mega_container .latest_news').each(function() {
          $(this).append('<h2>'+res.widget_title+'</h2>');
          $(this).append(res.newsList);
        }); 
      }
    }
  });
  /*$('header .navbar-main .navbar-nav li div.mega_container .col.latest_news').each(function(e){

  });*/
}
function word_animation() {
  var text='';
  if($('.write_text').length>0) {
    var keys = $('.write_text').html().split('<br>');
    for(var i=0; i<keys.length;i++) {
      if(keys[i].search('<strong>') > -1) {
        text = text + '<strong>';
        keys[i]=keys[i].replace('<strong>','');
        keys[i]=keys[i].replace('</strong>','');
      }
      var characters = keys[i].split('');
      for(var j=0; j<characters.length;j++) {
        text = text+'<span>'+characters[j]+'</span>';
      }
      if(keys[i].search('</strong>') > -1) {
        text = text + '</strong>';
      }
      text = text+'<br>';
    }
    $('.write_text').html('');
    $('.write_text').append(text);
  }
}
function inputAnim() {
  $('input[type="text"],input[type="email"],textarea').on('input', function(){
    if($(this).val()=='') {
      $(this).parents('label').removeClass('animate');
    } else {
      $(this).parents('label').addClass('animate');
    }
  });
  $('input[type="text"],input[type="email"],textarea').on('focus', function(){
    $(this).parents('label').addClass('animate');
  });
  $('input[type="text"],input[type="email"],textarea').on('focusout', function(){
    if($(this).val()=='') {
      $(this).parents('label').removeClass('animate');
    } else {
      $(this).parents('label').addClass('animate');
    }
  });
}
function buttonIcons() {
  $('.play_btn').each(function(){
    $(this).append('<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.9999 45.2499L35 65.4998V25L61.9999 45.2499Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M81.4086 71.4518L79.7915 70.275C84.9547 63.1806 88 54.4489 88 45C88 35.5511 84.9547 26.8194 79.7915 19.725L81.4086 18.5482C86.8123 25.973 90 35.1142 90 45C90 54.8858 86.8122 64.027 81.4086 71.4518ZM71.4518 8.5914L70.275 10.2085C63.1806 5.04532 54.4489 2 45 2C35.5511 2 26.8194 5.04532 19.725 10.2085L18.5482 8.5914C25.973 3.18775 35.1142 0 45 0C54.8858 0 64.027 3.18775 71.4518 8.5914ZM8.5914 18.5482C3.18775 25.973 0 35.1142 0 45C0 54.8858 3.18775 64.027 8.5914 71.4518L10.2085 70.275C5.04532 63.1806 2 54.4489 2 45C2 35.5511 5.04532 26.8194 10.2085 19.725L8.5914 18.5482ZM18.5482 81.4086L19.725 79.7915C26.8194 84.9547 35.5511 88 45 88C54.4489 88 63.1806 84.9547 70.275 79.7915L71.4518 81.4086C64.027 86.8122 54.8858 90 45 90C35.1142 90 25.973 86.8123 18.5482 81.4086Z" fill="white"/></svg>');
  });
  $('.btn_black').each(function(){
    $(this).html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6412 19.991C28.6933 19.9428 28.7324 19.8825 28.7584 19.8223C28.7584 19.8223 28.7584 19.8223 28.7584 19.8103C28.7845 19.75 28.7975 19.6898 28.7975 19.6175C28.7975 19.5452 28.7845 19.485 28.7584 19.4247C28.7584 19.4247 28.7584 19.4247 28.7584 19.4127C28.7324 19.3524 28.6933 19.2922 28.6412 19.244L21.2277 12.3886C21.0062 12.1838 20.6544 12.1838 20.4329 12.3886C20.2114 12.5934 20.2114 12.9187 20.4329 13.1235L26.8823 19.1115L11.9235 19.1115C11.6108 19.1115 11.3633 19.3404 11.3633 19.6295C11.3633 19.9187 11.6108 20.1476 11.9235 20.1476L26.8953 20.1476L20.4329 26.1114C20.2114 26.3163 20.2114 26.6416 20.4329 26.8464C20.6544 27.0512 21.0062 27.0512 21.2277 26.8464L28.6412 19.991Z" fill="#1C1C1B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8184 8.24363C1.41677 11.5436 -7.7539e-07 15.6063 -6.3573e-07 20C-4.96071e-07 24.3937 1.41677 28.4564 3.8184 31.7564L4.62694 31.1679C2.34556 28.0332 0.999999 24.1752 0.999999 20C0.999999 15.8248 2.34556 11.9668 4.62694 8.83207L3.8184 8.24363ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34556 15.8248 1 20 1C24.1752 1 28.0332 2.34556 31.1679 4.62694L31.7564 3.8184C28.4564 1.41678 24.3937 4.96071e-07 20 6.3573e-07C15.6063 7.7539e-07 11.5436 1.41678 8.24363 3.8184ZM36.1816 8.24363C38.5832 11.5436 40 15.6063 40 20C40 24.3937 38.5832 28.4564 36.1816 31.7564L35.3731 31.1679C37.6544 28.0332 39 24.1752 39 20C39 15.8248 37.6544 11.9668 35.3731 8.83207L36.1816 8.24363ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83207 35.3731L8.24363 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816Z" fill="#1C1C1B"/></svg><span>'+$(this).html()+'</span>');
  });
  $('.btn_white').each(function(){
    $(this).html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6412 19.991C28.6933 19.9428 28.7324 19.8825 28.7584 19.8223C28.7584 19.8223 28.7584 19.8223 28.7584 19.8103C28.7845 19.75 28.7975 19.6898 28.7975 19.6175C28.7975 19.5452 28.7845 19.485 28.7584 19.4247C28.7584 19.4247 28.7584 19.4247 28.7584 19.4127C28.7324 19.3524 28.6933 19.2922 28.6412 19.244L21.2277 12.3886C21.0062 12.1838 20.6544 12.1838 20.4329 12.3886C20.2114 12.5934 20.2114 12.9187 20.4329 13.1235L26.8823 19.1115L11.9235 19.1115C11.6108 19.1115 11.3633 19.3404 11.3633 19.6295C11.3633 19.9187 11.6108 20.1476 11.9235 20.1476L26.8953 20.1476L20.4329 26.1114C20.2114 26.3163 20.2114 26.6416 20.4329 26.8464C20.6544 27.0512 21.0062 27.0512 21.2277 26.8464L28.6412 19.991Z" fill="#FFFFFF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8184 8.24363C1.41677 11.5436 -7.7539e-07 15.6063 -6.3573e-07 20C-4.96071e-07 24.3937 1.41677 28.4564 3.8184 31.7564L4.62694 31.1679C2.34556 28.0332 0.999999 24.1752 0.999999 20C0.999999 15.8248 2.34556 11.9668 4.62694 8.83207L3.8184 8.24363ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34556 15.8248 1 20 1C24.1752 1 28.0332 2.34556 31.1679 4.62694L31.7564 3.8184C28.4564 1.41678 24.3937 4.96071e-07 20 6.3573e-07C15.6063 7.7539e-07 11.5436 1.41678 8.24363 3.8184ZM36.1816 8.24363C38.5832 11.5436 40 15.6063 40 20C40 24.3937 38.5832 28.4564 36.1816 31.7564L35.3731 31.1679C37.6544 28.0332 39 24.1752 39 20C39 15.8248 37.6544 11.9668 35.3731 8.83207L36.1816 8.24363ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83207 35.3731L8.24363 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816Z" fill="#FFFFFF"/></svg><span>'+$(this).html()+'</span>');
  });
  $('.btn_green').each(function(){
    $(this).html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6412 19.991C28.6933 19.9428 28.7324 19.8825 28.7584 19.8223C28.7584 19.8223 28.7584 19.8223 28.7584 19.8103C28.7845 19.75 28.7975 19.6898 28.7975 19.6175C28.7975 19.5452 28.7845 19.485 28.7584 19.4247C28.7584 19.4247 28.7584 19.4247 28.7584 19.4127C28.7324 19.3524 28.6933 19.2922 28.6412 19.244L21.2277 12.3886C21.0062 12.1838 20.6544 12.1838 20.4329 12.3886C20.2114 12.5934 20.2114 12.9187 20.4329 13.1235L26.8823 19.1115L11.9235 19.1115C11.6108 19.1115 11.3633 19.3404 11.3633 19.6295C11.3633 19.9187 11.6108 20.1476 11.9235 20.1476L26.8953 20.1476L20.4329 26.1114C20.2114 26.3163 20.2114 26.6416 20.4329 26.8464C20.6544 27.0512 21.0062 27.0512 21.2277 26.8464L28.6412 19.991Z" fill="#3f873f"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8184 8.24363C1.41677 11.5436 -7.7539e-07 15.6063 -6.3573e-07 20C-4.96071e-07 24.3937 1.41677 28.4564 3.8184 31.7564L4.62694 31.1679C2.34556 28.0332 0.999999 24.1752 0.999999 20C0.999999 15.8248 2.34556 11.9668 4.62694 8.83207L3.8184 8.24363ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34556 15.8248 1 20 1C24.1752 1 28.0332 2.34556 31.1679 4.62694L31.7564 3.8184C28.4564 1.41678 24.3937 4.96071e-07 20 6.3573e-07C15.6063 7.7539e-07 11.5436 1.41678 8.24363 3.8184ZM36.1816 8.24363C38.5832 11.5436 40 15.6063 40 20C40 24.3937 38.5832 28.4564 36.1816 31.7564L35.3731 31.1679C37.6544 28.0332 39 24.1752 39 20C39 15.8248 37.6544 11.9668 35.3731 8.83207L36.1816 8.24363ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83207 35.3731L8.24363 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816Z" fill="#3f873f"/></svg><span>'+$(this).html()+'</span>');
  });
  $('.btn_green_colored').each(function(){
    $(this).html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6412 19.991C28.6933 19.9428 28.7324 19.8825 28.7584 19.8223C28.7584 19.8223 28.7584 19.8223 28.7584 19.8103C28.7845 19.75 28.7975 19.6898 28.7975 19.6175C28.7975 19.5452 28.7845 19.485 28.7584 19.4247C28.7584 19.4247 28.7584 19.4247 28.7584 19.4127C28.7324 19.3524 28.6933 19.2922 28.6412 19.244L21.2277 12.3886C21.0062 12.1838 20.6544 12.1838 20.4329 12.3886C20.2114 12.5934 20.2114 12.9187 20.4329 13.1235L26.8823 19.1115L11.9235 19.1115C11.6108 19.1115 11.3633 19.3404 11.3633 19.6295C11.3633 19.9187 11.6108 20.1476 11.9235 20.1476L26.8953 20.1476L20.4329 26.1114C20.2114 26.3163 20.2114 26.6416 20.4329 26.8464C20.6544 27.0512 21.0062 27.0512 21.2277 26.8464L28.6412 19.991Z" fill="#3f873f"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8184 8.24363C1.41677 11.5436 -7.7539e-07 15.6063 -6.3573e-07 20C-4.96071e-07 24.3937 1.41677 28.4564 3.8184 31.7564L4.62694 31.1679C2.34556 28.0332 0.999999 24.1752 0.999999 20C0.999999 15.8248 2.34556 11.9668 4.62694 8.83207L3.8184 8.24363ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34556 15.8248 1 20 1C24.1752 1 28.0332 2.34556 31.1679 4.62694L31.7564 3.8184C28.4564 1.41678 24.3937 4.96071e-07 20 6.3573e-07C15.6063 7.7539e-07 11.5436 1.41678 8.24363 3.8184ZM36.1816 8.24363C38.5832 11.5436 40 15.6063 40 20C40 24.3937 38.5832 28.4564 36.1816 31.7564L35.3731 31.1679C37.6544 28.0332 39 24.1752 39 20C39 15.8248 37.6544 11.9668 35.3731 8.83207L36.1816 8.24363ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83207 35.3731L8.24363 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816Z" fill="#3f873f"/></svg><span>'+$(this).html()+'</span>');
  });
  $('.btn_blue_colored').each(function(){
    $(this).html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6412 19.991C28.6933 19.9428 28.7324 19.8825 28.7584 19.8223C28.7584 19.8223 28.7584 19.8223 28.7584 19.8103C28.7845 19.75 28.7975 19.6898 28.7975 19.6175C28.7975 19.5452 28.7845 19.485 28.7584 19.4247C28.7584 19.4247 28.7584 19.4247 28.7584 19.4127C28.7324 19.3524 28.6933 19.2922 28.6412 19.244L21.2277 12.3886C21.0062 12.1838 20.6544 12.1838 20.4329 12.3886C20.2114 12.5934 20.2114 12.9187 20.4329 13.1235L26.8823 19.1115L11.9235 19.1115C11.6108 19.1115 11.3633 19.3404 11.3633 19.6295C11.3633 19.9187 11.6108 20.1476 11.9235 20.1476L26.8953 20.1476L20.4329 26.1114C20.2114 26.3163 20.2114 26.6416 20.4329 26.8464C20.6544 27.0512 21.0062 27.0512 21.2277 26.8464L28.6412 19.991Z" fill="#043D5B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8184 8.24363C1.41677 11.5436 -7.7539e-07 15.6063 -6.3573e-07 20C-4.96071e-07 24.3937 1.41677 28.4564 3.8184 31.7564L4.62694 31.1679C2.34556 28.0332 0.999999 24.1752 0.999999 20C0.999999 15.8248 2.34556 11.9668 4.62694 8.83207L3.8184 8.24363ZM8.24363 3.8184L8.83207 4.62694C11.9668 2.34556 15.8248 1 20 1C24.1752 1 28.0332 2.34556 31.1679 4.62694L31.7564 3.8184C28.4564 1.41678 24.3937 4.96071e-07 20 6.3573e-07C15.6063 7.7539e-07 11.5436 1.41678 8.24363 3.8184ZM36.1816 8.24363C38.5832 11.5436 40 15.6063 40 20C40 24.3937 38.5832 28.4564 36.1816 31.7564L35.3731 31.1679C37.6544 28.0332 39 24.1752 39 20C39 15.8248 37.6544 11.9668 35.3731 8.83207L36.1816 8.24363ZM31.7564 36.1816L31.1679 35.3731C28.0332 37.6544 24.1752 39 20 39C15.8248 39 11.9668 37.6544 8.83207 35.3731L8.24363 36.1816C11.5436 38.5832 15.6063 40 20 40C24.3937 40 28.4564 38.5832 31.7564 36.1816Z" fill="#043D5B"/></svg><span>'+$(this).html()+'</span>');
  });
  $('.btn_white_link').each(function(){
    $(this).html('<svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"><rect id="shape" height="40" width="150"></rect></svg><span>'+$(this).html()+'</span>');
  });

}
function pageBreak() {
  setTimeout(function(){
    $('.pagebreak_content').each(function(){
      var pc = $(this);
      if($(this).attr('data-height')==undefined) {
        $(".pagebreak_content img").on("load", function() {
          pc.attr('data-height',pc.height());
          pc.height(0);
          pc.css({'overflow':'hidden','padding-top':'0','padding-bottom':'0'});
        });
      }
    });
    pageBreakClick();
  },0);
}
  function pageBreakClick() {
    $(".pagebreak").on("click", function(e) {
        e.preventDefault();
        if($(this).hasClass("break-active")) {
          TweenMax.to($(this).siblings('.pagebreak_content'),.4, { css:{ 'height':0, 'padding-top':0 , 'padding-bottom':0 } });
          //$(this).siblings('.pagebreak_content').fadeOut();
          if($('body').hasClass('tr')) {
            $(this).html("Daha fazla");
          }
          else {
            $(this).html("More");
          }
          $(this).removeClass("break-active");
        } else {
          $(this).addClass("break-active");
          TweenMax.to($(this).siblings('.pagebreak_content'),.4, { css:{ 'height':parseInt($(this).siblings('.pagebreak_content').attr('data-height'))+50, 'padding-top':'25px' , 'padding-bottom':'25px' } });
          //$(this).siblings('.pagebreak_content').fadeIn();
          if($('body').hasClass('tr')) {
            $(this).html("Daha az");
          }
          else {
            $(this).html("Less");
          }
        }
      });
  }
function tab_list_images() {
  $('.tab_list_images_cont ul li a').on('click', function(e) {
    e.preventDefault();
    var elm = $(this);
    var href = $(this).attr('href');
    
    $(this).parents('.tab_list_images_cont').find('.tab_list_content div').each(function(){
      if( href == '#'+$(this).attr('id')) {
        elm.parents('li').siblings('li').removeClass('active');
        elm.parents('li').addClass('active');
        $(this).parents('.tab_list_images_cont').find('.tab_list_content div').removeClass('active');
        $(this).addClass('active');
      } else {

      }
    });
  });
}
function sliders() {
  $('.slide-fullheight').height($(window).height());
  var swiperSlideNormal = new Swiper('.slide-normal', {
    navigation: {
      nextEl: '.slide-normal-next',
      prevEl: '.slide-normal-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    loop:true,
  });

  var tab_list_swiper = new Swiper('.tab_list_swiper', {
    navigation: {
      nextEl: '.tab_list_next',
      prevEl: '.tab_list_prev',
    },
    autoHeight:true,
  });

  var swiperSlideOzdegerler = new Swiper('.ozdegerler_swiper', {
    navigation: {
      nextEl: '.oz_degerler_next',
      prevEl: '.oz_degerler_prev',
    },
    slidesPerView:3,
    slidesPerGroup:3,
    autoHeight:true,
    breakpoints: {
      320: {
        slidesPerView:1,
        slidesPerGroup:1,
      },
      768: {
        slidesPerView:1,
        slidesPerGroup:1,
      },
      940: {
        slidesPerView:2,
        slidesPerGroup:2,
      },
      1367: {
        slidesPerView:3,
        slidesPerGroup:3,
      }
    }
  });

  var swiperSlideTabCol = new Swiper('.tab_col_swiper', {
    navigation: {
      nextEl: '.tab_col_next',
      prevEl: '.tab_col_prev',
    },
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween: 20,
    autoHeight:true,
    breakpoints: {
      320: {
        slidesPerView:1,
        slidesPerGroup:1,
      },
      768: {
        slidesPerView:2,
        slidesPerGroup:2,
      },
      1024: {
        slidesPerView:3,
        slidesPerGroup:3,
      },
      1366: {
        slidesPerView:3,
        slidesPerGroup:3,
      }
    }
  });
  

  var newsSlider = new Swiper('.news_slider', {
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: {
      nextEl: ".news_slide_next",
      prevEl: ".news_slide_prev",
    },
    autoHeight:true,
    breakpoints: {
      320: {
        slidesPerView:1,
        slidesPerGroup:1,
        pagination: {
          el: '.news_pagination',
          clickable:true
        },
      },
      768: {
        slidesPerView:2,
        slidesPerGroup:2,
        pagination: {
          el: '.news_pagination',
          clickable:true
        },
      },
      940: {
        slidesPerView:3,
        slidesPerGroup:3,
      },
      1200: {
        slidesPerView:4,
        slidesPerGroup:4,
      }
    }
  });
  
  var galleryThumbSwiper = new Swiper('.gallery_list_thumb', {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction:'vertical',
    navigation: {
      nextEl: ".gallery_list_next",
      prevEl: ".gallery_list_prev",
    },
    breakpoints: {
      320: {
        direction:'horizontal',
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        direction:'vertical',
        slidesPerView: 4,
        spaceBetween: 20,
      },
      940: {
        direction:'vertical',
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        direction:'vertical',
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  var galleryListSwiper = new Swiper('.gallery_list', {
    thumbs: {
      swiper: galleryThumbSwiper,
    },
    breakpoints: {
      320: {
        navigation: {
          nextEl: ".gallery_list_next",
          prevEl: ".gallery_list_prev",
        },
      },
    }
  });

  

  var contentSwiper = new Swiper('.content_slider', {
    pagination: {
      el: '.content_swiper_pagination',
      clickable:true
    },
    navigation: {
      nextEl: '.content-slide-next',
      prevEl: '.content-slide-prev',
    },
    loop:true,
  });

  var swiperFullHeight = new Swiper('.slide-fullheight', {
    navigation: {
      nextEl: '.slide-fh-next',
      prevEl: '.slide-fh-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    loop:true,
  });

  var swiperNews = new Swiper('.style-slider', {
    navigation: {
      nextEl: '.style-slide-next',
      prevEl: '.style-slide-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    loop:true,
    autoHeight: true,
  });
  $('.slide-fh-prev, .slide-fh-next').on('click', function(){
    TweenMax.to(window,.3,{ scrollTo:$('.slide-fullheight').offset().top });
  });
  
}
function styleIsotope() { 
  $(".style-isotope").imagesLoaded(function () {
    $('.style-isotope').isotope({
       itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer',
          gutter:15
        }
      });
  });
}

function infoBox() {
  $('.info-box-title').on('click', function(e){
    if($(this).attr('href')=="#") {
      e.preventDefault();
    }
  });
  $('.info-box-title').on('mouseenter mousemove mouseleave', function(e){
    var toolTip;
    var infoBoxContent = $(this).parents().next('.info-box-content').first().html();
    if (e.type == 'mouseenter') {
      $('.info-box-title-clicked').removeClass('active');
      $('body').append('<div class="tooltip">'+infoBoxContent+'</div>');
    }
    else if(e.type == 'mousemove') {
      var left = event.pageX;
      var top =  event.pageY;
      TweenMax.set('.tooltip',{  left:left+5 ,top:top -($('.tooltip').height()*2) });
    }
    else {
      TweenMax.to('.tooltip', .5, {
        opacity: 0, display: 'none', onComplete: function () {
          $(this.target).remove();
        }
      });
    }
  });

  $('.info-box-title-clicked').on('click', function(e){
    e.preventDefault();
    var toolTip;
    var infoBoxContent = $(this).parents().next('.info-box-content').first().html();
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      TweenMax.to('.tooltip', .5, {
        opacity: 0, display: 'none', onComplete: function () {
          $(this.target).remove();
        }
      });
    }
    else {
      $(this).addClass('active');
      $('body').append('<div class="tooltip">'+infoBoxContent+' <img class="close-tooltip" src="/frontend/img/close-icon-black.svg" /></div>');
      var left = event.pageX;
      var top =  event.pageY;
      TweenMax.set('.tooltip',{  left:left+5 ,top:top -($('.tooltip').height()*2) });
      $('.tooltip .close-tooltip').on('click', function(){
        $('.info-box-title-clicked').removeClass('active');
        TweenMax.to('.tooltip', .5, {
          opacity: 0, display: 'none', onComplete: function () {
            $('.tooltip').remove();
          }
        });
      });
    }
  });

}

function menuBtn() {
  $('#mobile_menu_btn').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#mobileMenuCont').removeClass('active');
      $('header').removeClass('head_active');
      $('.header_right_menu').removeClass('active');
      $('body').css({'overflow-y':''});
      $('header .navbar-main .navbar-nav li div.mega_container .first_child_cont').removeClass('active');
      $('header .navbar-main .navbar-nav li div.mega_container .first_child_cont ul').removeClass('active');
      $('header .navbar-main .navbar-nav li div.mega_container .first_child_cont ul li').removeClass('active');
      
      $('header .navbar-main .navbar-nav li div.mega_container .second_child_cont').removeClass('active');
      $('header .navbar-main .navbar-nav li div.mega_container .second_child_cont ul').removeClass('active');
      $('header .navbar-main .navbar-nav li div.mega_container .second_child_cont ul li').removeClass('active');
      
      $('header .navbar-main .navbar-nav li div.mega_container .third_child_cont').removeClass('active');
      $('header .navbar-main .navbar-nav li div.mega_container .third_child_cont ul').removeClass('active');
      $('header .navbar-main .navbar-nav li div.mega_container .third_child_cont ul li').removeClass('active');
      $('header .navbar-main .navbar-nav li.m_active').removeClass('m_active');
      $('header .navbar-main .navbar-nav li div.mega_container').css({'overflow':''});
      $('header .menu_back').remove();
    } else {
      $(this).addClass('active');
      $('#mobileMenuCont').addClass('active');
      $('header').addClass('head_active');
      $('.header_right_menu').addClass('active');
      $('body').css({'overflow-y':'hidden'});
    }
  });
} 

function accordionMenu() {
  setTimeout(function(){
    $('.accordion .card-body').each(function(){
        $(this).attr('data-height',$(this).height());
      if(!$(this).hasClass('active')) {
        $(this).height(0);
      }
      $(this).parents('.card').css({'opacity':1});
    });
  },750);
  $('.accordion .card-header').on('click', function(e){
    e.preventDefault();
    
    TweenMax.to($('.accordion .card-body'),.4, {css: { height: 0, 'padding':'0 0'}});
    if(!$(this).hasClass('active')) {
      $('.accordion .card-header').removeClass('active');
      $(this).addClass('active');
      var $href = $(this).find('button').attr('data-target');
      if($href == "#"+$(this).siblings('.card-body').attr('id')) {
        TweenMax.to($(this).siblings('.card-body'), .4, { css: { height: parseInt($(this).siblings('.card-body').attr('data-height'))+60, 'padding': '30px 0' } });
      }
    } else {
      $('.accordion .card-header').removeClass('active');
      TweenMax.to($('.accordion .card-body'),.4, {css: { height: 0, 'padding':'0 0'}});
    }
  });
}

function coreAnimation() {
  $('.top-to-bottom').each(function(){
    $(this).css({'top':-$(this).height()});
  });

  $('.left-to-right').each(function(){
    $(this).css({'left':-$(this).height()});
  });

  $('.right-to-left').each(function(){
    $(this).css({'right':-$(this).height()});
  });

  $('.bottom-to-top').each(function(){
    $(this).css({'bottom':-$(this).height()});
  });
}

function fullHeight() {
  if($(window).width()>769) {
    if($('.full-height').css('padding-bottom') || $('.full-height').css('padding-top')) {
      $paddingBottom = $('.full-height').css('padding-bottom');
      $paddingTop = $('.full-height').css('padding-top');
      $('.full-height').height($(window).height() - parseInt($paddingBottom) - parseInt($paddingTop));
    }
    else {
      $('.full-height').height($(window).height());
    }
  }
}

setSections();

function setSections() {
  var scrollTop = $(window).scrollTop();

  for (var i=0;i<sections.length;i++) {
    if (scrollTop > (sections[i].offsetTop-(window.innerHeight/2)) - (window.innerHeight/4) ) {
      if (sections[i].className.indexOf('visible')==-1) {
        sections[i].className += ' visible';
        TweenMax.staggerTo('.write_text span',.02, { css:{'opacity':'1'}, ease: Power1.easeInOut},0.02);
        $('.visible .news_item').addClass('animate');
        setTimeout(function(){
          $('.visible .news_item').addClass('finish_animate');
        },200);
        $('.visible .photo_item').addClass('animate');
        setTimeout(function(){
          $('.visible .photo_item').addClass('finish_animate');
        },200);
        $('.visible .video_item').addClass('animate');
        setTimeout(function(){
          $('.visible .video_item').addClass('finish_animate');
        },200);
        $('.visible .document_item').addClass('animate');
        setTimeout(function(){
          $('.visible .document_item').addClass('finish_animate');
        },200);
        if($(window).width()<1024) {
          if($('.tabbed_nav li.active').index()==0) {
            TweenMax.to('.tabbed_nav',.3,{ scrollTo:{x:50,y:0},
              onComplete:function(){
                TweenMax.to('.tabbed_nav',.3,{ delay:.2, scrollTo:{x:$('.tabbed_nav li.active').offset().left,y:0},});
              }
            });
          } else {
            TweenMax.to('.tabbed_nav',.3,{ delay:.5, scrollTo:{x:$('.tabbed_nav li.active').offset().left,y:0},});
          }
        }
        TweenMax.staggerTo('.visible .accordion .card-header',.2, { css:{'opacity':'1'}, ease: Power1.easeInOut},0.09);
      }
    }
  }
}

$(".filter-panel label").click(function() {

  if($(this).find("input[type='checkbox'][name='category']").prop('checked')) {
    $(this).addClass('text-red');
  } else {
    $(this).removeClass('text-red');
  }

  return;
});

$(".filter-content").click(function() {

  if($(this).hasClass('open')) {
    $(this).removeClass("open");
    $(".filter-panel").removeClass("open");
  } else {
    $(this).addClass("open");
    $(".filter-panel").addClass("open");
  }

  return;

});

$(function(){
  var current = location.pathname;
  $('nav.aside ul li a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('active');
      }
  })
});

$(document).ready(function() {

  $("#rocket-top").click(function() {
    $("html, body").animate({scrollTop: 0});

    $(this).addClass('runrocket');

    setTimeout(function() { $(".runrocket").removeClass('runrocket'); }, 700);
  });

  let bgStyle = $(".product_tagline_bg").css("background");
  if( bgStyle ) {
    bgStyle = bgStyle.split('("')[1];
    if( bgStyle ) {
      bgStyle = bgStyle.split('")')[0];

      $("body").prepend('<img class="sonp" src="'+bgStyle+'" style="width:100%;">');
    }
  }

});