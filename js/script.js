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