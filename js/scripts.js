/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Details Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 70,
        breakpoints: {
            // when window is <= 767px
            767: {
                slidesPerView: 1
            },
            // when window is <= 991px
            991: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });


    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});


	var count = 0;
	$(window).scroll(function() {
       if ($(document).scrollTop() > 3000 && $("#modalContactForm").attr("displayed") === "false") {
         $('#modalContactForm').modal('show');
         $("#modalContactForm").attr("displayed", "true");
       }
     });

	// var config = {
	//     // apiKey: "AIzaSyCiba1GcibtEq7dhyIrc7ncQVj1eQZPvBw",
	//     // authDomain: "indelible-events.firebaseapp.com",
	//     // databaseURL: "https://indelible-events.firebaseio.com",
	//     // projectId: "indelible-events",
	//     // storageBucket: "indelible-events.appspot.com",
	//     // messagingSenderId: "682280791079"
	// };
	// firebase.initializeApp(config);
	// var messagesRef = firebase.database().ref("messages");

	// function validateForm() {
	//     var name = document.getElementById("name").value ? "name" : "modalName";
	//     var nameLabel = name === "name" ? "nameLabel" : "modalNameLabel";
	//     var email = document.getElementById("email").value ? "email" : "modalEmail";
	//     var emailLabel = email === "email" ? "emailLabel" : "modalEmailLabel";
	//     var subject = document.getElementById("subject").value ? "subject" : "modalSubject";
	//     var subjectLabel = subject === "subject" ? "subjectLabel" : "modalSubjectLabel";
	//     var message = document.getElementById("message").value ? "message" : "modalMessage";
	//     var messageLabel = message === "message" ? "messageLabel" : "modalMessageLabel";
	//     var e = document.getElementById(name).value,
	//         o = document.getElementById(email).value,
	//         t = document.getElementById(subject).value,
	//         n = document.getElementById(message).value;
	//     return "" == e || null == e ? (document.getElementById(nameLabel).innerHTML = "Please enter your name", document.getElementById(name).style.borderColor = "red", !1) : e.match(/^[a-zA-Z\s]*$/) ? "" == o || null == o ? (document.getElementById(emailLabel).innerHTML = "Please enter your email", document.getElementById(email).style.borderColor = "red", !1) : o.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? "" == t || null == t ? (document.getElementById(subjectLabel).innerHTML = "Please enter your phone number", document.getElementById(subject).style.borderColor = "red", !1) : t.match(/^[0-9]*$/) ? 10 != t.length ? (document.getElementById(subjectLabel).innerHTML = "Please enter your 10 digit phone number", document.getElementById(subject).style.borderColor = "red", !1) : (saveMessage(e, o, t, n), document.querySelector(".alert").style.display = "block", setTimeout(function() {
	//         document.querySelector(".alert").style.display = "none"
	//     }, 3e3), document.getElementById("contact-form").reset(), !0) : (document.getElementById(subjectLabel).innerHTML = "Please enter only numbers", document.getElementById(subject).style.borderColor = "red", !1) :
	//     (document.getElementById(emailLabel).innerHTML = "Please enter a valid email address", document.getElementById(email).style.borderColor = "red", !1) : (document.getElementById(nameLabel).innerHTML = "Please enter only letters", document.getElementById(name).style.borderColor = "red", !1)
	// }

	// function saveMessage(e, o, t, n) {
	//     messagesRef.push().set({
	//         name: e,
	//         email: o,
	//         phone: t,
	//         message: n
	//     })
	// }

// function create_custom_dropdowns() {
//     $('select').each(function (i, select) {
//         if (!$(this).next().hasClass('dropdown-select')) {
//             $(this).after('<div class="dropdown-select wide ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
//             var dropdown = $(this).next();
//             var options = $(select).find('option');
//             var selected = $(this).find('option:selected');
//             dropdown.find('.current').html(selected.data('display-text') || selected.text());
//             options.each(function (j, o) {
//                 var display = $(o).data('display-text') || '';
//                 dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
//             });
//         }
//     });

//     $('.dropdown-select ul').before('<div class="dd-search"><input id="txtSearchValue" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div>');
// }

// // Event listeners

// // Open/close
// $(document).on('click', '.dropdown-select', function (event) {
//     if($(event.target).hasClass('dd-searchbox')){
//         return;
//     }
//     $('.dropdown-select').not($(this)).removeClass('open');
//     $(this).toggleClass('open');
//     if ($(this).hasClass('open')) {
//         $(this).find('.option').attr('tabindex', 0);
//         $(this).find('.selected').focus();
//     } else {
//         $(this).find('.option').removeAttr('tabindex');
//         $(this).focus();
//     }
// });

// // Close when clicking outside
// $(document).on('click', function (event) {
//     if ($(event.target).closest('.dropdown-select').length === 0) {
//         $('.dropdown-select').removeClass('open');
//         $('.dropdown-select .option').removeAttr('tabindex');
//     }
//     event.stopPropagation();
// });

// function filter(){
//     var valThis = $('#txtSearchValue').val();
//     $('.dropdown-select ul > li').each(function(){
//      var text = $(this).text();
//         (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();         
//    });
// };
// // Search

// // Option click
// $(document).on('click', '.dropdown-select .option', function (event) {
//     $(this).closest('.list').find('.selected').removeClass('selected');
//     $(this).addClass('selected');
//     var text = $(this).data('display-text') || $(this).text();
//     $(this).closest('.dropdown-select').find('.current').text(text);
//     $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
// });

// // Keyboard events
// $(document).on('keydown', '.dropdown-select', function (event) {
//     var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
//     // Space or Enter
//     //if (event.keyCode == 32 || event.keyCode == 13) {
//     if (event.keyCode == 13) {
//         if ($(this).hasClass('open')) {
//             focused_option.trigger('click');
//         } else {
//             $(this).trigger('click');
//         }
//         return false;
//         // Down
//     } else if (event.keyCode == 40) {
//         if (!$(this).hasClass('open')) {
//             $(this).trigger('click');
//         } else {
//             focused_option.next().focus();
//         }
//         return false;
//         // Up
//     } else if (event.keyCode == 38) {
//         if (!$(this).hasClass('open')) {
//             $(this).trigger('click');
//         } else {
//             var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
//             focused_option.prev().focus();
//         }
//         return false;
//         // Esc
//     } else if (event.keyCode == 27) {
//         if ($(this).hasClass('open')) {
//             $(this).trigger('click');
//         }
//         return false;
//     }
// });

// $(document).ready(function () {
//     create_custom_dropdowns();
// });
	

    /* Back To Top Button */
    // create the back to top button
 //    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
 //    var amountScrolled = 700;
 //    $(window).scroll(function() {
 //        if ($(window).scrollTop() > amountScrolled) {
 //            $('a.back-to-top').fadeIn('500');
 //        } else {
 //            $('a.back-to-top').fadeOut('500');
 //        }
 //    });


	// /* Removes Long Focus On Buttons */
	// $(".button, a, button").mouseup(function() {
	// 	$(this).blur();
	// });

})(jQuery);