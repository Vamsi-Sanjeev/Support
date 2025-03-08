export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  workload: number;
  efficiency: number;
  engagementScore: number;
  workHours: number;
  skills: string[];
  tasks: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  status: 'todo' | 'in-progress' | 'completed';
  dueDate: string;
  estimatedHours: number;
  actualHours?: number;
  complexity: number;
  dependencies?: string[];
  tags: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'burnout' | 'workload' | 'performance';
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  relatedTo?: {
    type: 'task' | 'meeting' | 'performance' | 'workload';
    id: string;
  };
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  participants: string[];
  summary?: string;
  actionItems: string[];
  decisions: string[];
  transcript?: string;
  keyTakeaways?: string[];
  followUpTasks?: Task[];
}

export interface PerformanceMetric {
  userId: string;
  metric: 'efficiency' | 'engagement' | 'workload' | 'quality';
  value: number;
  timestamp: string;
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface WorkloadAnalysis {
  userId: string;
  currentWorkload: number;
  burnoutRisk: 'low' | 'medium' | 'high';
  recommendations: string[];
  taskDistribution: {
    category: string;
    hours: number;
  }[];
}

export interface AIRecommendation {
  id: string;
  type: 'task_delegation' | 'workload_balance' | 'performance_improvement' | 'skill_development';
  description: string;
  priority: 'low' | 'medium' | 'high';
  impact: string;
  suggestedActions: string[];
  timestamp: string;
}