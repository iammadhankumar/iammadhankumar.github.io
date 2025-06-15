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
        Software Engineer with over 6 years of hands-on experience in the design, development, and deployment of scalable web and mobile applications. Adept in both front-end and back-end technologies, with a strong foundation in Java and modern web frameworks.      </p>
      <p className="mb-4">
       Proficient in Core Java (Java SE) with solid understanding of Collections, Multithreading, and Object-Oriented Programming concepts.
      </p>
      <p className="mb-4">
       Experienced in Java EE technologies including JDBC, JPA, and ORM frameworks.
      </p>
      <p className="mb-4">
        Strong expertise in developing applications using Spring Boot and Spring MVC frameworks.
      </p>
      <p className="mb-4">
        Hands-on experience with RESTful Web Services development and integration.
      </p>
      <p className="mb-4">
        Skilled in JUnit for unit testing and ensuring code reliability.
      </p>
      <p className="mb-4">
        Familiar with Maven for build management and Log4j for logging configurations.
      </p>
      <p className="mb-4">
        Proficient in working with databases such as MySQL, PostgreSQL, and MongoDB, with strong capabilities in designing, implementing, and managing relational and non-relational databases efficiently.
      </p>
      <p className="mb-4">
        Skilled in designing and maintaining technical documentation, such as Entity-Relationship diagrams and Swagger API
      </p>
      <p className="mb-4">
        Well-versed in Angular, with practical knowledge of creating reusable components, services, and working with commonly used modules.
      </p>
      <p className="mb-4">
        Highly self-motivated with a strong work ethic and the ability to quickly grasp and adapt to new technologies.
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
          <p>Spring Boot, Hibernate, Servlet, Angular, Python-Flask</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Databases:</p>
          <p>MySQL, PostgreSQL, MicrosoftSQL, MongoDB</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Cloud:</p>
          <p>AWS (EC2, S3, Lambda, RDS)</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Tools & Platforms:</p>
          <p>Git, Jenkins, Postman, Docker</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Webservices:</p>
          <p>Rest API</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Build Tools:</p>
          <p>Maven</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Testing:</p>
          <p>Junit</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Application Servers / Middleware:</p>
          <p>Apache Tomcat</p>
        </div>
      </div>

    <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Soft Skills
    </h2>
    <div className="mb-6 space-y-4">
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-200">Problem-Solving:</p>
        <p>I enjoy breaking down complex problems and finding simple, effective solutions.</p>
      </div>
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-200">Team Collaboration:</p>
        <p>I work well with others and believe that the best results come from strong teamwork and shared goals.</p>
      </div>
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-200">Communication:</p>
        <p>I'm comfortable expressing ideas clearly, whether in writing or conversation, and I value open, honest communication.</p>
      </div>
       <div>
        <p className="font-semibold text-gray-800 dark:text-gray-200">Adaptability:</p>
        <p>I'm comfortable adapting to new tools and technologies and enjoy finding smarter ways to work.</p>
      </div>
    </div>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        Education
      </h2>
      <p className="mb-6">
        Bachelor of Engineering in Computer Science <br />
        Graduated - 2018
      </p>

      

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">
        My Approach
      </h2>
      <p>
        I focus on writing clean, maintainable code with attention to clarity, performance, and teamwork. I'm committed to continuous learning and enjoy solving complex problems while delivering meaningful outcomes.
      </p>
      
      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800 dark:text-gray-200">Hobbies:</h2>
      <ul className="list-disc list-outside pl-5 space-y-1">
        <li>Watching movies</li>
        <li>Traveling and nature walks</li>
        <li>Playing casual games</li>
        <li>Surfing Internet</li>
        <li>Reading blogs</li>
        <li>Problem solving and coding challenges</li>
       </ul>
    </div>
  );
}

export default About;
