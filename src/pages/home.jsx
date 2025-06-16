
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 font-sans leading-relaxed">
      <h1 className="text-5xl font-extrabold mb-6">I'm Madhan Kumar</h1>
      <h2 className="text-3xl font-semibold mb-10">
        Software Engineer
      </h2>

      <p className="mb-6">
        I am a results-driven software engineer with over six years of experience designing and developing scalable web and mobile applications while revitalizing legacy enterprise systems. My expertise lies in Java, Spring Boot, Angular, and AWS. I take pride in delivering clean, efficient, and dependable solutions that meet business needs.
      </p>

      <p className="mb-6">
         Beyond coding, I am committed to creating meaningful impact by solving complex challenges and transforming ideas into practical technology.      
      </p>

      <p className="mb-6">
         I firmly believe that learning is not merely a task but an enjoyable journey. For me, it is as engaging as any form of entertainment, yet offers lasting benefits.      
      </p>

      <p className="mb-8">
        I am always eager to embrace new technologies, optimize systems, and contribute to projects that matter. Let’s connect and collaborate to create exceptional results.
      </p>

      <Link
        to="/about"
        className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-200"
      >
        See more about me →
      </Link>
    </div>
  );
}
