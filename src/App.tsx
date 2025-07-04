import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GeneratePage from './pages/GeneratePage';
import WebhookDetail from './components/WebhookDetail';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<><Header /><GeneratePage /></>} />
          <Route path="/v/:id" element={<WebhookDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;