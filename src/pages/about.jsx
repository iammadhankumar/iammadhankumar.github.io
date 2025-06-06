import React from 'react';

function About() {
  return (
    <div className="p-6 sm:p-8 md:p-10 max-w-3xl mx-auto font-sans leading-relaxed text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 dark:border-gray-600 pb-2">
        About Me
      </h1>

      <p className="mb-6">
        I’m a passionate Software Engineer with over 6 years of experience in designing, developing, and deploying scalable web applications and backend systems. I specialize in building high-performance solutions using Java, Spring Boot, Hibernate, and Angular, along with hands-on experience in cloud-based deployments on AWS.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Professional Experience
      </h2>
      <p className="mb-4">
        Over 6 years of experience as a Full-Stack Java Developer, with strong exposure to the development and implementation of web and mobile applications.
      </p>
      <p className="mb-4">
        Proficient in Java SE with deep knowledge of Collections, Multithreading, and Core Java concepts. Experienced in Java technologies such as JDBC, JPA, and ORM.
      </p>
      <p className="mb-4">
        Skilled in developing both microservices and monolithic applications using Spring Boot and Hibernate, with a focus on building secure RESTful APIs.
      </p>
      <p className="mb-4">
        Experienced in working with MySQL, PostgreSQL, and MongoDB for data management.
      </p>
      <p className="mb-4">
        Strong understanding of Maven for managing dependencies and project lifecycles.
      </p>
      <p className="mb-4">
        Proficient in using Log4J for application logging and monitoring.
      </p>
      <p className="mb-4">
        Familiar with project documentation practices including E-R diagrams and Swagger API documentation.
      </p>
      <p className="mb-4">
        Experienced in Angular, with a focus on integrating REST APIs and improving frontend functionality through dynamic and responsive UI development.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Technical Skills
      </h2>
      <div className="mb-6 space-y-4">
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Languages:</p>
          <p>Java, Python, JavaScript, TypeScript</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Frameworks:</p>
          <p>Spring Boot, Flask, Angular, Hibernate</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Tools & Platforms:</p>
          <p>Git, Docker, Jenkins, Postman</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Cloud:</p>
          <p>AWS (EC2, S3, Lambda)</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Databases:</p>
          <p>MySQL, PostgreSQL, MongoDB</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Education
      </h2>
      <p className="mb-6">
        Bachelor of Engineering in Computer Science <br />
        Graduated in 2018
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        My Approach
      </h2>
      <p>
        I focus on writing clean, maintainable code with attention to clarity, performance, and teamwork. I'm committed to continuous learning and enjoy solving complex problems while delivering meaningful outcomes.
      </p>
    </div>
  );
}

export default About;
