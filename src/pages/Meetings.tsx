import React from 'react';
import { Calendar, Video, Plus } from 'lucide-react';
import { Meeting } from '../types';

const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Sprint Planning',
    date: '2025-03-20T10:00:00',
    participants: ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'],
    actionItems: ['Review backlog', 'Set sprint goals', 'Assign tasks'],
    decisions: ['Prioritize user authentication', 'Postpone API updates']
  },
  {
    id: '2',
    title: 'Design Review',
    date: '2025-03-21T14:00:00',
    participants: ['Emily Rodriguez', 'Sarah Johnson'],
    actionItems: ['Update style guide', 'Create component library'],
    decisions: ['Adopt new color scheme', 'Implement design system']
  }
];

const Meetings = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Meetings</h1>
          <p className="text-gray-600">Schedule and manage team meetings</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Schedule Meeting
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Meetings</h2>
            <div className="space-y-6">
              {mockMeetings.map(meeting => (
                <div key={meeting.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">{meeting.title}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {new Date(meeting.date).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                      <Video className="h-5 w-5" />
                      Join
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Participants: {meeting.participants.join(', ')}
                    </p>
                    {meeting.actionItems && (
                      <div>
                        <p className="text-sm font-medium text-gray-700">Action Items:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                          {meeting.actionItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Schedule</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meeting Title
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter meeting title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date & Time
              </label>
              <input
                type="datetime-local"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Participants
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Add participants"
              />
            </div>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;