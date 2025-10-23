import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiFirebase, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6 text-center text-foreground">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        delay: skillIndex * 0.3,
                      },
                    }}
                    className="flex flex-col items-center gap-3 p-4 bg-secondary rounded-lg glow-hover cursor-pointer group"
                  >
                    <skill.icon className="text-5xl transition-all" style={{ color: skill.color }} />
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-xs font-inter text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
