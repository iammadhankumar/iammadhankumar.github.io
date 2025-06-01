import React from 'react';

function About() {
  return (
    <div className="p-10 max-w-3xl mx-auto font-sans leading-relaxed text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 dark:border-gray-600 pb-2">
        About Me
      </h1>

      <p className="mb-6">
        I’m a dedicated Software Engineer with over 6+ years of experience in architecting, developing, and deploying scalable web applications and backend services. My expertise lies in building robust, high-performance systems using Java, Spring Boot, Hibernate, and Angular, complemented by hands-on experience in cloud-native deployments on AWS.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Professional Experience
      </h2>
      <p className="mb-4">
       Having 6+ years of experience as a Full - Stack Java Developer with diversified exposure in, development and implementation of web and mobile applications.      
       </p>
      <p className="mb-4">
       Skilled in Java Standard Edition (Java SE), with a strong understanding of Collections, Multithreading, and Core Java concepts. Well-experienced in Java technologies like JDBC, JPA, and object-relational mapping (ORM).       
      </p>
      <p className="mb-4">
        Proficient in developing microservices and monolithic projects using Java Spring Boot, Hibernate, and implementing Restful services.
      </p>
      <p className="mb-4">
        Skilled in database technologies, particularly MySQL, Postgresql and Mongo DB.
      </p>
      <p className="mb-4">
         Extensive experience with the Maven build system, including managing complex project dependencies and lifecycle phases.
      </p>
       <p className="mb-4">
        Proficient in utilizing the Log4J framework for robust logging solutions, ensuring efficient application monitoring and debugging.
      </p>
       <p className="mb-4">
        Expertise in project documentation such as E-R Diagram, Swagger implementation.
      </p>
       <p className="mb-4">
        Experienced in Angular, with a focus on enhancing frontend functionality through API integration and facilitating seamless data communication between the frontend and backend. 
       </p>
      {/* <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Designed and developed REST APIs for enterprise-scale systems using Spring Boot and Hibernate.</li>
        <li>Built interactive, modular front-end interfaces with Angular.</li>
        <li>Implemented cloud-native features using AWS services such as EC2, S3, and Lambda.</li>
        <li>Worked with secure configuration strategies using Spring Cloud Config and Vault.</li>
        <li>Optimized application performance and system scalability through efficient code and architecture.</li>
      </ul> */}

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Technical Skills
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Languages:</strong> Java, Python, JavaScript, TypeScript</li>
        <li><strong>Frameworks:</strong> Spring Boot, Flask, Angular, Hibernate</li>
        <li><strong>Tools & Platforms:</strong> Git, Docker, Jenkins, Postman</li>
        <li><strong>Cloud:</strong> AWS (EC2, S3, Lambda)</li>
        <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
      </ul>

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
        I believe in writing clean, maintainable code with a strong emphasis on clarity, performance, and collaboration. I'm continuously learning and enjoy working on challenging projects that allow me to grow while delivering impactful results.
      </p>
    </div>
  );
}

export default About;
