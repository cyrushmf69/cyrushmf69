
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Lock, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featureItems = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast Processing",
    description: "Process WebP images instantly with zero server latency",
    path: "/fast-processing"
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Secure",
    description: "Files never leave your browser, ensuring complete privacy",
    path: "/security"
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Clean Code",
    description: "Get clean, ready-to-use HTML code for easy implementation",
    path: "/clean-code"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Browser Support",
    description: "Works with all modern browsers that support WebP format",
    path: "/browser-support"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 w-full max-w-6xl mx-auto" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Features
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Everything you need for WebP embedding
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Simple and efficient tools to convert your WebP images to base64 for direct HTML embedding,
          with no server uploads required.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featureItems.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            className="glass-panel rounded-xl p-6 group hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => navigate(feature.path)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
