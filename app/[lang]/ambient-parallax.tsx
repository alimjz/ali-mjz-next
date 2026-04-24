"use client";

import { useEffect, useRef } from "react";

export function AmbientParallax() {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const y = window.scrollY;
      document.documentElement.style.setProperty("--parallax-y", `${y}px`);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={shellRef} className="ambient-parallax">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="ambient ambient-four" />
      <div className="bubble-cluster bubble-cluster-left" />
      <div className="bubble-cluster bubble-cluster-upper" />
      <div className="bubble-cluster bubble-cluster-mid" />
      <div className="bubble-cluster bubble-cluster-right" />
      <div className="bubble-cluster bubble-cluster-lower" />
    </div>
  );
}
