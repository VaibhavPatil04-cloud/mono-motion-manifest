import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/VaibhavPatil04-cloud", color: "#fff" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/vaibhav-patil-161608234", color: "#0A66C2" },
    { name: "Email", icon: FaEnvelope, url: "mailto:patilvaibhavp1@gmail.com", color: "#EA4335" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 font-orbitron">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground font-inter">Let's Connect</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-orbitron">
                Let's work together
              </h3>
              <p className="text-muted-foreground leading-relaxed font-inter">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                Feel free to reach out!
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <social.icon size={28} style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            action="https://formsubmit.co/patilvaibhavp1@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.origin} />
            <input type="hidden" name="_subject" value="New message from portfolio contact form" />
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none transition-colors font-inter text-foreground"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none transition-colors font-inter text-foreground"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none transition-colors resize-none font-inter text-foreground"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-primary text-foreground rounded-lg font-semibold hover:shadow-lg transition-all font-inter"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
