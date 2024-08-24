import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { notFound } from "../../utils";

const NotFound = ({ message,color }) => {
  const textRef = useRef(null);
  const messageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "bounce.out" }
    );

    if (textRef.current) {
      const textArray = textRef.current.textContent.split("");
      textRef.current.innerHTML = textArray
        .map(el => `<span>${el}</span>`)
        .join("");

      gsap.fromTo(
        "#text span",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const animation = gsap.fromTo(
      "#text span",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out", repeat: -1, yoyo: true }
    );

    const interval = setInterval(() => {
      animation.play();
    }, 2000);

    return () => {
      clearInterval(interval);
      animation.kill();
    };
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-5 grid-rows-5">
      <div
        ref={messageRef}
        className="col-span-5 row-span-4 b flex items-center justify-center"
      >
        <img
          src={notFound}
          alt="Not Found"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="col-span-5 row-start-5  flex items-center justify-center">
        <p
          ref={textRef}
          className={`${color} text-center`}
          id="text"
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
