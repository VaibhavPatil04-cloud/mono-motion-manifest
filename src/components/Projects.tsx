import CardSwap, { Card } from "@/components/ui/CardSwap";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiFirebase,
  SiGooglecloud,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";
import { TbBrandOpenai } from "react-icons/tb";

const Projects = () => {
  const ref = useRef(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: "METKickstart",
      description: "College placement management portal with real-time updates and student tracking",
      detailedDescription: "A comprehensive placement portal built for college students featuring admin dashboards, real-time placement drive updates, student profile management, and company engagement tracking. Streamlines the entire recruitment process from application to placement with Firebase backend integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Full-Stack"],
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" }
      ],
      liveUrl: "https://metkickstart.onrender.com/",
      githubUrl: "https://github.com/Met-Kickstart/MetKickStartProject",
      gradient: "from-blue-500 to-purple-600",
      highlights: ["Real-time placement updates", "Admin dashboard", "Student tracking system", "Company management"]
    },
    {
      title: "Waste-Wise",
      description: "AI-powered recycling app using Google Vision API for waste classification",
      detailedDescription: "Smart waste management solution leveraging Google Vision API for image recognition. Identifies recyclable materials, provides upcycling tips, and guides users on proper disposal methods. Features camera capture functionality and AI-powered search to promote sustainable living.",
      image: "wastewise.jpg",
      tags: ["React", "AI/ML", "Google Vision API"],
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" }
      ],
      liveUrl: "https://wastewise-2-plp6.onrender.com",
      githubUrl: "https://github.com/VaibhavPatil04-cloud/wastewise",
      gradient: "from-green-500 to-teal-600",
      highlights: ["AI image recognition", "Recycling tips", "Camera capture", "Sustainability focus"]
    },
    {
      title: "SimpleExplainer",
      description: "Gemini AI-powered concept explainer that breaks down complex topics",
      detailedDescription: "Educational tool powered by Gemini AI that simplifies complex concepts into easy-to-understand explanations. Perfect for students and learners who need clear, concise breakdowns of difficult topics across various subjects. Makes learning accessible and enjoyable.",
      image: "simpleexplainer.png",
      tags: ["React", "AI/ML", "Gemini AI"],
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Gemini AI", icon: TbBrandOpenai, color: "#8E75FF" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      liveUrl: "https://simpleexaplainer.onrender.com",
      githubUrl: "https://github.com/VaibhavPatil04-cloud/simpleexaplainer",
      gradient: "from-purple-500 to-pink-600",
      highlights: ["Gemini AI integration", "Concept simplification", "Educational tool", "User-friendly interface"]
    },
    {
      title: "Patil Jewellers",
      description: "Full-featured e-commerce website with cart, checkout, and admin panel",
      detailedDescription: "Modern jewelry e-commerce platform with complete shopping experience. Includes product catalog, shopping cart, secure checkout, order management, and comprehensive admin panel for inventory and sales tracking. Delivers seamless online shopping experience.",
      image: "patiljewellers.png",
      tags: ["React", "E-commerce", "Full-Stack"],
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" }
      ],
      liveUrl: "https://ecommerce-jewelry-shop-1.onrender.com",
      githubUrl: "https://github.com/VaibhavPatil04-cloud/ecommerce-jewelry-shop",
      gradient: "from-yellow-500 to-orange-600",
      highlights: ["E-commerce platform", "Shopping cart", "Admin panel", "Order management"]
    }
  ];

  const currentProject = projects[currentProjectIndex];
    return (
    <section 
      id="projects"
      ref={ref} 
      className="min-h-screen bg-black text-white py-12 md:py-20 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12 lg:mb-16 text-center px-4 py-2">
          Featured Projects
        </h2>

        {/* Mobile: Stack vertically, Desktop: Side by side - Centered vertically */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Dynamic content based on current card */}
          <div className="space-y-6 md:space-y-8 w-full lg:pr-12 order-2 lg:order-1">
            {/* Current project details with smooth transition */}
            <div 
              key={currentProjectIndex}
              className="space-y-4 md:space-y-6 animate-fade-slide-in"
            >
              <div>
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${currentProject.gradient} bg-clip-text text-transparent mb-2 md:mb-3`}>
                  {currentProject.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {currentProject.detailedDescription}
                </p>
              </div>

              {/* Key highlights */}
              <div className="space-y-2 md:space-y-3">
                <h4 className="text-lg md:text-xl font-semibold text-white">Key Features:</h4>
                <ul className="space-y-1.5 md:space-y-2">
                  {currentProject.highlights.map((highlight, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-400"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${currentProject.gradient} flex-shrink-0`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies with icons */}
              <div className="space-y-2 md:space-y-3">
                <h4 className="text-lg md:text-xl font-semibold text-white">Technologies:</h4>
                <div className="flex gap-2 md:gap-4 flex-wrap">
                  {currentProject.technologies.map((tech, i) => {
                    const IconComponent = tech.icon;
                    return (
                      <div 
                        key={i}
                        className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <IconComponent 
                          size={isMobile ? 18 : 24} 
                          style={{ color: tech.color }} 
                        />
                        <span className="text-gray-300 font-medium text-xs md:text-sm">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Card swap animation - Centered vertically */}
          <div 
            className="relative w-full order-1 lg:order-2 flex items-center justify-center"
            style={{ 
              minHeight: isMobile ? '500px' : '650px',
              overflow: 'visible'
            }}
          >
            <CardSwap
              width={isMobile ? 300 : 450}
              height={isMobile ? 380 : 550}
              cardDistance={isMobile ? 40 : 60}
              verticalDistance={isMobile ? 50 : 70}
              delay={5000}
              pauseOnHover={true}
              skewAmount={isMobile ? 4 : 6}
              easing="linear"
              onCardChange={(idx) => setCurrentProjectIndex(idx)}
            >
              {projects.map((project, idx) => (
                <Card key={idx} className="group">
                  {/* Project Image */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-3 mb-3">
                        {project.description}
                      </p>
                      
                      {/* Buttons - Hidden by default, visible on hover */}
                      <div className="flex gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105 cursor-pointer text-xs md:text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={12} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 transition-all hover:scale-105 cursor-pointer text-xs md:text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={14} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
