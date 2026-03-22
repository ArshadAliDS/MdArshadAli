"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState("about");

  const sections = ["about", "skills", "experience", "projects", "contact"];

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/70 backdrop-blur z-50 flex justify-between px-10 py-4">
        <h1 className="text-xl font-bold">Arshad</h1>
        <div className="space-x-6">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="hover:text-cyan-400 transition"
              onClick={() => setActive(sec)}
            >
              {sec.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Senior AI/ML Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg text-gray-400"
        >
          9+ years building GenAI, RAG & scalable ML systems
        </motion.p>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        Expert in AI/ML, Generative AI, and scalable systems solving real-world problems.
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Python",
            "Machine Learning",
            "Deep Learning",
            "RAG",
            "LangChain",
            "AWS",
          ].map((skill) => (
            <HoverCard key={skill}>{skill}</HoverCard>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <HoverCard>
          Built enterprise AI systems improving efficiency by 40%.
        </HoverCard>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {["RAG Chatbot", "Forecasting System", "Agentic AI"].map((proj) => (
            <HoverCard key={proj}>{proj}</HoverCard>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        Email: your-email@example.com
      </Section>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-10 py-20"
    >
      <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-2">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-4 rounded-xl shadow-lg cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
