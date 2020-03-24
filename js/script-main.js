// === Main js ===

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
});

$(".auth, .reg, .reset, .fact, .rate, .rate_success, .rate_error, .bk").on("click",function(event){
    $('.overlay').attr('name', this.classList[0]);
    $(".overlay").css("visibility", "visible");
    $(".overlay").css("opacity", "0.8");
    $("body").css("overflow-y", "hidden");
    if ($(window).width() <= '578') {
        $(".modal-" + this.classList[0]).css("top", "70px");
    }
    else {
        if (this.classList[0] == "rate") {
            $(".modal-" + this.classList[0]).css("top", "20px");
        }
        else {
            $(".modal-" + this.classList[0]).css("top", "150px");
        }
    }
});

$(".overlay, .modal-form-title > img, .modal-fact > div > button, .modal-rate_success > div > button").on("click",function(event){
    if ($(".modal-" + $('.overlay').attr('name')).css("top") == "-999px") {
        $('.close_button').click();
        $('.close_button > input').prop('checked', false);
    }
    else {
        $(".overlay").css("visibility", "");
        $(".overlay").css("opacity", "");
        $(".modal-" + $('.overlay').attr('name')).css("top", "");
        $("body").css("overflow-y", "");
    }
    $('.overlay').attr('name', "");
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