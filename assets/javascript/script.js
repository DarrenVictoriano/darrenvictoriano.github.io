// function to test viewport size change via css
function checkSize() {
  // when sidebar is closed do the following
  if ($('#profile-img').css('width') === "80px") {
    // show profile texts


  }
}

function clickCollapseButton(e) {
  e.preventDefault();
  //show sidebar
  $("#sidebar-header").toggleClass("toggled");
  $("#fullpage").toggleClass("toggled");
  $('#main-container-dimmer').toggleClass("toggled");

  // Dim Overlay
  $('#home').toggleClass("toggled");
  $('#home2').toggleClass("toggled");
  $('#about').toggleClass("toggled");
  $('#projects').toggleClass("toggled");
  $('#skills').toggleClass("toggled");
  $('#contact').toggleClass("toggled");
  $('#footer').toggleClass("toggled");


  // add class to NavLink when viewport is small so it closes the sidebar
  $('a[href^="#"]').toggleClass('nav-link-close');
  $('#contact-link').toggleClass('nav-link-close');
  $('#fullpage').toggleClass('nav-link-close');

  // show profile texts
  $('#profile-name').toggle();
  $('#profile-description').toggle();

  // make profile pic big again
  $('#profile-img-div').toggleClass("toggled");
  $('#profile-img').toggleClass("toggled");

  // re-center social media icons
  $('.social-img').toggleClass('toggled-social');

  // reset nav link text and nav link icon
  $('.nav-link-text').toggleClass('toggled');
  $('.nav-link-icon').toggleClass('toggled');
  $('a[href^="#"]').toggleClass('toggled');
  $('#contact-link').toggleClass('toggled');

}

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#sidebar-nav ul li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() >= scrollPos) {
      $('#sidebar-nav ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}

function clickNavLink(e) {
  e.preventDefault();
  $(document).off("scroll");

  $('a').each(function () {
    $(this).removeClass('active');
  })
  $(this).addClass('active');

  var target = this.hash,
    menu = target;
  $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top + 2
  }, 500, 'swing', function () {
    window.location.hash = target;
    $(document).on("scroll", onScroll);
  });
}

// start JS
$(document).ready(function () {

  new fullpage('#fullpage', {
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    autoScrolling: false,
    scrollHorizontally: false,
    css3: true,
  });


  // reload page on window resize
  // $(window).on('resize', function () { location.reload(); });

  // Collapse Button
  $('#sidebarCollapse').on('click', clickCollapseButton);

  // Navlink
  $('a[href^="#"]').on('click', clickNavLink);
  //auto close navlink
  $(document).on('click', '.nav-link-close', function (e) {
    clickCollapseButton(e);
  });

  // scroll Navlink
  $(document).on("scroll", onScroll);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  })

});

