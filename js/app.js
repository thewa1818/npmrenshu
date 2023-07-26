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

// new Vivus('mv-svg', {duration: 300}, callback);

var logo = new Vivus('text', {
  type: 'delayed',
  duration: 300,
  animTimingFunction: Vivus.EASE,
  start: 'autostart'
}, function(obj) {
  logo.reset().play();
});

const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})
.add({
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: anime.stagger(4, {from: 'center'})
})
.add({
  rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 180,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();

