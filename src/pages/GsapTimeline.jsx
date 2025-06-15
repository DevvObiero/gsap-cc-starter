
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  // TODO: Implement the gsap timeline
const timeline = gsap.timeline({ repeat: -1, yoyo: true });
  useGSAP(() => {
    const box = document.getElementById("yellow-box");

    // Animate the box to move to the right and change color
    timeline.to(box, {
      x: 30, // Move 300 pixels to the right
      backgroundColor: "#ff0000", // Change color to red
      duration: 2, // Animation duration in seconds
      ease: "elastic",
    });
    timeline.to(box, {
      x: 0, // Move back to the original position
      backgroundColor: "#ffff00", // Change color back to yellow
      duration: 2, // Animation duration in seconds
      ease: "elastic",
    });
    timeline.to(box, {
      rotation: 360, // Rotate the box 360 degrees
      duration: 2, // Animation duration in seconds
      ease: "elastic",
    });
  }, []);


  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={() => {
          if(timeline.isActive()) {
            timeline.pause();
          } else {  
            timeline.play();
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
