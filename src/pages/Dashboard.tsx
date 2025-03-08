import React from 'react';
import PerformanceMetrics from '../components/performance/PerformanceMetrics';
import WorkforceCard from '../components/dashboard/WorkforceCard';
import TaskCard from '../components/tasks/TaskCard';
import WorkloadAnalytics from '../components/workforce/WorkloadAnalytics';
import AIInsights from '../components/performance/AIInsights';
import { mockUsers, mockTasks, mockWorkloadAnalysis, mockAIRecommendations } from '../data/mockData';

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor team performance and task progress</p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Metrics</h2>
        <PerformanceMetrics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Workforce Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockUsers.map(user => (
              <WorkforceCard key={user.id} user={user} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">AI Analysis</h2>
          <WorkloadAnalytics analysis={mockWorkloadAnalysis[0]} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Active Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">AI Recommendations</h2>
          <AIInsights recommendations={mockAIRecommendations} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;