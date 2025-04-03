
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Security = () => {
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
              <Lock className="w-8 h-8" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Secure Processing</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                Privacy and security are at the core of our WebP embedding tool. Unlike other online converters,
                your files never leave your browser or get uploaded to any server.
              </p>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Our Security Promise</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>100% client-side processing</li>
                  <li>No file uploads to external servers</li>
                  <li>Your images never leave your device</li>
                  <li>No data collection or tracking</li>
                  <li>No cookies or persistent storage</li>
                </ul>
              </div>
              
              <div className="flex items-center p-4 bg-green-50 text-green-800 rounded-xl">
                <ShieldCheck className="w-6 h-6 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  All processing happens directly in your browser using JavaScript's FileReader API and canvas elements. 
                  Your data remains entirely within your control.
                </p>
              </div>
              
              <p>
                This approach ensures complete privacy, making our tool suitable for sensitive images and
                confidential design assets. You can convert proprietary images without concern about data exposure.
              </p>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Why This Matters</h3>
                <p>
                  In an era of increasing data breaches and privacy concerns, keeping your assets secure is crucial.
                  Our tool was designed with these principles in mind, ensuring your intellectual property
                  remains protected throughout the conversion process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
