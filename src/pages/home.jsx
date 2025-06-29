import React from "react";
import { Link } from "react-router-dom";

/**
 * Center‑aligned “Home” intro with the proper style alignment
 * • Centred column (`mx-auto`) capped at 3 xl
 * • Tight line height (`leading-normal`)
 * • Left‑aligned on phones, justified ≥ 768 px
 */
export default function Home() {
  return (
    <article
      className="
        font-sans leading-normal
        max-w-3xl mx-auto           /* centred column */
        px-4 sm:px-5 md:px-6 lg:px-8
        py-12
        text-left md:text-justify
        space-y-6                 /* consistent paragraph rhythm */
      "
    >
      <h1 className="text-balance text-5xl font-extrabold">I'm Madhan Kumar</h1>
      <h2 className="text-balance text-3xl font-semibold">Software Engineer</h2>

      <p>
        I am a results‑driven software engineer with over six years of experience
        designing and developing scalable web and mobile applications while
        revitalizing legacy enterprise systems. My expertise lies in Java,
        Spring Boot, Angular, and AWS. I take pride in delivering clean,
        efficient, and dependable solutions that meet business needs.
      </p>

      <p>
        Beyond coding, I am committed to creating meaningful impact by solving
        complex challenges and transforming ideas into practical technology.
      </p>

      <p>
        I firmly believe that learning is not merely a task but an enjoyable
        journey. For me, it is as engaging as any form of entertainment, yet
        offers lasting benefits.
      </p>

      <p>
        I am always eager to embrace new technologies, optimize systems, and
        contribute to projects that matter. Let’s connect and collaborate to
        create exceptional results.
      </p>

      <Link
        to="/about"
        className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-200"
      >
        See more about me →
      </Link>
    </article>
  );
}
