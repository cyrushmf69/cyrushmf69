
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="py-10 px-8 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center shadow-sm shadow-primary/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 5H19V11H5V5ZM5 19V13H9V19H5ZM19 19H11V13H19V19Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm font-medium">CyRushMF69 dai ko photo to html tool</p>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} CyRushMF69 dai ko photo to html tool. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
