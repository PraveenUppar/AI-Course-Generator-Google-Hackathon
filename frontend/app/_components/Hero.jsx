import React from "react";

function Hero() {
  return (
    <section className="lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-10">
        <div className="mx-auto text-center">
          <h1 className="text-5xl text-indigo-600 font-bold text-gray-900 ">
            AI Course Generator
          </h1>
          <br></br>
          <h2 className="text-5xl font-bold text-gray-900 ">
            Custom Learning Paths Powered by AI
          </h2>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Unlock personalized education with AI-driven course creation. Tailor
            your learning journey to fit your unique goals and pace
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
