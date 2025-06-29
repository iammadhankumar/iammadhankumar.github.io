import React from "react";

function About() {
  return (
    <>
      <article
        className="
          font-sans
          max-w-[650px]  /* ≈ blog article width */
          mx-auto
          px-4 sm:px-6 lg:px-0
          py-12
          leading-[1.6]
          text-left
          text-gray-800 dark:text-gray-100
          space-y-6              /* paragraph rhythm */
        "
        style={{
          fontSize: "clamp(1rem, 2.8vw, 1.125rem)", // 16‑18 px fluid
          hyphens: "auto",
          textWrap: "pretty",
        }}
      >
        {/* Top Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-600 pb-2">
          About Me
        </h1>

        {/* Intro */}
        <p>
          I’m a passionate Software Engineer with over 6 years of experience in
          designing, developing and deploying scalable web applications and
          backend systems. I specialize in high‑performance solutions using
          Java, Spring Boot, Hibernate and Angular, with hands‑on AWS
          deployments.
        </p>

        {/* =============== Professional Experience =============== */}
        <h2 className="section-h2">Professional Experience</h2>
        {[
          "Software Engineer with 6+ years of hands‑on experience building scalable web and mobile applications.",
          "Proficient in Core Java (Java SE), Collections, Multithreading and OOP.",
          "Experienced with Java EE (JDBC, JPA) and ORM frameworks.",
          "Strong background in Spring Boot / MVC, REST API design and integration.",
          "Skilled in JUnit testing, Maven builds and Log4j configuration.",
          "Worked with MySQL, PostgreSQL and MongoDB; produced ER diagrams and Swagger docs.",
          "Well‑versed in Angular; built reusable components and services.",
          "Self‑motivated, quick to learn and enjoy team collaboration.",
        ].map((t) => (
          <p key={t}>{t}</p>
        ))}

        {/* =============== Technical Skills =============== */}
        <h2 className="section-h2">Technical Skills</h2>
        <Skill label="Languages" value="Java, Python, JavaScript, TypeScript" />
        <Skill
          label="Frameworks"
          value="Spring Boot, Hibernate, Angular, Flask"
        />
        <Skill
          label="Databases"
          value="MySQL, PostgreSQL, Microsoft SQL, MongoDB"
        />
        <Skill label="Cloud" value="AWS (EC2, S3, Lambda, RDS)" />
        <Skill label="Tools" value="Git, Jenkins, Postman, Docker" />
        <Skill label="Build & Test" value="Maven, JUnit" />
        <Skill label="Servers" value="Apache Tomcat" />

        {/* =============== Soft Skills =============== */}
        <h2 className="section-h2">Soft Skills</h2>
        <Skill
          label="Problem‑Solving"
          value="Enjoy breaking down complex challenges into simple, reliable solutions."
        />
        <Skill
          label="Team Collaboration"
          value="Believe great results come from strong teamwork."
        />
        <Skill
          label="Communication"
          value="Clear, concise and open communicator."
        />
        <Skill
          label="Adaptability"
          value="Quick to embrace new tools and technologies."
        />

        {/* =============== Education =============== */}
        <h2 className="section-h2">Education</h2>
        <p>
          Bachelor of Engineering in Computer Science <br />
          Graduated – 2018
        </p>

        {/* =============== My Approach =============== */}
        <h2 className="section-h2">My Approach</h2>
        <p>
          I focus on clean, maintainable code with attention to clarity,
          performance and teamwork. Continuous learning and problem‑solving are
          core to my work.
        </p>

        {/* =============== Hobbies =============== */}
        <h2 className="section-h2">Hobbies</h2>
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Watching movies</li>
          <li>Traveling and nature walks</li>
          <li>Casual gaming</li>
          <li>Surfing the web</li>
          <li>Reading tech blogs</li>
          <li>Solving coding challenges</li>
        </ul>
      </article>

      {/* ------- Scoped Heading Styles ------- */}
      <style>{`
        .section-h2 {
          font-size: 1.25rem;            /* ≈20 px on phones */
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        @media (min-width: 640px)  { .section-h2 { font-size: 1.35rem; } }
        @media (min-width: 768px)  { .section-h2 { font-size: 1.5rem;  } }
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
