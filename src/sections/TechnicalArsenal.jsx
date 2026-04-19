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
         <div className="md:col-span-2 bg-[#0a0a0b] border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[70px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide">Software Engineering</h3>
                  <p className="text-zinc-400 font-medium">Architecting robust digital solutions.</p>
                </div>
                <div className="hidden sm:flex p-2 bg-transparent border-2 border-primary/80 rounded-lg shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
             </div>

             <div className="flex flex-wrap gap-3 relative z-10">
                {["Full-Stack Development", "Mobile Applications", "SQL & Database Architecture", "API Integration"].map((item, i) => (
                  <span key={i} className="bg-[#121213] border border-zinc-800 text-xs text-zinc-300 font-medium px-5 py-2.5 rounded-full whitespace-nowrap">
                    {item}
                  </span>
                ))}
             </div>
         </div>

         {/* Design & CAD Node */}
         <div className="md:col-span-1 bg-[#0a0a0b] border border-border rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
             
             <div className="flex items-start gap-4 mb-10 relative z-10">
                <PenTool className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-wide">Design & CAD</h3>
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
         <div className="md:col-span-3 bg-[#0a0a0b] border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
             <div className="p-5 bg-[#121213] border border-zinc-800 rounded-[1.25rem] shrink-0 shadow-lg">
               <Settings className="w-8 h-8 text-primary" />
             </div>
             <div>
               <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide">Operations & Infrastructure</h3>
               <p className="text-zinc-400 font-medium max-w-3xl leading-relaxed text-sm md:text-base">
                 Bridging the gap between physical assets and digital workflows through comprehensive IT Support and strategic Asset Management.
               </p>
             </div>
         </div>
      </div>


    </SectionWrapper>
  );
}
