import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CanvasPage from './pages/CanvasPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* 전체 화면을 감싸는 컨테이너 */}
      <div className="w-screen h-screen">
        <Routes>
          {/* 메인 캔버스 화면 */}
          <Route path="/" element={<CanvasPage />} />
          
          {/* 나중에 추가될 수 있는 페이지들 (예: 설정, 상점 등) */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;