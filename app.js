const Am = gsap.timeline({defaults:{ease:"power1.out"}});

Am.to(".text",{y:"0%",duration:1,stagger:0.25});
Am.to(".slider",{y:"-100%",duration:1.5,delay:0.5});
Am.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
