//alert(1111);

$("#title").on("click",function(){
  $(this).css("color","red")
});

gsap.to(".box", {
  duration: 3, // 秒指定
  x: 700,
  rotate: 360,
  repeat: -1, // 繰り返し指定
  ease: Cubic.easeInOut // 加減速の種類
});

// import anime from 'animejs'


var timeline = anime.timeline({
  direction: 'alternate',
  loop:true,
  delay:700
});

timeline
.add({
  targets: '#elem',
  translateX: 250
})
.add({
  targets: '#elem2',
  translateX: 250,
  offset:'-=600'
})
.add({
  targets: '#elem3',
  translateX: 250,
  offset:'-=800'
});