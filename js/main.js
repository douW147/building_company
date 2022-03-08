var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});
  
const advantagesRows = {
  "advantages-row-1": "./images/advantages1.png",
  "advantages-row-2": "./images/advantages2.png",
  "advantages-row-3": "./images/advantages3.png",
  "advantages-row-4": "./images/advantages4.png",
  "advantages-row-5": "./images/advantages5.png"
}

function setImageforRow(src) {
  $(".advantages__advantages-image").attr("src", src);
};


$("#advantages-row-1").mouseover(function(elem) {
  setImageforRow(advantagesRows[elem.currentTarget.id]);
});
$("#advantages-row-2").mouseover(function(elem) {
  setImageforRow(advantagesRows[elem.currentTarget.id]);
})
$("#advantages-row-3").mouseover(function(elem) {
  setImageforRow(advantagesRows[elem.currentTarget.id]);
})
$("#advantages-row-4").mouseover(function(elem) {
  setImageforRow(advantagesRows[elem.currentTarget.id]);
})
$("#advantages-row-5").mouseover(function(elem) {
  setImageforRow(advantagesRows[elem.currentTarget.id]);
});

function animateLeftImage() {
  $(".smart-image1").animate({left:"-=320px"}, 10000, function(){
    $(".smart-image1").animate({left:"0px"}, 1);
    animateLeftImage();
  });
}

function animateRightImage() {
  $(".smart-image2").animate({left:"-=320px"}, 10000, function(){
    $(".smart-image2").animate({left:"0px"}, 1);
    animateRightImage();
  });
}

animateLeftImage();
animateRightImage();
// while(true) {
//   $(".smart-image1").animate({left:"-=320px"}, 5000, function(){
//     $(".smart-image1").animate({left:"0px"}, 1)
//   });
// }