import React from "react";

function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://imgs.search.brave.com/QcmZr1lXZAKarMRrHt-SGOW4wS1_rWFBCpR5ZtpNimY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTM1MDQ5NC92ZWN0/b3IvYWJzdHJhY3Qt/bWVjaGFuaWNhbC1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/WlFQN3dxaDNlejBw/ejRhV2Vwek1ZUnVC/NjVoR2VjbkpoM3NW/WnZ3TWNnPQ)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Developer's Student Club
            IET-DAVV, Indore</h1>
            <p className="mb-5">GDSC IET DAVV is a part of dynamic community where students from various
backgrounds come together to explore the latest in technology, learn about
Google's tools and platforms, and collaborate on innovative projects. GDSC is a
place to grow as a developer, starting from a beginner developer to an advanced
developer. It's not always about "programming" but also about connecting, learning
together and growing together.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
