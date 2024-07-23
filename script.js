function videoplaypointer(){
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
}
videoplaypointer()
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true,
// });

let changetext=document.querySelector("#changetext");
let thecrstext=document.querySelector("#thecrstext");
let bothtext=document.querySelector(".titlefont");
let rootvideo=document.querySelector("#rootvideo");
gsap.from(".titlefont ",{
    opacity:0,
    y:40,
    duration:1,
    stagger:.5
})
gsap.from(rootvideo,{
    opacity:0,
    top:40,
    duration:1,
    delay:1,
})
let upcheckup=document.querySelector("#upcheckup");
let smlbox=document.querySelectorAll(".smlbox");
smlbox.forEach((subsmlbox)=>{
    subsmlbox.addEventListener("mouseenter",()=>{
        gsap.to(subsmlbox,{
            height:"200px",
            duration:.2
        }) 
    })

    subsmlbox.addEventListener("mouseleave",()=>{
        gsap.to(".smlbox",{
            height:"37px",
        })
    });
})
let blackcursor=document.querySelector("#blcursor");

document.addEventListener("mousemove",(dets)=>{
    gsap.to(blackcursor,{
        x:dets.x-50,
        y:dets.y-50,
        scale:1,

    })
    
})
let navicon=document.querySelector("#navicon");
let subnavicon=document.querySelector("#subnavicon");
gsap.to(subnavicon,{
    y:"-84px",
    scrollTrigger:{
        trigger:"#subnavicon",
        scroller:"body",
        start:"50px",
        end:"50px",
        scrub:1
    }

})
gsap.from(subnavicon,{
    y:"-84px",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        end:"10px",
        // markers:true,
        scrub:0
    }

})
let part2svg=document.querySelector("#part2 svg");
gsap.from(part2svg,{
    opacity:0,
    duration:1,
    delay:1,
    scale:2,
    scrollTrigger:{
        trigger:part2svg,
        scroller:"body",
        scrub:2,
        end:"100px"
    }
})