    //Read more button in section2
const textMore = document.querySelector('.section2__description')
const readMoreBtn = document.querySelector('.section2__btn')
var i=0
function readMore() {
    if(!i) {
        textMore.style.height = "940px"
        readMoreBtn.innerHTML = "Read less"
        i=1
    } else {
        textMore.style.height = "510px"
        readMoreBtn.innerHTML = "Read more"
        i=0
    }
}

    //The start of the parallax effect
$(window).scroll(function() {
    var st = $(this).scrollTop();
    $(".bulba").css({
        "transform" : "translateY(" + st/-5 + "px"
    })
    $(".section3").css({
        "height" : 2200-st + "px"
    })
    $(".section3-bg").css({
        "opacity" : st/1000 - 1.6
    })
})
    //End of parallax effect