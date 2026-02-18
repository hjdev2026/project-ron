import React from 'react';
import { motion } from 'framer-motion';
import { useRonStore } from '../store/useRonStore';
import SpeechBubble from './SpeechBubble';

const Ron: React.FC = () => {
  // 스토어에서 데이터와 액션 가져오기
  const { ron, updatePosition, setStatus, say, stopTalking } = useRonStore();

  const handleRonClick = () => {
    if (ron.isTalking) {
      stopTalking();
    } else {
      // 클릭 시 대사 출력
      say("안녕! 나는 론이야. 오늘 우리 뭐하고 놀까?");
      // 3초 뒤 자동 닫기
      setTimeout(() => stopTalking(), 3000);
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      // 드래그 중일 때의 위치를 실시간으로 스토어에 반영하고 싶다면 onDrag를 사용하세요.
      onDragStart={() => setStatus('MOVING')}
      onDragEnd={(_, info) => {
        updatePosition(info.point.x, info.point.y);
        setStatus('IDLE');
      }}
      // 스토어의 좌표를 기준으로 움직임
      animate={{ x: ron.position.x, y: ron.position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed cursor-grab active:cursor-grabbing z-50"
      style={{ left: 0, top: 0 }} 
    >
      {/* 1. 말풍선 영역: 론의 몸통(relative)의 밖 상단에 배치됨 */}
      <SpeechBubble message={ron.currentMessage} isVisible={ron.isTalking} />

      {/* 2. 론의 몸통 디자인 */}
      <div 
        onClick={handleRonClick}
        className="relative w-24 h-24 bg-white rounded-3xl shadow-2xl border-4 border-slate-200 flex items-center justify-center overflow-hidden"
      >
        {/* 상태별 배경색 변화 (Glitch 효과) */}
        <div className={`absolute inset-0 opacity-10 ${ron.status === 'GLITCH' ? 'bg-purple-500 animate-pulse' : 'bg-sky-100'}`} />

        {/* 눈 애니메이션 */}
        <div className="flex gap-3 z-10">
          <motion.div 
            animate={{ scaleY: [1, 0.1, 1] }} 
            transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 1] }}
            className="w-3 h-3 bg-slate-800 rounded-full" 
          />
          <motion.div 
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 1] }}
            className="w-3 h-3 bg-slate-800 rounded-full" 
          />
        </div>

        {/* 에너지 바 */}
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-400 transition-all duration-500" 
            style={{ width: `${ron.energy}%` }} 
          />
        </div>
      </div>

      {/* 3. 이름표 */}
      <div className="mt-2 text-center pointer-events-none">
        <span className="bg-slate-800/80 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
          {ron.name}
        </span>
      </div>
    </motion.div>
  );
};

export default Ron;