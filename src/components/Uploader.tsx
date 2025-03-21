
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Copy, Check, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

const Uploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const processFile = async (file: File) => {
    if (!file.type.includes('webp')) {
      toast.error('Please upload a WebP image');
      return;
    }
    
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setImageData(event.target.result);
          const htmlString = `<img src="${event.target.result}" alt="WebP image" />`;
          setHtmlCode(htmlString);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Error processing file');
      console.error(error);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };
  
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const clearImage = () => {
    setImageData(null);
    setHtmlCode('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    setIsCopied(true);
    toast.success('HTML code copied to clipboard');
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence mode="wait">
        {!imageData ? (
          <motion.div
            key="uploader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`glass-panel rounded-2xl flex flex-col items-center justify-center p-10 min-h-[300px] transition-all duration-300 ${
              isDragging ? 'border-primary border-2 bg-primary/5' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/webp"
              className="hidden"
            />
            
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-xl font-medium mb-2">Upload WebP Image</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              Drag and drop your WebP image here, or click to select a file
            </p>
            
            <button
              onClick={handleUploadClick}
              className="subtle-ring-focus px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
            >
              Select File
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 relative">
              <button
                onClick={clearImage}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="text-sm font-medium text-muted-foreground mb-3">Preview</div>
              
              <div className="bg-secondary/50 rounded-xl p-4 flex items-center justify-center">
                {imageData && (
                  <img
                    src={imageData}
                    alt="Uploaded WebP"
                    className="max-w-full max-h-64 rounded-lg object-contain"
                  />
                )}
              </div>
            </div>
            
            <motion.div 
              className="glass-panel rounded-2xl p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm font-medium text-muted-foreground">Generated HTML</div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 text-xs px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-200"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <div className="bg-secondary/50 rounded-xl p-4 overflow-auto max-h-40">
                <pre className="text-xs md:text-sm whitespace-pre-wrap break-all">{htmlCode}</pre>
              </div>
              
              <div className="mt-4 text-xs text-muted-foreground">
                This HTML code contains the Base64 encoded data of your WebP image.
              </div>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <button
                onClick={clearImage}
                className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <X className="w-4 h-4 mr-2" />
                Upload another image
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Uploader;
