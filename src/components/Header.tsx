
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="w-full py-6 px-8 md:px-12 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 5H19V11H5V5ZM5 19V13H9V19H5ZM19 19H11V13H19V19Z" fill="white"/>
          </svg>
        </div>
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">CyRushMF69 dai ko photo to html tool</h1>
      </motion.div>
      
      <motion.div 
        className="hidden md:flex items-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a 
          href="https://github.com/lovable-dev/webp-embedder" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          GitHub
        </a>
        <a 
          href="#about" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          About
        </a>
        <a 
          href="#docs" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Documentation
        </a>
      </motion.div>
    </motion.header>
  );
};

export default Header;
