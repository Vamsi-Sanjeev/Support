import { User, Task, Meeting, PerformanceMetric, WorkloadAnalysis, AIRecommendation } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    workload: 85,
    efficiency: 92,
    engagementScore: 88,
    workHours: 45,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    tasks: ['1', '4', '7']
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    workload: 65,
    efficiency: 85,
    engagementScore: 90,
    workHours: 42,
    skills: ['Product Strategy', 'Agile', 'User Research'],
    tasks: ['2', '5']
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    workload: 45,
    efficiency: 95,
    engagementScore: 92,
    workHours: 38,
    skills: ['UI Design', 'User Research', 'Prototyping'],
    tasks: ['3', '6']
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Update User Authentication',
    description: 'Implement new security features for user authentication system',
    priority: 'high',
    assignee: 'Sarah Johnson',
    status: 'in-progress',
    dueDate: '2025-03-20',
    estimatedHours: 16,
    complexity: 8,
    tags: ['security', 'backend']
  },
  {
    id: '2',
    title: 'Design System Review',
    description: 'Review and update component library documentation',
    priority: 'medium',
    assignee: 'Emily Rodriguez',
    status: 'todo',
    dueDate: '2025-03-25',
    estimatedHours: 8,
    complexity: 5,
    tags: ['design', 'documentation']
  },
  {
    id: '3',
    title: 'Sprint Planning',
    description: 'Prepare and conduct Q2 sprint planning session',
    priority: 'high',
    assignee: 'Michael Chen',
    status: 'completed',
    dueDate: '2025-03-15',
    estimatedHours: 4,
    actualHours: 3.5,
    complexity: 4,
    tags: ['planning', 'management']
  }
];

export const mockPerformanceMetrics: PerformanceMetric[] = [
  {
    userId: '1',
    metric: 'efficiency',
    value: 92,
    timestamp: new Date().toISOString(),
    trend: 'increasing'
  },
  {
    userId: '1',
    metric: 'workload',
    value: 85,
    timestamp: new Date().toISOString(),
    trend: 'increasing'
  },
  {
    userId: '2',
    metric: 'engagement',
    value: 90,
    timestamp: new Date().toISOString(),
    trend: 'stable'
  }
];

export const mockWorkloadAnalysis: WorkloadAnalysis[] = [
  {
    userId: '1',
    currentWorkload: 85,
    burnoutRisk: 'high',
    recommendations: [
      'Consider redistributing upcoming tasks',
      'Schedule a break after current sprint',
      'Review project deadlines'
    ],
    taskDistribution: [
      { category: 'Development', hours: 30 },
      { category: 'Meetings', hours: 8 },
      { category: 'Code Review', hours: 7 }
    ]
  },
  {
    userId: '2',
    currentWorkload: 65,
    burnoutRisk: 'low',
    recommendations: [
      'Available for additional tasks',
      'Consider mentoring opportunities'
    ],
    taskDistribution: [
      { category: 'Project Management', hours: 20 },
      { category: 'Meetings', hours: 15 },
      { category: 'Documentation', hours: 7 }
    ]
  }
];

export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: '1',
    type: 'workload_balance',
    description: 'High burnout risk detected for Sarah Johnson',
    priority: 'high',
    impact: 'Potential project delays and quality issues',
    suggestedActions: [
      'Redistribute 2 upcoming tasks to Michael Chen',
      'Schedule a team capacity review meeting',
      'Adjust sprint commitments'
    ],
    timestamp: new Date().toISOString()
  },
  {
    id: '2',
    type: 'skill_development',
    description: 'Learning opportunity identified for Emily Rodriguez',
    priority: 'medium',
    impact: 'Enhanced team capabilities in UI automation',
    suggestedActions: [
      'Enroll in Advanced UI Animation course',
      'Pair with Sarah on upcoming frontend tasks',
      'Schedule knowledge sharing session'
    ],
    timestamp: new Date().toISOString()
  }
];

export const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Sprint Planning',
    date: '2025-03-20T10:00:00',
    participants: ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'],
    actionItems: ['Review backlog', 'Set sprint goals', 'Assign tasks'],
    decisions: ['Prioritize user authentication', 'Postpone API updates'],
    keyTakeaways: [
      'Focus on security features',
      'Need to reduce technical debt',
      'Team capacity is at 85%'
    ],
    followUpTasks: []
  },
  {
    id: '2',
    title: 'Design Review',
    date: '2025-03-21T14:00:00',
    participants: ['Emily Rodriguez', 'Sarah Johnson'],
    actionItems: ['Update style guide', 'Create component library'],
    decisions: ['Adopt new color scheme', 'Implement design system'],
    keyTakeaways: [
      'New design system will improve consistency',
      'Need to document component usage',
      'Plan for accessibility improvements'
    ],
    followUpTasks: []
  }
];