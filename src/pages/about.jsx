import React from "react";

/**
 * Centered “About” section with Proper‑style alignment
 * • Column is centred (`mx-auto`) and capped at 3 xl for readability
 * • Left‑aligned on phones, justified from ≥ 768 px (`md:text-justify`)
 * • Tight line‑height (`leading-normal`, ≈ 1.5)
 * • Moderate paragraph rhythm (`space-y-4`)
 * • No sidebar classes—use your existing layout to handle sidebar spacing
 */
function About() {
  return (
    <article
      className="
        font-sans leading-normal
        max-w-3xl mx-auto                 /* centred column */
        px-4 sm:px-5 md:px-6 lg:px-8
        py-12
      "
    >
      {/* ───── Heading ───── */}
      <h1 className="text-balance text-3xl md:text-4xl font-semibold mb-6 border-b-2 border-gray-300 dark:border-gray-600 pb-2">
        About Me
      </h1>

      {/* ───── Body: left on mobile, justify ≥ md ───── */}
      <section className="text-left md:text-justify space-y-4">

        <p>
          I’m a passionate Software Engineer with over 6 years of experience in designing, developing, and deploying scalable web applications and backend systems. I specialize in building high performance solutions using Java, Spring Boot, Hibernate, and Angular, along with hands-on experience in cloud-based deployments on AWS.
        </p>

        {/* ─── Professional Experience ─── */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
          Professional Experience
        </h2>

        <p>
          Software Engineer with over 6 years of hands-on experience in the design, development, and deployment of scalable web and mobile applications. Adept in both front-end and back-end technologies, with a strong foundation in Java and modern web frameworks.
        </p>
        <p>Proficient in Core Java (Java SE) with solid understanding of Collections, Multithreading, and Object-Oriented Programming concepts.</p>
        <p>Experienced in Java EE technologies including JDBC, JPA, and ORM frameworks.</p>
        <p>Strong expertise in developing applications using Spring Boot and Spring MVC frameworks.</p>
        <p>Hands-on experience with RESTful Web Services development and integration.</p>
        <p>Skilled in JUnit for unit testing and ensuring code reliability.</p>
        <p>Familiar with Maven for build management and Log4j for logging configurations.</p>
        <p>Proficient in working with databases such as MySQL, PostgreSQL, and MongoDB, with strong capabilities in designing, implementing, and managing relational and non-relational databases efficiently.</p>
        <p>Skilled in designing and maintaining technical documentation, such as Entity-Relationship diagrams and Swagger API.</p>
        <p>Well-versed in Angular, with practical knowledge of creating reusable components, services, and working with commonly used modules.</p>
        <p>Highly self-motivated with a strong work ethic and the ability to quickly grasp and adapt to new technologies.</p>

        {/* ─── Technical Skills ─── */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
          Technical Skills
        </h2>
        <div className="space-y-2">
          <div>
            <p className="font-semibold">Languages:</p>
            <p>Java, Python, JavaScript, TypeScript</p>
          </div>
          <div>
            <p className="font-semibold">Frameworks:</p>
            <p>Spring Boot, Hibernate, Servlet, Angular, Python-Flask</p>
          </div>
          <div>
            <p className="font-semibold">Databases:</p>
            <p>MySQL, PostgreSQL, MicrosoftSQL, MongoDB</p>
          </div>
          <div>
            <p className="font-semibold">Cloud:</p>
            <p>AWS (EC2, S3, Lambda, RDS)</p>
          </div>
          <div>
            <p className="font-semibold">Tools & Platforms:</p>
            <p>Git, Jenkins, Postman, Docker</p>
          </div>
          <div>
            <p className="font-semibold">Webservices:</p>
            <p>Rest API</p>
          </div>
          <div>
            <p className="font-semibold">Build Tools:</p>
            <p>Maven</p>
          </div>
          <div>
            <p className="font-semibold">Testing:</p>
            <p>Junit</p>
          </div>
          <div>
            <p className="font-semibold">Application Servers / Middleware:</p>
            <p>Apache Tomcat</p>
          </div>
        </div>

        {/* ─── Soft Skills ─── */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
          Soft Skills
        </h2>
        <div className="space-y-2">
          <div>
            <p className="font-semibold">Problem‑Solving:</p>
            <p>I enjoy breaking down complex problems and finding simple, effective solutions.</p>
          </div>
          <div>
            <p className="font-semibold">Team Collaboration:</p>
            <p>I work well with others and believe that the best results come from strong teamwork and shared goals.</p>
          </div>
          <div>
            <p className="font-semibold">Communication:</p>
            <p>I'm comfortable expressing ideas clearly, whether in writing or conversation, and I value open, honest communication.</p>
          </div>
          <div>
            <p className="font-semibold">Adaptability:</p>
            <p>I'm comfortable adapting to new tools and technologies and enjoy finding smarter ways to work.</p>
          </div>
        </div>

        {/* ─── Education ─── */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
          Education
        </h2>
        <p>
          Bachelor of Engineering in Computer Science <br />
          Graduated - 2018
        </p>

        {/* ─── My Approach ─── */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
          My Approach
        </h2>
        <p>
          I focus on writing clean, maintainable code with attention to clarity, performance, and teamwork. I'm committed to continuous learning and enjoy solving complex problems while delivering meaningful outcomes.
        </p>

        {/* ─── Hobbies ─── */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
          Hobbies
        </h2>
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Watching movies</li>
          <li>Traveling and nature walks</li>
          <li>Playing casual games</li>
          <li>Surfing Internet</li>
          <li>Reading blogs</li>
          <li>Problem solving and coding challenges</li>
        </ul>
      </section>
    </article>
  );
}

export default About;
