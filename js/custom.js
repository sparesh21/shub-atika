$(function() {
	winh = $(window).height();
	winw = $(window).width();


	if (winw < 768) {
		$(".menu_bar").mCustomScrollbar({
			theme: "minimal"
		});
		$('.bookings').css('height', winh);
	}
	if (winw > 767) {
		$('.win_container').css('height', winh);
		$('.map_wrapper , .g_map, .tower_map').css('height', winh - 40);

		var b_w_h = winh - $('.center_content').height();
		console.log(b_w_h)
		$('.center_content').css('margin-top', b_w_h / 2);
	}


	$('.close_popup').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.video_overlay').fadeOut();
		$('.video_container .vid_iframe').attr('src', ' ');
	});
	$('header').css({
		width: winw - 60,
		height: winh - 60
	});
	$.scrollify({
		section: ".panel_scroll",
		scrollbars: true,
		before: function(i, panels) {
			var ref = panels[i].attr("data-section-name");

			$(".pagination_scroll .active").removeClass("active");

			$(".pagination_scroll").find("a[href=\"#" + ref + "\"]").addClass("active");
		},
		afterRender: function() {
			var pagination = "<ul class=\"pagination_scroll\">";
			var activeClass = "";
			$(".panel_scroll").each(function(i) {
				activeClass = "";
				if (i === 0) {
					activeClass = "active";
				}
				pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
			});

			pagination += "</ul>";

			$(".home").append(pagination);
		}
	});



	// Tip: The two click events below are the same:

	$(".pagination_scroll a, .scroll_img a").on("click", function() {
		$.scrollify.move($(this).attr("href"));
	});
	$(".pagination_scroll a, .scroll_img a").on("click", $.scrollify.move);

	/* project slider */
	$('.project-slider').slick({
		dots: true,
		infinite: true,
		arrows: true,
		dots: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: '<button type="button" class="slick-next">Next</button>',
		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		autoplaySpeed: 5000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				}
			}, {
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}

		],
	});

});


$(window).load(function() {
	$('.loader_overlay').fadeOut(2000);

});