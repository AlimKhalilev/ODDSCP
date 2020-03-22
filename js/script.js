$(document).ready(function() {
    $(".ripple_button").click(drawRipple);
    $("#copy_text").click(function() {
        var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($('.section-integration-content-container-text').text()).select();
	    document.execCommand("copy");
	    $temp.remove();
        $(this).text('Текст скопирован!');
        setTimeout(function() {
            $("#copy_text").text('Скопировать');
        }, 2000);
    });
});

$(function() {
    $('.select_language').selectric();
});

//Ripple Event Handler
var drawRipple = function(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    var node = document.querySelector(".ripple");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = ev.clientX - 5 + "px";
    newNode.style.top = ev.clientY - 5 + "px";
    node.parentNode.replaceChild(newNode, node);
};



$(".auth, .reg, .reset").on("click",function(event){
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

$(".overlay, .modal-form-title > img").on("click",function(event){
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