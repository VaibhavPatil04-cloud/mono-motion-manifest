import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SplitText from "@/components/ui/SplitText";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary py-20 md:py-0">
      {/* Floating Geometric Shapes - Hidden on mobile */}
      <motion.div 
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }} 
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} 
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg hidden md:block pointer-events-none" 
      />
      <motion.div 
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }} 
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} 
        className="absolute bottom-32 right-20 w-32 h-32 rounded-full border-2 border-primary/20 hidden md:block pointer-events-none" 
      />
      <motion.div 
        animate={{
          rotate: [0, 360]
        }} 
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }} 
        className="absolute top-1/3 right-1/4 w-16 h-16 hidden md:block pointer-events-none"
      >
        <div 
          className="w-full h-full border-2 border-primary/30" 
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }} 
        />
      </motion.div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="container mx-auto px-4 md:px-6 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <SplitText
            text="Hi, I'm Vaibhav"
            tag="h1"
            className="text-4xl md:text-7xl font-poppins font-bold mb-4 text-foreground"
            delay={50}
            duration={0.5}
            splitType="chars"
            from={{ opacity: 0, y: 40, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <p className="text-lg md:text-2xl font-inter text-muted-foreground px-4">
            Full-Stack Developer | Cloud Engineer | React Specialist
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            onClick={() => scrollToSection("projects")} 
            whileHover={{
              scale: 1.05
            }} 
            whileTap={{
              scale: 0.95
            }} 
            className="px-8 py-4 bg-primary text-foreground rounded-lg font-inter font-semibold glow-hover"
          >
            Know Me
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection("contact")} 
            whileHover={{
              scale: 1.05
            }} 
            whileTap={{
              scale: 0.95
            }} 
            className="px-8 py-4 border-2 border-primary text-foreground rounded-lg font-inter font-semibold hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 md:mt-20">
          <motion.button 
            onClick={() => scrollToSection("about")} 
            animate={{
              y: [0, 10, 0]
            }} 
            transition={{
              duration: 2,
              repeat: Infinity
            }} 
            className="text-primary text-3xl md:text-4xl"
          >
            <FaChevronDown />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;