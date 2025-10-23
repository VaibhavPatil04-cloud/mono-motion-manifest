import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiFirebase, SiTailwindcss } from "react-icons/si";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const techIcons: { [key: string]: any } = {
    React: SiReact,
    Firebase: SiFirebase,
    Tailwind: SiTailwindcss,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end justify-center gap-4 pb-8"
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-primary text-foreground rounded-lg font-inter font-semibold flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 border-2 border-primary text-foreground rounded-lg font-inter font-semibold flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-poppins font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground font-inter mb-4">{project.description}</p>

        <div className="flex gap-3">
          {project.tags.slice(0, 3).map((tag, i) => {
            const Icon = techIcons[tag];
            return (
              <motion.div
                key={tag}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-2 bg-secondary rounded-lg"
              >
                {Icon ? (
                  <Icon className="text-2xl text-primary" />
                ) : (
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded font-mono">{tag}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
