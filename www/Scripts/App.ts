//http://jackonthe.net/css3animateit/examples/
//http://imakewebthings.com/waypoints/  
//http://kenwheeler.github.io/slick/

/// <reference path="types/jquery.d.ts" />

var Waypoint: any;

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    return d;
}

function circ(start: number, fin: number) {
    $("#circle1").animate({ 'x': fin }, { step: (x: any) => { $("#circle1").attr("d", describeArc(150, 150, 150, start, x)); circStep = x; }, duration: duration, easing: 'linear' });
    $("#circle2").animate({ 'x': fin }, { step: (x: any) => { $("#circle2").attr("d", describeArc(300, 300, 250, start, x)); }, duration: duration, easing: 'linear' });
    $("#circle3").animate({ 'x': fin }, { step: (x: any) => { $("#circle3").attr("d", describeArc(100, 100, 50, start, x)); }, duration: duration, easing: 'linear' });
    $("#circle4").animate({ 'x': fin }, { step: (x: any) => { $("#circle4").attr("d", describeArc(25, 25, 20, start, x)); }, duration: duration, easing: 'linear' });
    duration -= 100;
}



let circStart = 0;
let circFin = 359.9;
let circStep = 0;
let duration = 1000;

if (!isMobile() && isIndex()) {
    $(window).on("mousewheel", (evnt) => {

        if ((<any>evnt.originalEvent).wheelDelta < 0) {
            if (circStep <= 359) {
                circ(circStart, circFin);
                setTimeout(() => {
                    $("#circle1").stop();
                    $("#circle2").stop();
                    $("#circle3").stop();
                    $("#circle4").stop();
                }, 200);
                return false;
            }
        }
    });
}

