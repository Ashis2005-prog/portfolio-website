import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from "react-icons/fa";

const demoProjects = [
  {
    title: "JourneyNest - Travel Booking App",
    description:
      "A full-stack travel booking application built with the MERN stack. Features property listings with advanced filtering, user authentication, and booking management.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "REST API"],
    githubUrl: "https://github.com/Ashis2005-prog/JourneyNest-project",
    liveUrl: "https://github.com/Ashis2005-prog/JourneyNest-project",
    // featured: true,
  },
  {
    title: "Smart Study Planner",
    description:
      "Modern, responsive study planner website showcasing projects and skills. Built with React featuring smooth animations",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Ashis2005-prog",
    liveUrl: "https://verdant-macaron-2f7152.netlify.app/",
    // featured: true,
  },
  {
    title: "DSA Solutions",
    description:
      "Collection of Data Structures and Algorithms solutions in C++ and Java. Includes LeetCode problems demonstrating problem-solving skills.",
    techStack: ["C++", "Java", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/Ashis2005-prog",
    liveUrl: "https://leetcode.com/u/ashispradhan/",
    // featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <span className="icon-box">
            <FaProjectDiagram />
          </span>
          <h2>Projects</h2>
        </div>

        <div className="grid projects">
          {demoProjects.map((project, index) => (
            <motion.article
              className="card"
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <div>
                {project.techStack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl}>
                  <FaGithub /> GitHub
                </a>
                <a href={project.liveUrl}>
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
