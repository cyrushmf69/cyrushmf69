
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BrowserSupport = () => {
  const supportData = [
    { browser: 'Chrome', version: '32+', supported: true },
    { browser: 'Firefox', version: '65+', supported: true },
    { browser: 'Safari', version: '14+', supported: true },
    { browser: 'Edge', version: '79+', supported: true },
    { browser: 'Opera', version: '19+', supported: true },
    { browser: 'Samsung Internet', version: '4.0+', supported: true },
    { browser: 'IE 11', version: 'All', supported: false },
  ];

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
              <Globe className="w-8 h-8" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Browser Support</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                The WebP format is now supported by all modern browsers, making it an excellent choice for web images.
                Our tool works with any browser that supports both WebP and the JavaScript FileReader API.
              </p>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">WebP Browser Compatibility</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="px-4 py-3 text-left">Browser</th>
                        <th className="px-4 py-3 text-left">Version</th>
                        <th className="px-4 py-3 text-left">Support</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supportData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-secondary/20' : ''}>
                          <td className="px-4 py-3">{item.browser}</td>
                          <td className="px-4 py-3">{item.version}</td>
                          <td className="px-4 py-3">
                            {item.supported ? 
                              <Check className="w-5 h-5 text-green-500" /> : 
                              <X className="w-5 h-5 text-red-500" />
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p>
                WebP images provide exceptional quality at smaller file sizes compared to JPEG and PNG formats.
                The format supports both lossy and lossless compression, as well as transparency and animation.
              </p>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Fallback Options</h3>
                <p>
                  While most modern browsers support WebP, you might still need to provide fallbacks for older browsers.
                  We recommend these approaches:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Use the &lt;picture&gt; element with WebP and JPEG/PNG sources</li>
                  <li>Server-side content negotiation (via Accept headers)</li>
                  <li>JavaScript detection with format switching</li>
                  <li>Progressive enhancement techniques</li>
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

export default BrowserSupport;
