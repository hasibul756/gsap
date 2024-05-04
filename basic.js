// GSAP TUTORIAL


// gsap.to() animates elements from current state to the specified state
// Syntax:
// gsap.to("element-selector",{key value pair})

// gsap.from() animates elements from specified state to current state
// Syntax:
// gsap.from("element-selector",{key value pair})

// Basic Animation

 // Basic Animation using GSAP

// Selecting the element with the ID "box1" for animation
gsap.to("#box1", {
    // Move the element 400 pixels to the right on the x-axis from its initial position
    x: 400,
    // Move the element 200 pixels down on the y-axis from its initial position
    y: 200,
    // Duration of the animation is set to 2 seconds
    duration: 2,
    // Delaying the start of the animation by 1 second
    delay: 1,
    // Rotate the element 360 degrees (one full rotation) during the animation
    rotate: 360,
    // Scale the element to 50% of its original size
    scale: 0.5,
    // Set the opacity of the element to 0.5 (50% transparent)
    opacity: 0.5,
    // Applying a "bounce" easing effect to the animation
    ease: "bounce",
    // Number of times the animation should repeat (2 times in this case)
    repeat: 2,
    // After each completion of the animation, reverse it back to its initial state
    yoyo: true
});


// Selecting the element with the ID "box2" for animation
gsap.from("#box2", {
    // Move the element 400 pixels to the right on the x-axis
    x: 400,
    // Move the element 200 pixels down on the y-axis
    y: 200,
    // Duration of the animation is set to 2 seconds
    duration: 2,
    // Delaying the start of the animation by 1 second
    delay: 1,
    // Rotate the element 360 degrees (one full rotation)
    rotate: 360,
    // Scale the element to 50% of its original size
    scale: 0.5,
    // Set the initial opacity of the element to 0.5 (semi-transparent)
    opacity: 0.5,
    // Applying a "back" easing effect to the animation
    ease: "back",
    // Repeat the animation infinitely (-1 means infinite repeat)
    repeat: -1,
    // When the animation completes, reverse it to its initial state and repeat
    yoyo: true
});



// Selecting all h1 elements on the page
gsap.from("h1", {
    // Initial opacity of the h1 elements is set to 0 (completely transparent)
    opacity: 0,
    // The elements will move 30 pixels down on the y-axis from their initial position
    y: 30,
    // The text color of the h1 elements will change to red
    color: "red",
    // The duration of the animation is set to 1 second
    duration: 1,
    // Delaying the start of the animation by 1 second
    delay: 1,
    // Staggering the animation of each h1 element by 0.3 seconds
    stagger: 0.3, // Use -1 for reverse staggering
})

// Create a timeline
var tl = gsap.timeline(); //Can be stored in a variable

// Add tweens (animations) to the timeline
tl.to("#box1", { x: 200, duration: 1 }); // Move box1 200 pixels to the right
tl.to("#box2", { y: 150, duration: 0.8, delay: 0.5 }); // Move box2 150 pixels down after 0.5 seconds
tl.to("#box3", { opacity: 0, duration: 1, delay: -0.2 }); // Fade out box3 with a slight overlap

// Play the timeline
tl.play();