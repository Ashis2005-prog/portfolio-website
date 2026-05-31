import { motion } from "framer-motion";
import { FaArrowRight, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb } from "react-icons/si";

export default function Hero() {
  return (
    <section className="container hero">
      <motion.div
        className="fade-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="pill">
          <FaReact /> Full-Stack Developer Portfolio
        </span>
        <h1>Ashis Pradhan</h1>
        <p className="muted">
          Aspiring Software Engineer building practical web apps with React,
          Node.js, Express.js, and MongoDB.
        </p>
        <p>
          Based in Bhubaneswar, Odisha, I focus on clean UI, solid APIs, and
          deployable projects.
        </p>
        <a className="btn" href="#projects">
          View Projects <FaArrowRight />
        </a>
      </motion.div>

      <motion.div
        className="card float"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3>Quick Info</h3>
        <p>
          <strong>Email:</strong> ashispradhan394@gmail.com
        </p>
        <p>
          <strong>Education:</strong> AIET, B.Tech CSE, 2023–2027
        </p>
        <p>
          <strong>GPA:</strong> 8.8/10
        </p>
        <p>
          <strong>Focus:</strong> MERN stack, DSA, problem solving
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "20px",
            fontSize: "1.6rem",
          }}
        >
          <SiMongodb color="#22c55e" />
          <SiNodedotjs color="#84cc16" />
          <FaReact color="#38bdf8" />
        </div>
      </motion.div>
    </section>
  );
}
