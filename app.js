const tl = gsap.timeline({defaults: {ease:'power1.out'}});
tl.to('.text',{y:'0%',duration:1,stagger:0.25});
tl.to('.slider',{ y : "-100%", duration:1.5, delay: 1.5});
tl.to('.intro',{ y : "-100%", duration: 1}, '-=1');
tl.fromTo('nav',{ opacity : 0 },{opacity:1, duration: 1});
tl.fromTo('.big-text',{ opacity: 0 },{opacity:1, duration: 1}, '-=1');

//card animation
const card = document.querySelector('.box');
const container = document.querySelector('.boxcontainer');
const name = document.querySelector('.name');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const about = document.getElementById('aboutsm');

container.addEventListener('mousemove',(e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

about.addEventListener("mouseover",(e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  about.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});
about.addEventListener("mouseleave",(e) => {
    about.style.transition = "all 0.5s ease";
    about.style.transform = `rotateY(0deg) rotateX(0deg)`;
})

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
    description.style.transform = "translateZ(0px)";
  title.style.transform = "translateZ(0px)";
  name.style.transform = "translateZ(0px) rotateZ(0deg)";
});
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  description.style.transform = "translateZ(0px)";
  title.style.transform = "translateZ(0px)";
  name.style.transform = "translateZ(0px) rotateZ(0deg)";
});
