import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <article
        className="
          font-sans
          w-full max-w-[650px]    /* never wider than 650px, but shrinks with viewport */
          mx-auto
          px-4 sm:px-6 lg:px-0
          py-12
          leading-[1.6]
          text-left
          text-gray-800 dark:text-gray-100
          space-y-6
          overflow-x-hidden        /* safety: block any accidental overflow */
        "
        style={{
          fontSize: "clamp(1rem, 2.8vw, 1.125rem)", // 16‑18 px fluid
          textWrap: "pretty",
          hyphens: "auto",
        }}
      >
        {/* ——— Headings ——— */}
        <h1
          className="
            home-h1
            font-extrabold
            text-balance
            break-words whitespace-normal  /* allow wrapping */
          "
        >
          I'm Madhan Kumar
        </h1>

        <h2
          className="
            home-h2
            font-semibold
            text-balance
            break-words
            whitespace-normal
          "
        >
          Software Engineer
        </h2>

        {/* ——— Intro Copy ——— */}
        <p>
          I am a results‑driven software engineer with over six years of
          experience designing and developing scalable web and mobile
          applications while revitalizing legacy enterprise systems. My
          expertise lies in Java, Spring Boot, Angular and AWS. I take pride in
          delivering clean, efficient and dependable solutions that meet
          business needs.
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
          I am always eager to embrace new technologies, optimise systems and
          contribute to projects that matter. Let’s connect and collaborate to
          create exceptional results.
        </p>

        {/* ——— CTA ——— */}
        <Link
          to="/about"
          className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
        >
          See more about me →
        </Link>
      </article>

      {/* ——— Scoped Responsive Heading Sizes ——— */}
      <style>{`
        /* Baseline (≤359px) */
        .home-h1 { font-size: 1.875rem; }   /* 30px */
        .home-h2 { font-size: 1.125rem; }   /* 18px */

        /* 360‑479px */
        @media (min-width: 360px) {
          .home-h1 { font-size: 2.125rem; }  /* ~34px */
          .home-h2 { font-size: 1.25rem; }   /* 20px */
        }

        /* 480‑639px */
        @media (min-width: 480px) {
          .home-h1 { font-size: 2.5rem; }    /* 40px */
          .home-h2 { font-size: 1.375rem; }  /* 22px */
        }

        /* 640‑767px */
        @media (min-width: 640px) {
          .home-h1 { font-size: 2.875rem; }  /* 46px */
          .home-h2 { font-size: 1.5rem; }    /* 24px */
        }

        /* ≥768px */
        @media (min-width: 768px) {
          .home-h1 { font-size: 3.25rem; }   /* 52px */
          .home-h2 { font-size: 1.625rem; }  /* 26px */
        }
      `}</style>
    </>
  );
}
