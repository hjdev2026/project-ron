import React from 'react';
import Ron from '../components/Ron';

const CanvasPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-50 relative overflow-hidden">
      {/* 배경 격자 무늬 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-slate-200 text-9xl font-black select-none">GLITCH WORLD</h1>
      </div>

      <Ron />

      {/* 하단 상태바 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/20 flex gap-8 z-10">
        <div className="text-xs font-bold text-slate-500">SYSTEM: ONLINE</div>
        <div className="text-xs font-bold text-slate-500">MODE: CANVAS</div>
      </div>
    </div>
  );
};

export default CanvasPage;