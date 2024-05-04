
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    // This animation scales and rotates the element with id "box" on page1.
    gsap.from("#page1 #box", {
        scale: 0, // Start with a scale of 0 (hidden)
        rotate: 360, // Rotate the element by 360 degrees
        delay: 1, // Wait for 1 second before starting the animation
        duration: 2 // Animation duration is 2 seconds
    });

    // This animation scales and rotates the element with id "box" on page2.
    gsap.from("#page2 #box", {
        scale: 0, // Start with a scale of 0 (hidden)
        rotate: 360, // Rotate the element by 360 degrees
        delay: 1, // Wait for 1 second before starting the animation
        duration: 2, // Animation duration is 2 seconds
        scrollTrigger: {
            trigger: "#page2 #box", // The trigger element for this animation
            scroller: "body", // The scrolling container (body in this case)
            markers: true, // Show markers to visualize the trigger
            start: "top 60%" // Start the animation when the trigger is 60% from the top of the viewport
        }
    });

    // This animation scales and rotates the element with id "box" on page3.
    gsap.from("#page3 #box", {
        scale: 0, // Start with a scale of 0 (hidden)
        rotate: 360, // Rotate the element by 360 degrees
        delay: 1, // Wait for 1 second before starting the animation
        duration: 2 // Animation duration is 2 seconds
    });

    // This animation fades in and moves horizontally the h1 element on page3.
    gsap.from("#page3 h1", {
        opacity: "0", // Start with opacity 0 (hidden)
        rotate:360, // Move the element 500px to the right
        delay: 1, // Wait for 1 second before starting the animation
        scrollTrigger: {
            trigger: "#page3 h1", // The trigger element for this animation
            scroller: "body", // The scrolling container (body in this case)
            markers: true, // Show markers to visualize the trigger
            start: "top 50%", // Start the animation when the trigger is 50% from the top of the viewport
            scrub: 2, // Smoothly animate the property changes while scrolling
            // pin: true // Pin the element during the animation
        }
    });

    gsap.to("#page4 h1", {
        transform:"translateX(-100%)",
        scrollTrigger:{
            trigger:"#page4",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true
        }
    });

});
