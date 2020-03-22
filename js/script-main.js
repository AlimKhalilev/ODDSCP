// === Main js ===

$(function() {
    $('.select_language').selectric();
});

$(".auth, .reg, .reset, .fact").on("click",function(event){
    $('.overlay').attr('name', this.classList[0]);
    $(".overlay").css("visibility", "visible");
    $(".overlay").css("opacity", "0.8");
    $("body").css("overflow-y", "hidden");
    if ($(window).width() <= '578') {
        $(".modal-" + this.classList[0]).css("top", "70px");
    }
    else {
        $(".modal-" + this.classList[0]).css("top", "150px");
    }
});

$(".overlay, .modal-form-title > img, .modal-fact > div > button").on("click",function(event){
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

$("#lose_pass").click(function() {
    $('.overlay').click();
    setTimeout(function() {
        $(".reset").click();
    }, 500);
    return false;
});

$("button[name='back_reset'], button[name='back_auth'], button[name='back_reg']").click(function() {
    $('.overlay').click();
    name = "." + this.name.substr(5);
    setTimeout(function() {
        $(name).click();
    }, 500);
    return false;
});

// === / Main js ===