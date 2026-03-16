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
    name: 'Health Tracker & Lab Analyzer Firebase',
    description: 'รวมประวัติสุขภาพ วิเคราะห์ และตอบคำถาม 1',
    url: 'https://health-tracker-lab-analyzer-firebas.vercel.app',
    color: 'from-emerald-400 to-cyan-500',
    icon: 'Activity',
  },
  {
    id: '2',
    name: 'Health Tracker & Lab Analyzer thunyaluk',
    description: 'รวมประวัติสุขภาพ วิเคราะห์ และตอบคำถาม ธัญลักษณ์',
    url: 'https://health-tracker-lab-analyzer-thunyaluk.onrender.com',
    color: 'from-rose-400 to-orange-500',
    icon: 'HeartPulse',
  },
  {
    id: '3',
    name: 'Daily Wellness Monitor',
    description: 'ติดตามกิจวัตรประจำวันเพื่อสุขภาพที่ดีขึ้น',
    url: '#',
    color: 'from-violet-400 to-fuchsia-500',
    icon: 'Sparkles',
  },
  {
    id: '4',
    name: 'Nutrition & Diet Planner',
    description: 'วางแผนการรับประทานอาหารและคำนวณแคลอรี่',
    url: '#',
    color: 'from-amber-400 to-yellow-500',
    icon: 'Apple',
  },
  {
    id: '5',
    name: 'Mental Health Journal',
    description: 'บันทึกความรู้สึกและดูแลสุขภาพจิตรายวัน',
    url: '#',
    color: 'from-indigo-400 to-blue-500',
    icon: 'Brain',
  },
  {
    id: '6',
    name: 'Exercise & Fitness Tracker',
    description: 'บันทึกการออกกำลังกายและสถิติการเคลื่อนไหว',
    url: '#',
    color: 'from-lime-400 to-green-500',
    icon: 'Dumbbell',
  },
  {
    id: '7',
    name: 'Sleep Quality Analyzer',
    description: 'วิเคราะห์คุณภาพการนอนหลับและเวลาพักผ่อน',
    url: '#',
    color: 'from-sky-400 to-indigo-500',
    icon: 'Moon',
  },
  {
    id: '8',
    name: 'Medication Reminder',
    description: 'ระบบแจ้งเตือนการทานยาและประวัติการรักษา',
    url: '#',
    color: 'from-teal-400 to-emerald-500',
    icon: 'Pill',
  },
  {
    id: '9',
    name: 'Blood Pressure Log',
    description: 'ติดตามระดับความดันโลหิตและชีพจร',
    url: '#',
    color: 'from-red-400 to-rose-500',
    icon: 'Stethoscope',
  },
  {
    id: '10',
    name: 'Hydration Tracker',
    description: 'บันทึกการดื่มน้ำและแจ้งเตือนระหว่างวัน',
    url: '#',
    color: 'from-blue-400 to-cyan-500',
    icon: 'Droplets',
  },
];
