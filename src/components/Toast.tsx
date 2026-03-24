"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

export default function Toast({ isVisible, message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-md"
        >
          <div className="bg-[#1F3A5F] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              {/* Icono de Check en SVG */}
              <div className="bg-green-500/20 p-2 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-medium text-sm sm:text-base leading-tight">
                {message}
              </p>
            </div>
            
            {/* Botón de cerrar en SVG */}
            <button 
              onClick={onClose}
              className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
              aria-label="Cerrar notificación"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/60">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Barra de progreso visual (Opcional pero muy profesional) */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-1 bg-green-400/40 absolute bottom-0 left-4 right-4 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}