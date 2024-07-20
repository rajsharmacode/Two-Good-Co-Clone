let video1 = document.querySelector("#video1");
let playpointer = document.querySelector("#playpointer");
let fonttile = document.querySelector(".titlefont");
let videooverlap = document.querySelector("#videooverlap");

videooverlap.addEventListener("mouseenter", () => {
    gsap.to(playpointer, {
        opacity: 1,
        scale: 1,
    });
});
videooverlap.addEventListener("mouseleave", () => {
    gsap.to(playpointer, {
        opacity: 0,
        scale: 0,
    });
});
videooverlap.addEventListener("mousemove", (dets) => {
    gsap.to(playpointer, {
        left: dets.x - 50,
        top: dets.y - 50,
    });
});