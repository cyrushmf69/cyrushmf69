
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Uploader from '../components/Uploader';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-10 md:py-20 px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simple & Elegant
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Convert WebP Images to Base64
            </h1>
            <p className="text-xl text-muted-foreground">
              A beautiful, intuitive tool to embed WebP images directly in your HTML code.
              No uploads, no servers - just pure client-side magic.
            </p>
          </motion.div>
          
          <Uploader />
        </section>
        
        <Features />
        
        <section className="py-20 px-4" id="about">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-2xl p-8 md:p-12"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About This Tool
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Why Embed WebP Images?
              </h2>
              <p className="text-muted-foreground mb-6">
                WebP is a modern image format that provides superior lossless and lossy compression for images on the web.
                Embedding WebP images as Base64 strings eliminates additional HTTP requests, improving page load times for smaller images.
              </p>
              <p className="text-muted-foreground">
                This tool processes your WebP images entirely in the browser - your files never leave your device,
                ensuring complete privacy and security.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
