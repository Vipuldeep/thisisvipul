

jQuery(document).ready(function($) {

		setTimeout(function() {
		   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
		 }, 100);
	
	
	
	   $('.smoothscroll').on('click',function (e) {
			e.preventDefault();
	
			var target = this.hash,
			$target = $(target);
	
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});
	
	

	// 	var sections = $("section");
	// 	var navigation_links = $("#nav-wrap a");
	
	// 	sections.waypoint({
	
	// 	  handler: function(event, direction) {
	
	// 		   var active_section;
	
	// 			active_section = $(this);
	// 			if (direction === "up") active_section = active_section.prev();
	
	// 			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
	
	// 		 navigation_links.parent().removeClass("current");
	// 			active_link.parent().addClass("current");
	
	// 		},
	// 		offset: '35%'
	
	// 	});
	
	
	//    $('header').css({ 'height': $(window).height() });
	//    $(window).on('resize', function() {
	
	// 		$('header').css({ 'height': $(window).height() });
	// 		$('body').css({ 'width': $(window).width() })
	//    });
	
	
	
	
	   $(window).on('scroll', function() {
	
			var h = $('header').height();
			var y = $(window).scrollTop();
		  var nav = $('#nav-wrap');
	
		   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
			  nav.fadeOut('fast');
		   }
		  else {
			 if (y < h*.20) {
				nav.removeClass('opaque').fadeIn('fast');
			 }
			 else {
				nav.addClass('opaque').fadeIn('fast');
			 }
		  }
	
		});
	
	
	
	
		$('.item-wrap a').magnificPopup({
	
		   type:'inline',
		   fixedContentPos: false,
		   removalDelay: 200,
		   showCloseBtn: false,
		   mainClass: 'mfp-fade'
	
		});
	
		$(document).on('click', '.popup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
		});

	
	});

	//courtesy w3bschools
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	// window.onclick = function(event) {
	//   if (event.target == modal) {
	// 	modal.style.display = "none";
	//   }
	// }
	

	// Get carousel elements

var tLeftButton = $("#testimonials-l");
var tRightButton = $("#testimonials-r");

// Get number of <li> elements in carousel

var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;

// Set length based on that

var tWidth = tItemCount * 100 + "vw";
$(".testimonials ul").css("width", tWidth);

// Button functionality

var tPosition = 0;
console.log(tPosition);

tRightButton.click(function() {
  if (tPosition < (tItemCount - 1)) {
    tPosition++;
    var m = "-" + (100 * tPosition) + "vw";
    $(".testimonials ul").animate({
      "left": m
    }, 500);
    greyButton();
  }
});

tLeftButton.click(function() {
  if (tPosition > 0) {
    tPosition--;
    var m = "-" + (100 * tPosition) + "vw";
    $(".testimonials ul").animate({
      "left": m
    }, 500);
    greyButton();
  }
});

// Grey out buttons if not useable 

var greyButton = function() {
  if (tPosition == 0) {
    tLeftButton.css("opacity", "0.3");
    tLeftButton.css("cursor", "default");
  } else if (tPosition == (tItemCount - 1)) {
    tRightButton.css("opacity", "0.3");
    tRightButton.css("cursor", "default");
  } else {
    tRightButton.css("opacity", "1");
    tRightButton.css("cursor", "pointer");
    tLeftButton.css("opacity", "1");
    tLeftButton.css("cursor", "pointer");
  }
}

greyButton();

// And finally, if there's only one quote, kill the buttons altogether

if ( tItemCount == 1 ) {
  $('.testimonials-control').css('display','none');
}

