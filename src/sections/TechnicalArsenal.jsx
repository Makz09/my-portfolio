import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SkillCard from '../components/SkillCard';
import { portfolioData } from '../data/portfolioData';
import { Terminal, PenTool, Settings } from 'lucide-react';

export default function TechnicalArsenal() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="expertise">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Technical <span className="text-[#ff2a2a]">Arsenal</span></h2>
        <p className="text-zinc-400 max-w-xl text-lg">
          A curated matrix of capabilities across engineering, design, and operations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-24 items-stretch">
         {/* Software Engineering Node */}
         <div className="md:col-span-2 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] transition-all duration-300">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[70px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff2a2a]/0 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2 group-hover:bg-[#ff2a2a]/20 transition-all duration-700"></div>
             
             <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.8)] transition-all duration-300">Software Engineering</h3>
                  <p className="text-zinc-400 font-medium">Architecting robust digital solutions.</p>
                </div>
                <div className="hidden sm:flex p-2 bg-transparent border-2 border-primary/80 rounded-lg shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
             </div>

             <div className="flex flex-wrap gap-3 relative z-10">
                {["Full-Stack Development", "Mobile Applications", "SQL & Database Architecture", "API Integration"].map((item, i) => (
                  <span key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/10 text-xs text-zinc-300 font-medium px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-[#ff2a2a]/20 hover:text-white transition-colors duration-300 cursor-default shadow-[0_0_15px_rgba(255,42,42,0.05)]">
                    {item}
                  </span>
                ))}
             </div>
         </div>

         {/* Design & CAD Node */}
         <div className="md:col-span-1 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] transition-all duration-300">
             
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff2a2a]/0 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2 group-hover:bg-[#ff2a2a]/20 transition-all duration-700"></div>
             <div className="flex items-start gap-4 mb-10 relative z-10">
                <PenTool className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-wide group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.8)] transition-all duration-300">Design & CAD</h3>
                  <p className="text-zinc-400 font-medium text-sm leading-relaxed">Precision drafting and visual communication.</p>
                </div>
             </div>

             <div className="flex flex-col gap-4 relative z-10">
                {["AutoCAD 2D/3D", "Adobe Photoshop", "Adobe Illustrator"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                     <span className="text-sm font-bold text-zinc-300 tracking-wide">{item}</span>
                  </div>
                ))}
             </div>
         </div>

         {/* Operations & Infrastructure Node */}
         <div className="md:col-span-3 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] transition-all duration-300">
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff2a2a]/0 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2 group-hover:bg-[#ff2a2a]/15 transition-all duration-700 z-0"></div>
             <div className="p-5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1.25rem] shrink-0 shadow-lg group-hover:bg-[#ff2a2a]/10 transition-colors duration-300 relative z-10">
               <Settings className="w-8 h-8 text-primary" />
             </div>
             <div className="relative z-10">
               <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.8)] transition-all duration-300">Operations & Infrastructure</h3>
               <p className="text-zinc-400 font-medium max-w-3xl leading-relaxed text-sm md:text-base">
                 Bridging the gap between physical assets and digital workflows through comprehensive IT Support and strategic Asset Management.
               </p>
             </div>
         </div>
      </div>


    </SectionWrapper>
  );
}
