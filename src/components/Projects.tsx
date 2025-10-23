import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "React", "AI/ML", "E-commerce", "Full-Stack"];
  const projects = [{
    title: "METKickstart",
    description: "College placement management portal with real-time updates and student tracking",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    tags: ["React", "Firebase", "Full-Stack"],
    liveUrl: "#",
    githubUrl: "#"
  }, {
    title: "Waste-Wise",
    description: "AI-powered recycling app using Google Vision API for waste classification",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    tags: ["React", "AI/ML", "Google Vision API"],
    liveUrl: "#",
    githubUrl: "#"
  }, {
    title: "SimpleExplainer",
    description: "Gemini AI-powered concept explainer that breaks down complex topics",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["React", "AI/ML", "Gemini AI"],
    liveUrl: "#",
    githubUrl: "#"
  }, {
    title: "Patil Jewellers",
    description: "Full-featured e-commerce website with cart, checkout, and admin panel",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    tags: ["React", "E-commerce", "Full-Stack"],
    liveUrl: "#",
    githubUrl: "#"
  }];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(project => project.tags.includes(activeFilter));
  return <section id="projects" ref={ref} className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8 text-foreground">Projects</motion.h2>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => {})}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />)}
        </motion.div>
      </div>
    </section>;
};
export default Projects;