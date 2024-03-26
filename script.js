function ljs() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// ljs()
function mode() {
    var slider = document.querySelector("#slider")
    let icon = document.querySelector("#icon")
    let mode = "hide"
    icon.addEventListener("click", function () {
        console.log("aaa")
        if (mode == "hide") {
            slider.style.display = "block"
            mode = "show"
        }
        else {
            slider.style.display = "none"
            mode = "hide"
        }
    })
}
function heart() {
    var heart = [document.querySelector("#heart"), document.querySelector("#heart2"), document.querySelector("#heart3"), document.querySelector("#heart4")]
    var curr = "light"
    heart.forEach(function (el) {
        el.addEventListener("click", function () {
            if (curr == "light") {
                el.style.color = "red"
                curr = "red"
                console.log("light")
            }
            else {
                curr = "light"
                console.log("red")
                el.style.color = "black"
            }
        })
    })
}
heart()
function about() {
    let edu = document.querySelector("#education")
    let aboutme = document.querySelector("#aboutme")
    let about = [document.querySelector(".about1"), document.querySelector(".about2")]
    let education = [document.querySelector(".education1"), document.querySelector(".education2")]
    let curr = "about"
    edu.addEventListener("click", function () {
        if (curr == "about") {
            aboutme.style.background = "white"
            edu.style.backgroundColor = "blue"
            edu.style.color = "white"
            aboutme.style.color = "black"
            about.forEach(function (val) {
                val.style.display = "none"
            })
            education.forEach(function (val) {
                val.style.display = "block"
            })
        }

    })
    aboutme.addEventListener("click", function () {
        if (curr == "about") {
            aboutme.style.background = "blue"
            edu.style.backgroundColor = "white"
            aboutme.style.color = "white"
            edu.style.color = "black"
        }
        about.forEach(function (val) {
            val.style.display = "block"
        })
        education.forEach(function (val) {
            val.style.display = "none"
        })
    })

}
about()

var tl = gsap.timeline()

// tl.from("#nav", {
//     y: -100,
//     duration: .5,
//     delay: .2,

// })

tl.from("#aman, .navbar-toggler", {
    scale: 0,
    opacity: 1
})
tl.from("#front h5,#front h1,#front h5,#resume,#project", {
    y: 1000,
    stagger: .2,
    duration: 1,
    // delay:.2,
    opacity: 1,

 })

tl.from("#page2 .small,#page2 .big, #page2 .ser", {
    y: 200,
    duration: 1,
    // delay:2,
    // opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:" .small, .big, #page2 .ser",
        // markers:true,
        scrub:true,
        start:"top 100%",
        end:"top 30%",
        scrub:1,
    }
})
tl.from("#page3 .small,#page3 .bigs ,#page3 .p",{
    y: 200,
    duration: 5,
    delay:.2,
    // stagger:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".small, .big,#page3 .p",
        // markers:true,

        // pin:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#page4 .small,#page4 .big,#aboutme, #education, .about1,.about2,.education,.education2", {
    y: 200,
    duration: .1,
    // delay:2,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4 .small,#page4 .big, #page4 #aboutme, #education, #page4 , .about1,.about2,.education,.education2",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true,
    }
})
tl.from("#page5 .small,#page5 .big ,#page5 .skill",{
    y: 200,
    duration: .1,
    // delay:.2,
    // stagger:1,
    opacity:.5,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page5 .small,#page5 .big ,#page5 .skill",
        // markers:true,
        // pin:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})
