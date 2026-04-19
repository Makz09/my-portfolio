import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function SelectedWorks({ onViewArchive }) {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Selected <span className="text-[#ff2a2a]">Works</span></h2>
          <p className="text-zinc-400 text-lg">
            A curation of robust digital platforms engineered for scale and precise execution.
          </p>
        </div>
        <button 
          onClick={onViewArchive}
          className="text-sm font-bold tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2 mb-2 uppercase"
        >
          VIEW ARCHIVE <span>&rarr;</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.slice(0, 2).map((project, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 mb-6 overflow-hidden relative aspect-[4/3] flex flex-col justify-end group-hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,42,42,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
                  <div className="text-primary/50 text-4xl font-black italic">{project.title.substring(0,2).toUpperCase()}</div>
              </div>
              
              <div className="relative z-20 flex flex-wrap gap-3 px-4 pb-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-white/[0.03] backdrop-blur-md border border-white/10 text-xs text-white px-4 py-1.5 rounded-full font-bold shadow-[0_0_10px_rgba(255,42,42,0.1)] group-hover:bg-[#ff2a2a]/20 group-hover:border-[#ff2a2a]/80 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-zinc-400 text-[15px] leading-relaxed max-w-md">{project.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
