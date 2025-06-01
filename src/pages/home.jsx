import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 font-sans leading-relaxed">
      <h1 className="text-5xl font-extrabold mb-6">I'm Madhan Kumar</h1>
      <h2 className="text-3xl font-semibold mb-10">
        Software Engineer | Full-Stack Developer
      </h2>

      <p className="mb-6">
       I’m a results-driven software engineer with over 6+ years of experience in building scalable web and mobile apps and improving old enterprise systems.
       I work mainly with Java, Spring Boot, Angular, and AWS, and I enjoy creating clean, efficient, and reliable applications.
      </p>

      <p className="mb-6">
       I am fuelled by the passion of learning and understanding. I believe that "Learning is just as entertaining as entertainment, but with long term benefits."
      </p>

      <p className="mb-8">
        I’m always eager to learn, explore new technologies, and contribute to
        impactful projects. Let’s connect and create something meaningful.
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
