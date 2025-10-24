import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaHtml5, FaCss3, FaAws } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiVite, SiJavascript, SiCss3 } from "react-icons/si";
import TextType from "@/components/ui/TextType";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "GitHub", icon: FaGithub, color: "#fff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: FaHtml5, color: "#ba7814ff" },
    { name: "CSS", icon: SiCss3, color: "#411a71ff" },
    { name: "AWS Cloud", icon: FaAws, color: "#ffffffff" }
  ];

  // Duplicate for infinite scroll effect
  const duplicatedTechStack = [...techStack, ...techStack];

  const paragraphText1 = "I'm a passionate MCA student and Full-Stack Web Developer with expertise in modern web technologies. I specialize in building responsive, user-friendly applications using React, Firebase, and cutting-edge tools.";
  const paragraphText2 = "With a strong foundation in both frontend and backend development, I love creating seamless digital experiences that solve real-world problems.";

  return (
    <section id="about" ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Centered Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-foreground"
        >
          About Me
        </motion.h2>

        {/* Centered Typing Text */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            {isInView && (
              <TextType
                text={paragraphText1}
                className="text-lg text-muted-foreground font-inter leading-relaxed"
                typingSpeed={30}
                initialDelay={300}
                loop={false}
                showCursor={false}
              />
            )}
          </div>

          <div className="mb-8">
            {isInView && (
              <TextType
                text={paragraphText2}
                className="text-lg text-muted-foreground font-inter leading-relaxed"
                typingSpeed={30}
                initialDelay={3000}
                loop={false}
                showCursor={false}
              />
            )}
          </div>

          {/* Centered Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-foreground rounded-lg font-inter font-semibold glow-hover"
          >
            Download Resume
          </motion.button>
        </div>

        {/* Tech Stack Infinite Slider */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-12 text-foreground">
            Tech Stack
          </h3>

          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -((techStack.length * 144) + (techStack.length * 32))],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 w-32 h-32 rounded-lg bg-card border border-border flex flex-col items-center justify-center gap-3 glow-hover cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="text-5xl" style={{ color: tech.color }} />
                    <span className="text-sm font-inter text-muted-foreground">{tech.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
