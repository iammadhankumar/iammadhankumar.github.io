import React, {
  useId,
  useState,
  useRef,
  useLayoutEffect,
  memo,
} from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ---------- Reusable atoms ---------- */
const CardShell = memo(({ children, className = "" }) => (
  <article className={`flex flex-col rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/70 backdrop-blur-lg shadow-lg ${className}`}>
    {children}
  </article>
));

const Badge = memo(({ children }) => (
  <span className="inline-flex w-max self-start items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
    {children}
  </span>
));

const GhostBtn = memo(({ onClick, children, className = "", ...rest }) => (
  <button onClick={onClick} className={`inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline focus:outline-none ${className}`} {...rest}>
    {children}
  </button>
));

/* ---------- Project data ---------- */
const projects = [
  {
    id: 1,
    name: "Pharmabox",
    domain: "E‑Commerce",
    techStack: ["Spring Boot", "JavaScript", "Hibernate", "MySQL", "Braintree SDK"],
    description:
      "Pharmabox is a US‑based e‑commerce mobile application designed to simplify the online purchase of medicines and enable convenient pickups through smart kiosk machines. The platform features secure Braintree payment integration for safe transactions. A unique barcode system streamlines kiosk‑based pickups, and a robust notification engine keeps users informed about payments, orders, and refunds. A customer rewards programme boosts engagement.",
    responsibilities: [
      "Developed the backend REST APIs that power online medicine orders and kiosk pickups.",
      "Integrated Braintree to process payments securely and handle edge‑cases like 3‑Ds verification & refunds.",
      "Implemented barcode generation & scanning logic for fast kiosk pickup workflows.",
      "Built a notification microservice (email/SMS/push) to send real‑time updates on payment and order status.",
    ],
  },
  {
    id: 2,
    name: "Carlosbakery",
    domain: "E‑Commerce",
    techStack: ["Spring Boot", "JavaScript", "Hibernate", "MySQL", "Stripe SDK"],
    description:
      "Carlosbakery is a US based e-commerce web application that allows customers to order bakery products online and pick them up at self-service kiosks. It provides a smooth shopping experience with barcode-based pickups and secure Stripe payment integration. The system supports customer engagement through a rewards program for repeat purchases. The frontend uses both Javascript and React for different modules. The backend is built using Spring Boot with a monolithic architecture and Hibernate.",
    responsibilities: [
      "Developed and maintained RESTful backend services using Spring Boot and Hibernate, handling modules like product listings, orders, customer accounts, and rewards.",
      "Integrated Stripe payment gateway to enable secure and seamless transactions using credit and debit cards.",
      "Designed and implemented a barcode-based kiosk pickup system, allowing users to scan and collect their bakery orders without assistance.",
      "Built a rewards feature that grants users gifts after every 15 successful kiosk purchases, encouraging repeat business.",
      "Worked on the frontend admin panel to manage users and track transactions efficiently.",
      "Participated in regular code reviews, daily stand-ups, and deployment coordination with the cross-functional team."
    ],
  },
  {
    id: 3,
    name: "Kaiser",
    domain: "Healthcare",
    techStack: ["Spring Boot", "React Native", "Hibernate", "MySQL", "Microservices"],
    description:
      "Kaiser is a mobile health tracking app that helps users monitor various health conditions in one place. It supports bulk data uploads by reading Excel files and saving the data into a database. The app displays mental health tips, daily health ranges, and weekly progress through graphs. It also provides useful articles on diseases and health habits to promote overall well-being.",
    responsibilities: [
      "Developed backend APIs using Spring Boot, JPA, and Hibernate to manage user health records, article content, and routine tracking.",
      "Implemented a feature to read and parse Excel files, automating the insertion of health data into the MySQL database.",
      "Integrated with React Native frontend to provide daily, weekly, and monthly health metrics, including graphical reports.",
      "Built modules to deliver mental health tips, daily ranges for health metrics, and related articles dynamically.",
      "Focused on data accuracy and performance, with optimized queries and error handling for bulk uploads."
    ],
  },
  {
    id: 4,
    name: "Todra",
    domain: "Healthcare",
    techStack: ["Spring Boot (Microservices)", "Angular", "Hibernate", "MySQL", " Google Firebase"],
    description:
      "Todra is a healthcare platform that connects users with healthcare professionals and provides a space to share posts, comments, and messages. The system is built using microservices to handle user data securely, manage authentication, and deliver real-time notifications. It focuses on data privacy, role-based access, and cross-device compatibility through Firebase.",
    responsibilities: [
      "Designed and developed microservices using Spring Boot to manage users, roles, and healthcare professional data securely.",
      "Built a robust authentication and authorization system with role-based access control, ensuring only authorized actions are allowed.",
      "Integrated Google Firebase to send real-time notifications for new posts, comments, and messages across all devices.",
      "Ensured data privacy and security using secure coding practices, validations, and proper exception handling.",
      "Optimized MySQL queries for faster data retrieval and better performance in a distributed environment."
    ],
  },
  {
    id: 5,
    name: "ESG OneMap",
    domain: "Mining",
    techStack: ["Java Servlet", "React", "MongoDB", "Microsoft SQL Server", "PostgreSQL"],
    description:
      "ESG OneMap is a web application designed to manage and visualize mining sites and related widgets through interactive maps and dashboards. It helps users monitor site data, configurations, and environmental metrics in one place. The application supports multiple databases, including MongoDB, SQL Server, and PostgreSQL, for flexible data handling. A dedicated admin panel allows authorized users to control site and widget settings efficiently. The project involved enhancing graphical view features for better data visualization. It also included migrating legacy servlet code to Spring Boot to improve performance, maintainability, and scalability.",
    responsibilities: [
      "Developed and updated Java Servlet APIs and JDBC for managing mining site data and widget configurations.",
      "Contributed to graphical view features, handling backend logic to support interactive data visualization.",
      "Handled admin interface functionality, enabling efficient management of mining sites and widgets through React-integrated APIs.",
      "Participated in migrating legacy servlet code to Spring Boot, improving application structure, speed, and maintainability.",
      "Worked with multiple databases (MongoDB, SQL Server, PostgreSQL), managing data access.",
      "Ensured smooth backend-frontend integration and maintained code quality through regular testing and debugging."
    ],
  },
];

