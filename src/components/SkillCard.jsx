import React from 'react';
import { Terminal, PenTool, Settings, Code2, Layers, Database, Wrench, ShieldCheck, Box } from 'lucide-react';

const iconMap = {
  "Software Engineering": Terminal,
  "Design & CAD": PenTool,
  "Operations & Infrastructure": Settings,
  "Languages": Code2,
  "Frameworks & Libraries": Layers,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Authentication": ShieldCheck,
  "Others": Box,
};

export default function SkillCard({ title, subtitle, items = [], layout = "grid", className = "" }) {
  const Icon = iconMap[title] || Box;

  return (
    <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] hover:animate-wobble transition-all duration-300 ${className}`}>
      
      {/* Corner ambient background glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ff2a2a]/5 rounded-full blur-3xl group-hover:bg-[#ff2a2a]/20 transition-all duration-500 pointer-events-none"></div>

      <div className="flex items-start gap-4 mb-6 relative z-10">
        <Icon className="w-6 h-6 text-[#ff2a2a] flex-shrink-0 mt-1 drop-shadow-[0_0_5px_rgba(255,42,42,0.5)]" />
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.6)] transition-all duration-300">{title}</h3>
          {subtitle && <p className="text-sm text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">{subtitle}</p>}
        </div>
      </div>
      
      {items.length > 0 && (
        <div className="mt-4 relative z-10">
          {layout === "flex" ? (
            <div className="flex flex-wrap gap-2.5">
              {items.map((item, idx) => (
                 <span key={idx} className="bg-white/[0.03] backdrop-blur-md border border-white/10 text-xs text-zinc-300 font-medium px-4 py-2 rounded-full whitespace-nowrap hover:bg-[#ff2a2a]/20 hover:border-[#ff2a2a]/80 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] cursor-default transition-all duration-300">
                   {item}
                 </span>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] inline-block group-hover:shadow-[0_0_8px_rgba(255,42,42,0.8)] group-hover:scale-125 group-hover/item:scale-150 group-hover/item:shadow-[0_0_12px_rgba(255,42,42,1)] transition-all duration-300"></span>
                    <span className="text-sm font-medium text-zinc-300 group-hover/item:text-[#ff2a2a] group-hover/item:drop-shadow-[0_0_5px_rgba(255,42,42,0.6)] transition-all duration-300">{item}</span>
                 </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
