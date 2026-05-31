import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaCuttlefish,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiLeetcode } from "react-icons/si";

const skills = [
  { name: "C++", icon: FaCuttlefish, color: "#4b5563" },
  { name: "Java", icon: FaJava, color: "#f97316" },
  { name: "HTML", icon: FaHtml5, color: "#f97316" },
  { name: "CSS", icon: FaCss3Alt, color: "#3b82f6" },
  { name: "JavaScript", icon: FaJsSquare, color: "#facc15" },
  { name: "React.js", icon: FaReact, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
  { name: "Express.js", icon: SiExpress, color: "#e2e8f0" },
  { name: "MongoDB", icon: SiMongodb, color: "#22c55e" },
  { name: "MySQL", icon: SiMysql, color: "#0ea5e9" },
  { name: "Git", icon: FaGitAlt, color: "#f97316" },
  { name: "GitHub", icon: FaGithub, color: "#e2e8f0" },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <span className="icon-box">⚙️</span>
          <h2>Skills</h2>
        </div>

        <div className="grid skills">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                className="card skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Icon size={34} color={skill.color} />
                <h3 style={{ margin: "12px 0 0" }}>{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
