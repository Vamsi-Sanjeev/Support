import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div className={`h-12 w-12 rounded-full flex items-center justify-center bg-blue-50`}>
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center">
      <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
      <span className="text-sm text-gray-500 ml-2">vs last month</span>
    </div>
  </div>
);

const PerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Team Productivity',
      value: '87%',
      change: 12,
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Growth Rate',
      value: '23%',
      change: 8,
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Team Capacity',
      value: '92%',
      change: -3,
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Avg. Response Time',
      value: '1.2h',
      change: 15,
      icon: <Clock className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default PerformanceMetrics;