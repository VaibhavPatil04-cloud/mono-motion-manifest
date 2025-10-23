import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CircularGallery from "./CircularGallery";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Tech stack items for the circular gallery
  const techStackItems = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      text: "React"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      text: "JavaScript"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      text: "TypeScript"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "Tailwind CSS"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      text: "Node.js"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      text: "Python"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      text: "Firebase"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      text: "MongoDB"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      text: "Git"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      text: "VS Code"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      text: "Vite"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      text: "Next.js"
    }
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
          Technical Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[600px] w-full"
        >
          <CircularGallery
            items={techStackItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.1}
            font="bold 24px Inter, sans-serif"
            scrollSpeed={2}
            scrollEase={0.08}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-8 text-lg"
        >
          Scroll or drag to explore my tech stack
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
