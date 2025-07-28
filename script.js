gsap.registerPlugin(ScrollTrigger);

gsap.to(".capsule-top-container", {
  y: "-95%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".capsule-main-container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".capsule-holder-container", {
  width:"110vh",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".capsule-main-container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".capsule-bottom-container", {
  y: "90%",
  zIndex: 2,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".capsule-main-container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});


let offerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".offer-main-container",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  }
});

offerTimeline.to(".offer-head-text", {
  transform: "rotate(0deg)",
  opacity: 1,
  ease: "power1.out"
}, 0);

offerTimeline.to(".offer-p", {
  transform: "translateX(20%) rotate(0deg)",
  opacity: 1,
  ease: "power1.out"
}, 0.4);

offerTimeline.to('.offer-img', {
  bottom: "0%",
  ease: "power1.out"
}, 0.6);

offerTimeline.to('.offer-money', {
  transform: "translate(0, 0)",
  ease: "power1.out"
}, 0.6); 

gsap.to(".cta", {
  opacity: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".offer-main-container",
    start: "top 70%",
    end: "top 10%",
    scrub: true,
  },
});


ScrollTrigger.matchMedia({
  "(max-width: 425px)": function () {
    gsap.to(".offer-img", {
      bottom: "10%",
   scrollTrigger: {
    trigger: ".offer-main-container",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  }
    });

gsap.to(".capsule-bottom-container", {
   y: "140%",
  zIndex: 2,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".capsule-main-container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
    }); 
  },
});
