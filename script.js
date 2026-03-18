gsap.registerPlugin(ScrollTrigger);

let section = document.getElementById("poem-section");
let masks = document.querySelectorAll(".poem-mask");

let timeline;

timeline = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end:"+=2500",
        scrub:1,
        pin: true,
        markers:true,
    }
});

timeline.to(masks,{
    xPercent:102,
    stagger:0.6, //revalacion delineas 
    ease:"none"


});
