import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiVite, SiJavascript } from "react-icons/si";
import TextType from "@/components/ui/TextType";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  const techStack = [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB"
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E"
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "#fff"
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "#646CFF"
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933"
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB"
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#06B6D4"
    }
  ];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const paragraphText1 = "I'm a passionate MCA student and Full-Stack Web Developer with expertise in modern web technologies. I specialize in building responsive, user-friendly applications using React, Firebase, and cutting-edge tools.";
  
  const paragraphText2 = "With a strong foundation in both frontend and backend development, I love creating seamless digital experiences that solve real-world problems.";

  return (
    <section id="about" ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} 
          transition={{
            duration: 0.6
          }} 
          className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-foreground"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div 
            initial={{
              opacity: 0,
              x: 50
            }} 
            animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} 
            transition={{
              duration: 0.8
            }}
          >
            <div className="mb-6">
              {isInView && (
                <TextType
                  text={paragraphText1}
                  as="p"
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
                  as="p"
                  className="text-lg text-muted-foreground font-inter leading-relaxed"
                  typingSpeed={30}
                  initialDelay={3000}
                  loop={false}
                  showCursor={false}
                />
              )}
            </div>

            <motion.button 
              whileHover={{
                scale: 1.05
              }} 
              whileTap={{
                scale: 0.95
              }} 
              className="flex flex-col items-center px-6 py-3 bg-primary text-foreground rounded-lg font-inter font-semibold glow-hover"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={isInView ? "visible" : "hidden"} 
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-12 text-foreground">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div 
                key={tech.name} 
                variants={itemVariants} 
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }} 
                className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg glow-hover cursor-pointer"
              >
                <motion.div 
                  animate={{
                    y: [0, -10, 0]
                  }} 
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <tech.icon 
                    className="text-5xl" 
                    style={{
                      color: tech.color
                    }} 
                  />
                </motion.div>
                <span className="text-sm font-inter text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;