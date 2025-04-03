
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FastProcessing = () => {
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
              <Zap className="w-8 h-8" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Fast Processing</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                Our WebP image processor is designed to deliver exceptional speed without compromising quality.
                By leveraging client-side processing, we eliminate server round-trips entirely.
              </p>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How It Works</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Images are processed directly in your browser</li>
                  <li>Uses modern Web APIs for maximum performance</li>
                  <li>Typical conversion completes in milliseconds</li>
                  <li>No upload/download delays</li>
                  <li>Handles WebP images of various sizes efficiently</li>
                </ul>
              </div>
              
              <p>
                The zero-latency approach makes our tool perfect for quick edits, batch processing, and 
                integrating into your development workflow without interruptions.
              </p>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Performance Benefits</h3>
                <p>
                  By embedding WebP images as base64 strings, you can reduce HTTP requests for small images,
                  potentially improving page load times in certain scenarios. This is especially useful for:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Small UI elements and icons</li>
                  <li>Single-page applications</li>
                  <li>Offline-capable web applications</li>
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

export default FastProcessing;
