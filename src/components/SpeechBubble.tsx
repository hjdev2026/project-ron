import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  message: string;
  isVisible: boolean;
}

const SpeechBubble: React.FC<Props> = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: -20, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 z-50"
        >
          <div className="bg-white p-4 rounded-2xl shadow-xl border-2 border-slate-100 relative">
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {message}
            </p>
            {/* 말풍선 꼬리 */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-slate-100 rotate-45" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpeechBubble;