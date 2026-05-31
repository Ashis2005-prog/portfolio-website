import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <span className="icon-box">
            <FaUserGraduate />
          </span>
          <h2>About Me</h2>
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I am an aspiring software engineer with strong DSA skills in C++ and
            Java. I enjoy building useful products, learning full-stack
            development, and turning ideas into working websites.
          </p>
          <p className="muted">
            Education: Aryan Institute of Engineering and Technology,
            Bhubaneswar; Senior Secondary from Banki Higher Secondary School.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
