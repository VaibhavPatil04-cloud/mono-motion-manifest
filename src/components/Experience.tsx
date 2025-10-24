import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    {
      type: "education",
      title: "Master of Computer Applications (MCA)",
      institution: "Your University",
      duration: "2023 - 2025",
      description: "Specializing in Full-Stack Development and Software Engineering",
      icon: FaGraduationCap,
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Your College",
      duration: "2020 - 2023",
      description: "Foundation in Computer Science and Programming",
      icon: FaGraduationCap,
    },
    {
      type: "work",
      title: "Full-Stack Developer Intern",
      institution: "Company Name",
      duration: "2024",
      description: "Developed React-based web applications and implemented backend APIs",
      icon: FaBriefcase,
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-foreground"
        >
          Experience & Education
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div className="flex items-start gap-6 md:gap-0">
                {/* Icon node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 border-4 border-background"
                >
                  <item.icon className="text-background text-sm" />
                </motion.div>

                {/* Content card */}
                <div className="ml-20 md:ml-0 w-full md:w-[calc(50%-2rem)]">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border rounded-lg p-6 glow-hover cursor-pointer"
                  >
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                      {item.duration}
                    </span>
                    <h3 className="text-xl font-poppins font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary font-inter mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
