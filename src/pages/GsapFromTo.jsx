import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method

  useGSAP(() => {
      const box = document.getElementById("red-box");
  
      // Animate the box to move to the right and change color
    gsap.fromTo(box, {
        x: 0, // Start position at 0 pixels
        backgroundColor: "#00ff00", // Start color green
        duration: 2, // Animation duration in seconds
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Make the animation repeat indefinitely
        rotation: 0, // Start rotation at 0 degrees
        ease: 'elastic'
  
      }, {
      // To state
        x: 300, // Move 300 pixels to the right
        borderRadius: "100%", // Change border radius to make it circular
        backgroundColor: "#ff0000", // Change color to red
        rotation: 360, // Rotate the box 360 degrees
  duration: 2, // Animation duration in seconds
      });
    }, []);
  

  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
