// === Main js ===
var button = $(".close_button");
var overlay = $(".overlay");
var navbar = $(".section-header-container");
var body = $("body");

$(function() {

    $('.select_language').selectric();

    if ($("div").is("#slider-range-min")) {
        $( "#slider-range-min" ).slider({
            range: "min",
            value: 8,
            min: 1,
            max: 12
        });
    }

    $(button).click(function () {
    
        if (!navbar.is(':visible')) {
            navbar.slideDown('normal');
            navbar.css("display", "flex");
            body.css("overflow-y", "hidden");
            overlay.css("visibility", "visible");
            overlay.css("opacity", "0.8");
        } 
        else {
            navbar.slideUp('normal');
            body.css("overflow-y", "");
            overlay.css("visibility", "");
            overlay.css("opacity", "");
        }
    });

    // var elem = $(".bg_wave").css("background-position-y");

    // $(window).scroll(function() {
    //     if ($("section").is(".bg_wave")) {
    //         var scrollTop = $(window).scrollTop();
    //         var pos = String(Number(elem.substr(0, elem.length - 2)) + scrollTop) + "px";
    //         $(".bg_wave").css("background-position", "50% " + pos);
    //     }
    // });

    $(".modal-form").scroll(function() {
        var myScroll = $(this).scrollTop();
        var img = "";
        if (this.classList[1] == "modal-rate") { // большая модаль
            img = ".modal-rate > .modal-top > .modal-form-title > img";
        }
        else {
            img = "." + this.classList[1] + " > .modal-form-title > img";
        }
        $(img).css("top", myScroll + "px");
    });

});

$(".auth, .reg, .reset, .fact, .rate, .rate_success, .rate_error, .bk").on("click",function(event){
    $('.overlay').attr('name', this.classList[0]);
    $(".overlay").css("visibility", "visible");
    $(".overlay").css("opacity", "0.8");
    $("body").css("overflow-y", "hidden");

    if ($(window).width() <= '1600') {
        $(".modal-" + this.classList[0]).css("top", "50px");
    }
    if ($(window).width() <= '600') { // открытие модали на мобиле
        $(".modal-" + this.classList[0]).css("top", "50px");
        overlay.css("z-index", "14");
    }
    else {
        $(".modal-" + this.classList[0]).css("top", "150px");
    }

    if (this.classList[0] == "rate") {
        $(".modal-" + this.classList[0]).css("top", "20px");
    }
});

$(".overlay, .modal-form-title > img, .modal-fact > div > button, .modal-rate_success > div > button").on("click",function(event){

    if ($('.close_button > input').prop('checked')) { // открыта шторка

        if (overlay.attr("name") == "" || overlay.attr("name") == undefined) { // открыта только шторка
            $('.close_button').click();
            $('.close_button > input').prop('checked', false);
        }
        else { // открыта и шторка и модаль
            $(".modal-" + $('.overlay').attr('name')).css("top", "");
            overlay.css("z-index", "");
            overlay.attr('name', "");
            return false;
        }

    }
    else { // открыта модаль
        body.css("overflow-y", "");
        $(".modal-" + $('.overlay').attr('name')).css("top", "");
    }

    overlay.css("z-index", "");
    overlay.css("visibility", "");
    overlay.css("opacity", "");
    overlay.attr('name', "");
});



$("button[name='back_reset'], button[name='back_auth'], button[name='back_reg'], button[name='back_rate_success'], button[name='back_rate_error'], button[name='back_rate']").click(function() {
    $('.overlay').click();
    name = "." + this.name.substr(5);
    setTimeout(function() {
        $(name).click();
    }, 500);
    return false;
});

// === / Main js ===