import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/layout/TopNav';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Performance from './pages/Performance';
import Meetings from './pages/Meetings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopNav />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/meetings" element={<Meetings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;