import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CircularGallery from "./CircularGallery";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Tech stack items for circular gallery
  const techStackItems = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      text: "React"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      text: "JavaScript"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      text: "TypeScript"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      text: "Tailwind CSS"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      text: "Node.js"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      text: "Python"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      text: "Firebase"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      text: "MongoDB"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      text: "Git"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      text: "VS Code"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      text: "Vite"
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-foreground"
        >
          Tech Stack
        </motion.h2>

        <div className="w-full h-[600px] relative">
          <CircularGallery
            items={techStackItems}
            bend={3}
            textColor="hsl(var(--foreground))"
            borderRadius={0.05}
            font="bold 24px sans-serif"
            scrollSpeed={2}
            scrollEase={0.08}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
