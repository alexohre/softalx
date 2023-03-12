(function (window, document, $, undefined) {
  "use strict";

  var axilKey = {
    k: function (e) {
      axilKey.s();
      axilKey.methods();
    },

    s: function (e) {
      this._window = $(window);
      this._document = $(document);
      this._body = $("body");
      this._html = $("html");
      this.sideNav = $(".side-nav");
      this._navsearch = $(".axil-search-area");
    },

    methods: function () {
      $(document).on("turbo:load", function () {
        axilKey.tiltAnimation();
        axilKey.axilHover();
        axilKey.axilaccor();
        axilKey.onMoveUp();
        axilKey.moveUp();
        axilKey.marqueImages();
        axilKey.scrollDown();
        axilKey.stickHeader();
        axilKey.mobileMenu();
        axilKey.scrollSmoth();
        axilKey._slickDoc();
        axilKey.handleMobileMenuClick();
      });
      $(document).on("turbo:click", function () {
        axilKey.mouseParalax();
        axilKey._clickDoc();
      });
    },

    tiltAnimation: function () {
      var _tiltAnimation = $(".paralax-image");
      if (_tiltAnimation.length) {
        _tiltAnimation.tilt({
          max: 12,
          speed: 1e3,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          transition: !1,
          perspective: 1e3,
          scale: 1,
        });
      }
    },

    axilHover: function () {
      $(
        ".axil-service-area .axil-service , .mesonry-list .portfolio , .blog-list-wrapper .axil-blog, .axil-testimonial-single .axil-testimonial"
      ).mouseenter(function () {
        var self = this;
        $(self).removeClass("axil-control");
        setTimeout(function () {
          $(
            ".axil-service-area .active , .mesonry-list .active , .blog-list-wrapper .active,  .axil-testimonial-single .active"
          )
            .removeClass("active")
            .addClass("axil-control");
          $(self).removeClass("axil-control").addClass("active");
          $(".axil-service.active .inner::before").css("opacity", 0.1);
        }, 0);
      });
    },

    axilaccor: function () {
      // implementation code here
    },

    onMoveUp: function () {
      axilKey._window.on("load", function () {
        function allAnimation() {
          $(".move-up").css("opacity", 0);
          $(".move-up").waypoint(
            function () {
              $(".move-up").addClass("animate");
            },
            {
              offset: "90%",
            }
          );
        }
        allAnimation();
      });
    },

    moveUp: function () {
      $(window).on("load", function () {
        $(".move-up").css("opacity", 0);
        $(".move-up").waypoint(
          function () {
            $(".move-up").addClass("animate");
          },
          {
            offset: "90%",
          }
        );
      });
    },

    marqueImages: function () {
      $(".marque-images").each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
          t += i;
          $this.css("background-position-x", -t + "px");
        }, 10);
      });
    },

    scrollDown: function () {
      $(".smoth-animation").click(function () {
        $("html, body").animate(
          {
            scrollTop: $("#sectionBottom").offset().top,
          },
          1000
        );
      });
    },

    stickHeader: function () {
      axilKey._window.scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".axil-header-sticky").addClass("sticky");
        } else {
          $(".axil-header-sticky").removeClass("sticky");
        }
      });
    },

    handleMobileMenuClick: function () {
      $(".mainmenu-item > li.has-children > a").on("click", function (e) {
        e.preventDefault();
        $(this).siblings(".submenu").slideToggle("400");
        $(this)
          .toggleClass("active")
          .siblings(".submenu")
          .toggleClass("is-visiable");
      });
    },

    scrollSmoth: function (e) {
      $(document).on("click", ".smoth-animation", function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          500
        );
      });
    },

    mobileMenu: function () {
      $(".mainmenu-item > li.has-children > a").on("turbo:click", function (e) {
        e.preventDefault();
        $(this).siblings(".submenu").slideToggle("400");
        $(this)
          .toggleClass("active")
          .siblings(".submenu")
          .toggleClass("is-visiable");
      });
    },

    _slickDoc: function () {
      // Check if element exists
      $.fn.elExists = function () {
        return this.length > 0;
      };
      // Variables
      var $html = $("html"),
        $elementCarousel = $(".axil-carousel");

      if ($elementCarousel.elExists()) {
        var slickInstances = [];
        $elementCarousel.each(function (index, element) {
          var $this = $(this);
          // Carousel Options
          var $options =
            typeof $this.data("slick-options") !== "undefined"
              ? $this.data("slick-options")
              : "";
          var $spaceBetween = $options.spaceBetween
              ? parseInt($options.spaceBetween)
              : 0,
            $spaceBetween_xl = $options.spaceBetween_xl
              ? parseInt($options.spaceBetween_xl)
              : 0,
            $isCustomArrow = $options.isCustomArrow
              ? $options.isCustomArrow
              : false,
            $customPrev =
              $isCustomArrow === true
                ? $options.customPrev
                  ? $options.customPrev
                  : ""
                : "",
            $customNext =
              $isCustomArrow === true
                ? $options.customNext
                  ? $options.customNext
                  : ""
                : "",
            $vertical = $options.vertical ? $options.vertical : false,
            $focusOnSelect = $options.focusOnSelect
              ? $options.focusOnSelect
              : false,
            $asNavFor = $options.asNavFor ? $options.asNavFor : "",
            $fade = $options.fade ? $options.fade : false,
            $autoplay = $options.autoplay ? $options.autoplay : false,
            $autoplaySpeed = $options.autoplaySpeed
              ? $options.autoplaySpeed
              : 5000,
            $swipe = $options.swipe ? $options.swipe : false,
            $adaptiveHeight = $options.adaptiveHeight
              ? $options.adaptiveHeight
              : false,
            $arrows = $options.arrows ? $options.arrows : false,
            $dots = $options.dots ? $options.dots : false,
            $infinite = $options.infinite ? $options.infinite : false,
            $centerMode = $options.centerMode ? $options.centerMode : false,
            $centerPadding = $options.centerPadding
              ? $options.centerPadding
              : "",
            $speed = $options.speed ? parseInt($options.speed) : 1000,
            $prevArrow =
              $arrows === true
                ? $options.prevArrow
                  ? '<span class="' +
                    $options.prevArrow.buttonClass +
                    '"><i class="' +
                    $options.prevArrow.iconClass +
                    '"></i></span>'
                  : '<button class="slick-prev">previous</span>'
                : "",
            $nextArrow =
              $arrows === true
                ? $options.nextArrow
                  ? '<span class="' +
                    $options.nextArrow.buttonClass +
                    '"><i class="' +
                    $options.nextArrow.iconClass +
                    '"></i></span>'
                  : '<button class="slick-next">next</span>'
                : "",
            $slidesToShow = $options.slidesToShow
              ? parseInt($options.slidesToShow, 10)
              : 1,
            $slidesToScroll = $options.slidesToScroll
              ? parseInt($options.slidesToScroll, 10)
              : 1;

          /*Responsive Variable, Array & Loops*/
          var $responsiveSetting =
              typeof $this.data("slick-responsive") !== "undefined"
                ? $this.data("slick-responsive")
                : "",
            $responsiveSettingLength = $responsiveSetting.length,
            $responsiveArray = [];
          for (var i = 0; i < $responsiveSettingLength; i++) {
            $responsiveArray[i] = $responsiveSetting[i];
          }

          // Adding Class to instances
          $this.addClass("slick-carousel-" + index);
          $this
            .parent()
            .find(".slick-dots")
            .addClass("dots-" + index);
          $this
            .parent()
            .find(".slick-btn")
            .addClass("btn-" + index);

          if ($spaceBetween != 0) {
            $this.addClass("slick-gutter-" + $spaceBetween);
          }
          if ($spaceBetween_xl != 0) {
            $this.addClass("slick-gutter-xl-" + $spaceBetween_xl);
          }
          $this.slick({
            slidesToShow: $slidesToShow,
            slidesToScroll: $slidesToScroll,
            asNavFor: $asNavFor,
            autoplay: $autoplay,
            autoplaySpeed: $autoplaySpeed,
            speed: $speed,
            infinite: $infinite,
            arrows: $arrows,
            dots: $dots,
            vertical: $vertical,
            focusOnSelect: $focusOnSelect,
            centerMode: $centerMode,
            centerPadding: $centerPadding,
            fade: $fade,
            adaptiveHeight: $adaptiveHeight,
            prevArrow: $prevArrow,
            nextArrow: $nextArrow,
            responsive: $responsiveArray,
          });

          if ($isCustomArrow === true) {
            $($customPrev).on("click", function () {
              $this.slick("slickPrev");
            });
            $($customNext).on("click", function () {
              $this.slick("slickNext");
            });
          }
        });

        // Updating the sliders in tab
        $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
          $elementCarousel.slick("setPosition");
        });
      }
    },

    _clickDoc: function () {
      var inputblur,
        inputFocus,
        openSideNav,
        closeSideNav,
        axilaccordion,
        OpenMobileMenu,
        closeMobileMenu,
        closeMenuWrapperClick,
        inputblur = function () {
          if (!$(this).val()) {
            $(this).parent(".form-group").removeClass("focused");
          }
        };

      inputFocus = function (e) {
        $(this).parents(".form-group").addClass("focused");
      };

      openSideNav = function (e) {
        e.preventDefault();
        axilKey.sideNav.addClass("opened");
        axilKey._html.addClass("side-nav-opened");
      };

      closeSideNav = function (e) {
        if (
          !$(
            '.side-nav, .side-nav *:not(".close-sidenav, .close-sidenav *")'
          ).is(e.target)
        ) {
          axilKey.sideNav.removeClass("opened");
          axilKey._html.removeClass("side-nav-opened");
        }
      };

      OpenMobileMenu = function (e) {
        e.preventDefault();
        axilKey._body.addClass("popup-mobile-manu-visible");
        axilKey._html.css({
          overflow: "hidden",
        });
      };

      closeMenuWrapperClick = function (e) {
        e.target === this &&
          axilKey._body.removeClass("popup-mobile-manu-visible"),
          axilKey._html.css({
            overflow: "",
          });
      };

      closeMobileMenu = function (e) {
        $(".mainmenu-item > li.has-children > a")
          .removeClass("active")
          .siblings(".submenu")
          .slideUp("400");
        axilKey._body.removeClass("popup-mobile-manu-visible");
        axilKey._html.css({
          overflow: "",
        });
      };

      axilaccordion = function (e) {
        e.preventDefault();
        $(this)
          .siblings(".collapse.show")
          .parent()
          .removeClass("open")
          .toggleClass("active");
      };

      axilKey._document
        .on("blur", "input,textarea,select", inputblur)
        .on(
          "focus",
          'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select',
          inputFocus
        )
        .on("turbo:click", "#side-nav-toggler", openSideNav)
        .on("turbo:click", "#close-sidenav , .side-nav-opened", closeSideNav)
        .on("turbo:click", ".axil-accordion .card .card-header", axilaccordion)
        .on("turbo:click", ".popup-navigation-activation", OpenMobileMenu)
        .on("turbo:click", ".close-menu", closeMobileMenu)
        .on("turbo:click", ".popup-mobile-manu", closeMenuWrapperClick);
    },

    mouseParalax: function () {
      // implementation code here
    },
  };

  axilKey.k();
})(window, document, jQuery);
