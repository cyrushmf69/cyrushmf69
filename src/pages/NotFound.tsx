
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div 
        className="max-w-md w-full glass-panel rounded-2xl p-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6"
        >
          <span className="text-4xl font-bold text-muted-foreground">404</span>
        </motion.div>
        
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <motion.a 
          href="/" 
          className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/90 transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
