import React, { useState } from 'react';
import TaskCard from '../components/tasks/TaskCard';
import { Plus, Filter } from 'lucide-react';
import { mockTasks } from '../data/mockData';
import { Task } from '../types';

const Tasks = () => {
  const [tasks] = useState<Task[]>(mockTasks);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredTasks = tasks.filter(task => 
    filterStatus === 'all' ? true : task.status === filterStatus
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Task Management</h1>
          <p className="text-gray-600">Manage and track team tasks</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          New Task
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border-gray-300 rounded-md text-gray-600 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Tasks</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;