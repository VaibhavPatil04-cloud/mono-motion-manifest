import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/VaibhavPatil04-cloud" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/vaibhav-patil-161608234" },
    { name: "Email", icon: FaEnvelope, url: "mailto:patilvaibhavp1@gmail.com" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors text-2xl"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground font-inter text-center">
            © 2025 Vaibhav Patil. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-primary font-inter font-semibold hover:underline"
          >
            <FaArrowUp /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
