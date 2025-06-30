import React from "react";

function About() {
  return (
    <>
      <article
        className="
          font-sans
          w-full max-w-[650px]       /* Google‑blog text column */
          mx-auto
          px-4 sm:px-6 lg:px-0
          py-12
          leading-[1.6]
          text-left
          text-gray-800 dark:text-gray-100
          space-y-6                 /* 24 px paragraph rhythm */
          overflow-x-hidden
        "
        style={{
          fontSize: "clamp(1rem,2.8vw,1.125rem)", // body 16–18 px
          textWrap: "pretty",
          hyphens: "none",                        // ← no word breaks
        }}
      >
        {/* ─── Heading ─── */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-600 pb-2">
          About Me
        </h1>

        {/* ─── Intro ─── */}
        <p>
          I’m a passionate Software Engineer with over 6+ years of experience in designing, developing, and deploying scalable web applications and backend systems. I specialize in building high‑performance solutions using Java, Spring Boot, Hibernate, and Angular, along with hands‑on experience in cloud‑based deployments on AWS.
        </p>

        {/* ─── Professional Experience ─── */}
        <h2 className="section-h2">Professional Experience</h2>
        <p>Software Engineer with hands-on experience in designing, developing, and deploying scalable web and mobile applications. Proficient in both frontend and backend technologies with deep knowledge of Java and modern web frameworks.</p>
        <p>Proficient in Core Java with solid understanding of Collections, Multithreading, and Object‑Oriented Programming concepts.</p>
        <p>Experienced in Java technologies including JDBC, JPA, and ORM frameworks.</p>
        <p>Strong expertise in developing applications using Spring Boot and Spring MVC frameworks.</p>
        <p>Hands‑on experience with RESTful Web Services development and integration.</p>
        <p>Skilled in using JUnit to create effective unit tests that ensure code reliability and quality.</p>
        <p>Familiar with Maven for build management and Log4j for logging configurations.</p>
        <p>Worked on modernizing legacy applications by migrating to newer frameworks and optimizing system performance.</p>
        <p>Well-versed in implementing authentication and authorization using Spring Security and JWT.</p>
        <p>Experienced in building and managing backend services on AWS using EC2 for running applications, S3 for storing files, and RDS for handling databases.</p>
        <p>Proficient in working with databases such as MySQL, PostgreSQL, and MongoDB with experience in designing and managing different types of databases.</p>
        <p>Skilled in designing and maintaining technical documentation such as Entity‑Relationship diagrams and Swagger API.</p>
        <p>Well‑versed in Angular with practical knowledge of creating reusable components, services, and working with commonly used modules.</p>
        <p>Highly self‑motivated with a strong work ethic and the ability to quickly grasp and adapt to new technologies.</p>

        {/* ─── Technical Skills ─── */}
        <h2 className="section-h2">Technical Skills</h2>
        <div className="space-y-2">
          <Skill label="Languages" value="Java, Python, JavaScript, TypeScript" />
          <Skill label="Frameworks" value="Spring Boot, Hibernate, Servlet, Angular, React(Moderate), Python‑Flask" />
          <Skill label="Databases" value="MySQL, PostgreSQL, Microsoft SQL, MongoDB" />
          <Skill label="Tools & Platforms" value="Git, Jenkins, Postman, Docker" />
          <Skill label="Application Servers / Middleware" value="Apache Tomcat" />
          <Skill label="Cloud" value="AWS (EC2, S3, Lambda, RDS)" />
          <Skill label="Webservices" value="REST API" />
          <Skill label="Build Tools" value="Maven" />
          <Skill label="Testing" value="JUnit" />
        </div>

        {/* ─── Soft Skills ─── */}
        <h2 className="section-h2">Soft Skills</h2>
        <div className="space-y-2">
          <Skill label="Problem‑Solving" value="I enjoy breaking down complex problems and finding simple, effective solutions." />
          <Skill label="Team Collaboration" value="I work well with others and believe that the best results come from strong teamwork and shared goals." />
          <Skill label="Communication" value="I'm comfortable expressing ideas clearly, whether in writing or conversation, and I value open, honest communication." />
          <Skill label="Adaptability" value="I'm comfortable adapting to new tools and technologies and enjoy finding smarter ways to work." />
        </div>

        {/* ─── Education ─── */}
        <h2 className="section-h2">Education</h2>
        <p>
          Bachelor of Engineering in Computer Science <br />
          Graduated – 2018
        </p>

        {/* ─── My Approach ─── */}
        <h2 className="section-h2">My Approach</h2>
        <p>I focus on writing clean, maintainable code with attention to clarity, performance, and teamwork. I'm committed to continuous learning and enjoy solving complex problems while delivering meaningful outcomes.</p>

        {/* ─── Hobbies ─── */}
        <h2 className="section-h2">Hobbies</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Watching movies</li>
          <li>Traveling and nature walks</li>
          <li>Playing casual games</li>
          <li>Surfing Internet</li>
          <li>Reading blogs</li>
          <li>Problem solving and coding challenges</li>
        </ul>
      </article>

      {/* Scoped heading sizes */}
      <style>{`
        .section-h2 {
          font-size: 1.25rem;          /* ≈20 px on phones */
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        @media (min-width: 640px) { .section-h2 { font-size: 1.35rem; } }
        @media (min-width: 768px) { .section-h2 { font-size: 1.5rem; } }
      `}</style>
    </>
  );
}

/* Reusable two‑line skill row */
const Skill = ({ label, value }) => (
  <p>
    <span className="font-semibold">{label}:</span> {value}
  </p>
);

export default About;
