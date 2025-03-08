import React from 'react';
import PerformanceMetrics from '../components/performance/PerformanceMetrics';
import { BarChart, LineChart } from 'lucide-react';

const Performance = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Performance Analytics</h1>
        <p className="text-gray-600">Track and analyze team performance metrics</p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Key Metrics</h2>
        <PerformanceMetrics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Productivity Trend</h3>
            <BarChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <span className="text-gray-500">Productivity Chart Placeholder</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Growth Analysis</h3>
            <LineChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <span className="text-gray-500">Growth Chart Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;