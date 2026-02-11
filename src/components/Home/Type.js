import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend-Leaning Full Stack Engineer",
          "TypeScript · Node.js · AWS",
          "Building Scalable Production Systems",
          "Freelance Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