window.onload = function () {

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (!isFirefox) {
        //let _css: string = '<style> #map * {  filter: url(filters.svg#grayscale); filter: gray;  -webkit-filter: grayscale(1); }</style>'
       // $("body").append(_css);
    }


    if (isMobile()) {
        $("#sec0 .logo .logo").css("display","none");


        $(".section_menu .wrapText a").on("click", function (evn) {
            $(document).scrollTop($((<any>evn.currentTarget).hash).offset().top - 90);
        })
    }


    var elem = document.getElementById('hellopreloader');
    elem.parentNode.removeChild(elem);

    let winHeight: number = window.innerHeight;

    if (isIndex()) {
        for (let i = 1; i < 21; i++) {
            if (i == 14)
                var waypoint = new Waypoint({ element: $('.animated.ff' + i), handler: function (direction: string) { if (direction == "down") { this.element.removeClass("fadeInUp"); } else { this.element.addClass("fadeInUp"); } }, offset: winHeight + 250 });
            else if (i == 17 || i == 10 || i == 13 || i == 14 || i == 20 || i == 18 || i == 16)
                var waypoint = new Waypoint({ element: $('.animated.ff' + i), handler: function (direction: string) { if (direction == "down") { this.element.removeClass("fadeInUp"); } else { this.element.addClass("fadeInUp"); } }, offset: winHeight + 350 });
            else if (i == 19)
                var waypoint = new Waypoint({ element: $('.animated.ff' + i), handler: function (direction: string) { if (direction == "down") { this.element.removeClass("bounceInRight"); } else { this.element.addClass("bounceInRight"); } }, offset: winHeight + $('.animated.ff' + i).outerHeight(true) });
            else
                var waypoint = new Waypoint({ element: $('.animated.ff' + i), handler: function (direction: string) { if (direction == "down") { this.element.removeClass("fadeInUp"); } else { this.element.addClass("fadeInUp"); } }, offset: winHeight + $('.animated.ff' + i).outerHeight(true) });

        }
    }


    $('.slider1big').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        appendDots: ".dots1",
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.sliderMiniLogs').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: ".button.prev",
        nextArrow: ".button.next",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider2big').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        appendDots: ".dots2",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".scroll").mCustomScrollbar({
        axis: "y",
        theme: "rounded-dots-dark"
    });

    $(".phone_wrap .menu_bhp").on("click", function () {
        $("#menu_bhp2").prop("checked", !(<any>$("#menu_bhp2")[0]).checked);
        $("#menu_bhp1").prop("checked", (<any>$("#menu_bhp2")[0]).checked);

        if ((<any>$("#menu_bhp1")[0]).checked) {
            $(".section_menu").css("height", "100%");
            $("body").css("overflow", "hidden");
        }
        else {
            $(".section_menu").css("height", "0%");
            $("body").css("overflow", "initial");
        }
        return false;
    });

    $(".section_menu .wrapText a").on("click", function () {
        $(".section_header0").css("height", "0%");
        setTimeout(() => {
            $(".section_menu").css("height", "0%");
            $(".section_call .wrap").css("opacity", "0");
            $(".section_call").css("height", "0%");

        }, 100);
        if (window.innerWidth > 1200 && window.innerWidth < 1366) {
            $(".section_call .back2").css("background-position", "700% 50%");
        }
        $("#menu_bhp2").prop("checked", !(<any>$("#menu_bhp2")[0]).checked);
        $("#menu_bhp1").prop("checked", (<any>$("#menu_bhp2")[0]).checked);
        $("body").css("overflow", "initial");
    });

    $(".section_call .close").on("click", function () {
        $(".section_call").css("height", "100%");
        if (isMobile())
            $("body").removeClass("callSectionActive");
        else
            $("body").removeClass("contactForm");
        $(".section_call .wrap").css("opacity", "0");
        $(".section_call").css("height", "0%");
        $(".section_call").css("padding", "0");
        if (window.innerWidth > 1200 && window.innerWidth < 1366) {
            $(".section_call .back2").css("background-position", "700% 50%");
        }
    });

    $(".actionPhone").on("click", function () {
        if (isMobile()) {
            $("body").addClass("callSectionActive");
            $(".section_call").css("height", "initial");

        }
        else {
            $("body").addClass("contactForm");
            $(".section_call").css("height", "100%");
            setTimeout(() => {
                $(".section_call").css({
                    height: "initial",
                    padding: "0 0 81px 0"
                });
            }, 300);
            $(".section_header0").css("height", "0px");
        }
        $(".section_call .wrap").css("opacity", "1");
        $('html,body').animate({ scrollTop: $("#sec").offset().top - 25 }, 'slow');

    });

    function scrollToAnchor(aid: any) {
        var aTag = $(aid.currentTarget.hash);
        $('html,body').animate({ scrollTop: aTag.offset().top - 25 }, 'slow');
    }

    $(".lazyScroll a").click(function (event) {
        scrollToAnchor(event);
    });

    let oldPosition = 0;

    if (isMobile()) {
        $('body').on({
            'touchmove': function (e) {
                if ($(this).scrollTop() < oldPosition)
                    $(".section_header0").css("position", "fixed");
                else
                    $(".section_header0").css("position", "absolute");
                oldPosition = $(this).scrollTop();
            }
        });
    }

    $(".submit.bhp.button").on("click", function () {

        if (!(<any>$('#name')[0]).checkValidity()) {
            $('#name').addClass("go");
            setTimeout(function () {
                $('#name').removeClass("go");
            }, 5000)
            return false;
        }

        if (!(<any>$('#mail')[0]).checkValidity()) {
            $('#mail').addClass("go");
            setTimeout(function () {
                $('#mail').removeClass("go");
            }, 5000)
            return false;
        }

        if (!(<any>$('#phone')[0]).checkValidity()) {
            $('#phone').addClass("go");
            setTimeout(function () {
                $('#phone').removeClass("go");
            }, 5000)
            return false;
        }

        sentMessage();
        return false;
    });

    function sentMessage() {
        let name = $("#name").val();
        let mail = $("#mail").val();
        let phone = $("#phone").val();
        let comment = $("#comment").val();

        let urlNormal = "http://breitenberg.ru/mail.php";

        var data = {
            name: name,
            mail: mail,
            phone: phone,
            comment: comment
        };

        var jqxhr = $.post(urlNormal, data, function () {

        })
            .done(function (event) {

                ScrollStop = false
                $(".alert").show();
                $(".alert").addClass("go");
                setTimeout(() => {
                    $(".alert").removeClass("go");
                }, 5000);
            })
            .fail(function (event) {
                alert("We have problem... Call: 8 (8152) 78-77-88");
            });
    }

    let rom = 0;
    let romEl: any = undefined;
    $(".bhp.number").on("click", function (arg) {
        if (romEl === arg.currentTarget) {
            romEl = arg.currentTarget;
            rom++;
            if (rom > 3) {
                $("#romGrla").show();
                romEl = undefined;
            }
        }
        else {
            romEl = arg.currentTarget;
            rom = 0;
        }
    });

    $("#romGrla").on("click", function () {

        $("#romGrla").hide();
    });
}


let ScrollStop = false;

let autoHideMenuActive = false;
if (!isMobile() && !is404()) {
    $(window).on("mousewheel", function (evnt) {
        if (ScrollStop)
            return false;
        if (!isMobile()) {
            if ((<any>evnt.originalEvent).wheelDelta < 0) {
                $(".section_header0").css("height", "0px");
            }
        }
        if ((<any>evnt.originalEvent).wheelDelta > 0 && !autoHideMenuActive) {
            if ($(window).scrollTop() < 500 && isIndex())
                isIndex() && $(".section_header0").css("height", "0px");
            else
                $(".section_header0").css("height", "54px");
        }
        if ((<any>evnt.originalEvent).wheelDelta > 500) {
            $(".section_header0").css("height", "0px");
        }



    });

    if (isIndex())
        setInterval(autoHideMenu, 200);
    else
        $(".section_header0").css("height", "54px");

    function autoHideMenu() {
        if ($(window).scrollTop() < 60) {
            $(".section_header0").css("height", "0");
            autoHideMenuActive = true;
        }
        else {
            autoHideMenuActive = false;
        }

    }

}





function is404(): boolean {
    return location.href.indexOf("404.php") !== -1;
}
function isIndex(): boolean {
    return $(".indexPage").length > 0;
}
function isMobile() {
    return window.innerWidth > 480 ? false : true;
}