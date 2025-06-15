import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method


  useGSAP(() => {
      const box = document.getElementById("green-box");
  
      // Animate the box to move to the right and change color
      gsap.to(box, {
        x: 300, // Move 300 pixels to the right
        backgroundColor: "#ff0000", // Change color to red
        duration: 2, // Animation duration in seconds
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Make the animation repeat indefinitely
        rotation: 360, // Rotate the box 360 degrees
        ease: 'elastic'
  
      });
    }, []);
  
  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
