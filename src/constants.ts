export interface HealthApp {
  id: string;
  name: string;
  description: string;
  url: string;
  color: string;
  icon: string;
}

export const HEALTH_APPS: HealthApp[] = [
  {
    id: '1',
    name: 'Health Tracker ct007 server 1',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: 'https://health-tracker-lab-analyzer-01.vercel.app',
    color: 'from-emerald-400 to-cyan-500',
    icon: 'Activity',
  },
  {
    id: '2',
    name: 'Health Tracker hc001 server 2',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: 'https://health-tracker-lab-analyzer-02.vercel.app',
    color: 'from-rose-400 to-orange-500',
    icon: 'HeartPulse',
  },
  {
    id: '3',
    name: 'Health Tracker server 3',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-violet-400 to-fuchsia-500',
    icon: 'Sparkles',
  },
  {
    id: '4',
    name: 'Health Tracker server 4',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-amber-400 to-yellow-500',
    icon: 'Apple',
  },
  {
    id: '5',
    name: 'Health Tracker server 5',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-indigo-400 to-blue-500',
    icon: 'Brain',
  },
  {
    id: '6',
    name: 'Health Tracker server 6',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-lime-400 to-green-500',
    icon: 'Dumbbell',
  },
  {
    id: '7',
    name: 'Health Tracker server 7',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-sky-400 to-indigo-500',
    icon: 'Moon',
  },
  {
    id: '8',
    name: 'Health Tracker server 8',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-teal-400 to-emerald-500',
    icon: 'Pill',
  },
  {
    id: '9',
    name: 'Health Tracker server 9',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-red-400 to-rose-500',
    icon: 'Stethoscope',
  },
  {
    id: '10',
    name: 'Health Tracker server 10',
    description: 'ประวัติสุขภาพ วิเคราะห์ ตอบคำถาม',
    url: '#',
    color: 'from-blue-400 to-cyan-500',
    icon: 'Droplets',
  },
];
