import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <SectionWrapper id="about">
      <div className="bg-surface border border-border rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden group">
        <div className="grid md:grid-cols-12 gap-12 relative z-10">
          
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{about.title}</h2>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 leading-snug">
              {about.subtitle}
            </h3>
            <div className="w-12 h-1 bg-primary mb-10"></div>
            
            <div className="flex flex-col gap-3">
              {about.skills.map((skill, idx) => (
                <div key={idx} className="bg-[#1a1a1c] border border-border text-[11px] md:text-xs text-zinc-400 font-bold px-5 py-3 rounded-full w-max max-w-full overflow-hidden text-ellipsis whitespace-nowrap tracking-wide hover:scale-[1.02] hover:translate-x-3 hover:border-primary/70 hover:bg-primary/10 hover:text-white hover:shadow-[0_5px_15px_rgba(229,9,20,0.25)] transition-all duration-300 ease-out cursor-pointer">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-zinc-400 text-[15px] leading-relaxed">
            {about.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
