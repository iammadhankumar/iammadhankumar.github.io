import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <article
        className="
          font-sans
          w-full max-w-[650px]          /* Google‑blog column */
          mx-auto
          px-4 sm:px-6 lg:px-0
          py-12
          leading-[1.6]
          text-left
          text-gray-800 dark:text-gray-100
          space-y-6                       /* 24 px paragraph rhythm */
          overflow-x-hidden
        "
        style={{
          fontSize: "clamp(1rem,2.8vw,1.125rem)", // body 16–18 px
          textWrap: "pretty",
          hyphens: "none",                        // match About page
        }}
      >
        {/* ────────── Header ────────── */}
        <header className="text-left">
          <p className="text-lg font-medium mb-3">
            Hey there&nbsp;
            <span role="img" aria-label="waving hand">👋</span>
          </p>

          <h1
            className="
              font-extrabold
              text-3xl sm:text-4xl md:text-5xl
              leading-tight
              tracking-tight
              mb-1                       /* small gap to subtitle */
              break-words
            "
          >
            I’m Madhan Kumar
          </h1>

          <h2
            className="
              font-bold
              text-xl sm:text-2xl md:text-3xl
              leading-snug
              tracking-tight
              mt-0                        /* flush under name */
              break-words
            "
          >
            Software Engineer
          </h2>
        </header>

        {/* ────────── Body ────────── */}
        <section className="space-y-6">
          <p>
            I am a results‑driven software engineer with over six years of
            experience designing and developing scalable web and mobile
            applications while revitalizing legacy enterprise systems. My
            expertise lies in Java, Spring Boot, Angular, and AWS. I take pride
            in delivering clean, efficient, and dependable solutions that meet
            business needs.
          </p>

          <p>
            Beyond coding, I am committed to creating meaningful impact by
            solving complex challenges and transforming ideas into practical
            technology.
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
        </section>

        {/* ────────── CTA ────────── */}
        <Link
          to="/about"
          className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
        >
          See more about me →
        </Link>
      </article>
    </>
  );
}
