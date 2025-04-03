
import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CleanCode = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-8 md:p-12"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Code className="w-8 h-8" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Clean Code Output</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                Our tool generates clean, ready-to-use HTML code that you can directly paste into your projects.
                The formatted output is optimized for both readability and performance.
              </p>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Code Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Properly formatted HTML img tags</li>
                  <li>Correct MIME type specifications</li>
                  <li>Base64 encoding with proper formatting</li>
                  <li>Alt attribute included for accessibility</li>
                  <li>Clean indentation for easy integration</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                <pre>{`<img 
  src="data:image/webp;base64,UklGRqY..."
  alt="WebP image" 
/>`}</pre>
              </div>
              
              <p>
                The generated code is optimized to work across all modern web frameworks and content management systems,
                including React, Vue, Angular, WordPress, and custom HTML sites.
              </p>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Implementation Tips</h3>
                <p>
                  For optimal performance when using base64 encoded images:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Use for small images (under 10KB) for best performance</li>
                  <li>Consider using the WebP format for its superior compression</li>
                  <li>Include width and height attributes to prevent layout shifts</li>
                  <li>For larger images, traditional image files with CDN delivery may be more efficient</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CleanCode;
