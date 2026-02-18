import { create } from 'zustand';

// 론의 상태와 감정 타입 정의
type RonStatus = 'IDLE' | 'MOVING' | 'GLITCH' | 'FOCUS' | 'SLEEPING';
type RonEmotion = 'HAPPY' | 'SAD' | 'SURPRISED' | 'BORED';

interface RonState {
  ron: {
    name: string;
    position: { x: number; y: number };
    status: RonStatus;
    emotion: RonEmotion;
    energy: number;
    currentMessage : string;
    isTalking: boolean;
  };
    // 메세지 업데이트 액션
  say: (message:string) => void;
  stopTalking: () => void;
  // 위치를 업데이트하는 액션
  updatePosition: (x: number, y: number) => void;
  // 상태를 변경하는 액션
  setStatus: (status: RonStatus) => void;
}

export const useRonStore = create<RonState>((set) => ({
  ron: {
    name: "론",
    position: { x: 500, y: 300 }, // 초기 위치
    status: 'IDLE',
    emotion: 'HAPPY',
    energy: 100,
    currentMessage : "",
    isTalking : false,
  },
  say: (message) =>
    set((state) => ({
        ron: { ...state.ron, currentMessage: message, isTalking: true}
    })),
    stopTalking: () =>
        set((state) => ({
            ron : {...state.ron, isTalking:false}
        })),
  updatePosition: (x, y) =>
    set((state) => ({
      ron: { ...state.ron, position: { x, y }, status: 'MOVING' },
    })),
  setStatus: (status) =>
    set((state) => ({
      ron: { ...state.ron, status },
    })),
}));