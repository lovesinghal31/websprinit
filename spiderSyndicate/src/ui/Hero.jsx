import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen w-full h-[75vh]"
        style={{
          backgroundImage:
            "url(https://i.gifer.com/embedded/download/PGnz.gif)",
            opacity: 0.9,
        }}
      >
        <div className="hero-overlay w-full"></div>
        <div className="hero-content text-neutral-content text-left w-full justify-end">
          <div className="max-w-md text-[#fefae0]">
            <h1 className="mb-5 text-3xl font-bold text-left">Developer's Group On Campus</h1>
            <h1 className="mb-5 text-3xl font-bold text-left">
            IET-DAVV, Indore</h1>
            <p className="mb-5">GDG OC IET DAVV is a part of dynamic community where students from various
backgrounds come together to explore the latest in technology, learn about
Google's tools and platforms, and collaborate on innovative projects. GDG oc is a
place to grow as a developer, starting from a beginner developer to an advanced
developer. It's not always about "programming" but also about connecting, learning
together and growing together.</p>
            <button className="btn btn-primary m-2 rounded-2xl"><Link to={'eventgallery'}>Event Gallery</Link></button>{/*margin*/}<button className="btn btn-primary m-2 rounded-2xl "><Link to={'eventgallery'}>Mentor</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
