import React from 'react';
import { Task } from '../../types';
import { Clock, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress': return <ArrowRight className="h-5 w-5 text-blue-500" />;
      default: return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
        </div>
        {getStatusIcon(task.status)}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <AlertCircle className={`h-4 w-4 ${getPriorityColor(task.priority)}`} />
          <span className="text-sm capitalize">{task.priority} Priority</span>
        </div>
        <div className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Assignee:</span>
            <span className="text-sm text-gray-600">{task.assignee}</span>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;