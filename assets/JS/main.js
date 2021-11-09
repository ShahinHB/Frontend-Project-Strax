$(document).ready(function () {
    $("header .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive: {
            1000: {
                items: 1
            }
        }
    });
    $("#author .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive: {
            1000: {
                items: 2
            }
        }
    });
    // setTimeout(function(){
    //     odometer.innerHTML = 800;
    // });
    let monthlyButton = document.querySelectorAll("#plans .choosing-area button")[0]
    let yearlyButton = document.querySelectorAll("#plans .choosing-area button")[1]

    $(monthlyButton).click(function (e) { 
        $( "#plans .choosing-area button" ).removeClass( "active" );
        $(this).addClass("active");
        $("#plans .yearly").css({
            "visibility": "hidden",
            "top": "500px",
            
            "opacity": "0"
        })
    });
    $(yearlyButton).click(function (e) { 
        $( "#plans .choosing-area button" ).removeClass( "active" );
        $(this).addClass("active");

        $("#plans .yearly").css({
            "visibility": "visible",
            "top": "0px",
            "left": "12px",
            "width": "100%",
            "opacity": "1"
        })
    });
    window.addEventListener('scroll', function(e){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName('scroll-up')[0].style.transform = "scale(1)"
        }
        else{
            document.getElementsByClassName('scroll-up')[0].style.transform = "scale(0)"
        }
    })
    
});