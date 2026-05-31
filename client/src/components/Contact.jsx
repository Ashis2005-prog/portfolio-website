import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus(
          "Message sent successfully. Check the Netlify Forms dashboard for submissions.",
        );
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact">
      <div className="container card">
        <div className="section-title">
          <span className="icon-box">
            <FaEnvelope />
          </span>
          <h2>Contact</h2>
        </div>

        <p className="muted">
          Send me a message using the form below.
          {/* Submissions will appear in
          your Netlify Forms dashboard after deployment. */}
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            marginTop: "20px",
          }}
        >
          <motion.form
            className="form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <input
              className="input"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              className="input"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="textarea"
              name="message"
              placeholder="Your Message"
              required
            />
            <button className="btn" type="submit">
              <FaPaperPlane /> Send Message
            </button>
            {status && <p>{status}</p>}
          </motion.form>

          <div className="card" style={{ margin: 0 }}>
            <p>
              <FaPhoneAlt /> <strong>Phone:</strong> 6371 338 232
            </p>
            <p>
              <FaEnvelope /> <strong>Email:</strong>{" "}
              <a href="mailto:ashispradhan394@gmail.com">
                ashispradhan394@gmail.com
              </a>
            </p>
            <p>
              <FaLinkedin /> <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ashis-pradhan-4baa66229/"
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </p>
            <p>
              <FaGithub /> <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Ashis2005-prog"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