/* ---------- Card component ---------- */
function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const [fullDesc, setFullDesc] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const detailsId = useId();
  const descRef = useRef(null);

  /* Measure line count after mount & when toggling fullDesc */
  useLayoutEffect(() => {
    if (!descRef.current) return;
    const lineHeight = parseFloat(
      getComputedStyle(descRef.current).lineHeight
    );
    const lines = Math.round(descRef.current.scrollHeight / lineHeight);
    setIsTruncated(lines > 4);
  }, [fullDesc]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-0"
    >
      <CardShell className="p-8 sm:p-10 max-w-3xl mx-auto mb-14">
        <div className="flex flex-col h-full">
          {/* ---------- Header & description ---------- */}
          <header>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                {project.name}
              </h3>
              <Badge>{project.domain}</Badge>
            </div>

            {/* reserve exactly 4 lines to equalise card heights */}
            <div className="min-h-[6.5rem]">
              <p
                ref={descRef}
                className={`mt-4 text-sm sm:text-base leading-relaxed
                text-left md:text-justify md:[text-wrap:balance] 
                text-zinc-700 dark:text-zinc-300 ${ 
                !fullDesc && isTruncated ? "line-clamp-4" : ""
               }`}
              >
                {project.description}
              </p>
            </div>

            {isTruncated && (
              <div className="mt-1 flex justify-center">
                <GhostBtn onClick={() => setFullDesc(!fullDesc)}>
                  {fullDesc ? "Show less" : "See more"}
                </GhostBtn>
              </div>
            )}
          </header>

          {/* ---------- Action block ---------- */}
          <div className="mt-auto pt-2 pb-0">
            <GhostBtn
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls={detailsId}
            >
              <span className="mr-2">
                {open ? "Hide Details" : "View Details"}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </GhostBtn>

            {open && (
              <div
                id={detailsId}
                className="mt-4 space-y-3 text-sm leading-relaxed  text-left md:[text-wrap:balance] text-zinc-700 dark:text-zinc-300"
              >
                <p>
                  <strong>Tech Stack :</strong> {project.techStack.join(", ")}
                </p>
                <div>
                  <p className="font-bold">Responsibilities :</p>
                  <ul className="mt-1 list-disc list-outside pl-6 marker:text-black dark:marker:text-white space-y-1 text-left">
                    {project.responsibilities.map((r, i) => (
                      <li key={`${project.id}-${i}`}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardShell>
    </motion.div>
  );
}

/* ---------- Page component ---------- */
export default function ProjectsPage() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-transparent overflow-hidden">
      <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white">
          Professional Projects
        </h1>
        <p className="mt-3 text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
          Here’s a walkthrough of my work. Keep scrolling to check out each project
        </p>
      </header>

      <div className="relative z-10 mt-14 sm:mt-16 flex flex-col items-stretch">
        {[...projects].reverse().map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
