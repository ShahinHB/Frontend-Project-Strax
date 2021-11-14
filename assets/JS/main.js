$(document).ready(function () {
    $("header .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            992: {
                items: 1
            }
        }
    });
    $("#author .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 2
            }
        }
    });
    $("#signs .owl-carousel").owlCarousel({
        loop: true,
        margin: 60,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            1000: {
                items: 4
            }
        }
    });

    $("#feedbacks .owl-carousel").owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    window.addEventListener('scroll', function (e) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 200) {
            $("header .home-header-menu").css({ "position": "fixed", "background-color": "white" })
            $("header .home-header-menu .login").css({ "border-color": "black", "color": "black" })
            $("header .default-header-menu").css({ "position": "fixed", "background-color": "white" })
        }
        else {
            $("header .home-header-menu").css({ "position": "relative", "background": "none" })
            $("header .default-header-menu").css({ "position": "relative", "background": "none" })
            $("header .home-header-menu .login").css({ "border-color": "white", "color": "white" })
        }
    })

    var input = $("#contactForm .col-6 input")
    for (let i = 0; i < input.length; i++) {

        $(input[i]).focusout(function (e) {
            if (this.value == "") {
                input[i].nextElementSibling.style.display = "block"
            }
            else {
                input[i].nextElementSibling.style.display = "none"
            }
        })


    }
    $("#contactForm button").click(function (e) {
        e.preventDefault()
        let check = true
        for (let i = 0; i < input.length; i++) {
            if (input[i].value == "") {
                check = false
            }
        }
        if (check == false) {
            this.nextElementSibling.innerText = "Did you fill in the form properly?"
            this.nextElementSibling.style.color = "red"
            $("#contactForm").addClass("shake")
            var form = $("#contactForm")

            setTimeout(function () {
                form.removeClass("shake");
            }, 500);
        }
        else {
            this.nextElementSibling.innerText = "Mesage Submitted"
            this.nextElementSibling.style.color = "green"
        }
    })

    $("#video-presentation .container .row .col-12 .facts .col-3 .item .counter .odometer .odometer-digit").css("color", "red")

    $(".responsive-header-menu ul .buttons i").click(function (e) {
        document.querySelector(".dropdown-action").classList.toggle("show-navbar");
    });

    $(".responsive-header-menu ul .nav i").click(function (e) {
        document.querySelector(".responsive-navbar").classList.toggle("show-navbar");
    });

    var offset = $(".facts").offset();
    var top = offset.top;

    window.addEventListener('scroll', function (e) {
        if (document.body.scrollTop > top - 500 || document.documentElement.scrollTop > top - 500) {
            const projects = document.querySelector(".projects");
            const clients = document.querySelector(".clients");
            const onprojects = document.querySelector(".ongoing");
            const winning = document.querySelector(".winning-pro");

            const pro = new Odometer({
                el: projects,
            })
            const cli = new Odometer({
                el: clients,
            })
            const on = new Odometer({
                el: onprojects,
            })
            const win = new Odometer({
                el: winning,
            })



            projects.innerHTML = 800;
            clients.innerHTML = 850;
            onprojects.innerHTML = 120;
            winning.innerHTML = 50;
        }

    })


    let monthlyButton = document.querySelectorAll("#plans .choosing-area button")[0]
    let yearlyButton = document.querySelectorAll("#plans .choosing-area button")[1]




    $(monthlyButton).click(function (e) {
        $("#plans .choosing-area button").removeClass("active");
        $(this).addClass("active");
        $("#plans .monthly").css("visibility", "visible")
        $("#plans .yearly").css({
            "visibility": "hidden",
            "top": "500px",

            "opacity": "0"
        })
    });
    $(yearlyButton).click(function (e) {
        $("#plans .choosing-area button").removeClass("active");
        $(this).addClass("active");
        $("#plans .monthly").css("visibility", "hidden")

        $("#plans .yearly").css({
            "visibility": "visible",
            "top": "0px",
            "left": "0px",
            "width": "100%",
            "opacity": "1",
            "padding": "0 15px"
        })
    });





    window.addEventListener('scroll', function (e) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName('scroll-up')[0].style.transform = "scale(1)"
        }
        else {
            document.getElementsByClassName('scroll-up')[0].style.transform = "scale(0)"
        }
    })

    $(".special-button").on('mouseenter', function (e) {

        var offset = $(this).offset();
        var locY = e.pageY - offset.top;
        var locX = e.pageX - offset.left;

        $(this).find("span").css({
            "top": `${locY}px`,
            "left": `${locX}px`
        })
    })

    $(".special-button").on('mouseout', function (e) {

        var offset = $(this).offset();
        var locY = e.pageY - offset.top;
        var locX = e.pageX - offset.left;

        $(this).find("span").css({
            "top": `${locY}px`,
            "left": `${locX}px`
        })
    })

//   var $head = $("iframe").contents().find("head"); 
//   var url = "assets/css/style.min.css";
//   $head.append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" } ));



$('.play-button').magnificPopup({
    disableOn: 320,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,

});

$.extend(true, $.magnificPopup.defaults, {  
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }
        }
    }
});


});
