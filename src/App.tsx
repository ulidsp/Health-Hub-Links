/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Activity, 
  HeartPulse, 
  Sparkles, 
  Apple, 
  Brain, 
  Dumbbell, 
  Moon, 
  Pill, 
  Stethoscope, 
  Droplets,
  ChevronRight,
  Plus
} from "lucide-react";
import { HEALTH_APPS, type HealthApp } from "./constants";

const iconMap: Record<string, any> = {
  Activity,
  HeartPulse,
  Sparkles,
  Apple,
  Brain,
  Dumbbell,
  Moon,
  Pill,
  Stethoscope,
  Droplets,
};

export default function App() {
  const handleLinkClick = (url: string) => {
    if (url === "#") {
      alert("This is a placeholder link. You can edit it in src/constants.ts");
      return;
    }
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-100">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-rose-100/30 rounded-full blur-3xl" />
      </div>

      <main className="relative max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <HeartPulse className="w-8 h-8 text-emerald-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              <span className="text-blue-500">Health Tracker</span>
              <div className="text-gray-400">&</div>
              <div className="text-emerald-500">Lab Analyzer Application</div>
            </h1>
            <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
              ศูนย์รวมแอปพลิเคชันเพื่อการดูแลสุขภาพ<br/>
              <span className="text-orange-500">เชิญเลือก Server ที่ต้องการได้เลยครับ</span>
            </p>
          </motion.div>
        </header>

        {/* Links Grid/List */}
        <div className="space-y-4">
          {HEALTH_APPS.map((app, index) => {
            const IconComponent = iconMap[app.icon] || Activity;
            
            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => handleLinkClick(app.url)}
                className="group relative w-full flex items-center p-4 md:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 text-left overflow-hidden"
                id={`app-link-${app.id}`}
              >
                {/* Vibrant Gradient Accent */}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${app.color}`} />
                
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${app.color} text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                {/* Content */}
                <div className="ml-4 md:ml-6 flex-grow pr-8">
                  <h2 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {app.name}
                  </h2>
                  <p className="text-sm md:text-base text-slate-500 line-clamp-1">
                    {app.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute right-4 md:right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <ChevronRight className="w-6 h-6 text-emerald-500" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Footer / Add More Hint */}
        <footer className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="p-8 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50"
          >
            <p className="text-slate-400 text-sm mb-4">
              ต้องการเพิ่มแอปพลิเคชันใหม่?
            </p>
            <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-mono">
              <span>Edit</span>
              <code className="px-2 py-1 bg-white rounded border border-slate-200 text-emerald-600">src/constants.ts</code>
            </div>
          </motion.div>
          
          <p className="mt-8 text-slate-400 text-xs">
            © {new Date().getFullYear()} Health Hub Links • Built for Wellness
          </p>
        </footer>
      </main>
    </div>
  );
}
