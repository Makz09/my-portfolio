import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Compass, Shield, Rocket } from 'lucide-react';

export default function Methodology() {
  const blocks = [
    { num: '01', title: 'Planning & Strategy', desc: 'Defining core objectives, technical constraints, and user flows. We establish a blueprint that ensures architectural soundness before a single line of code is written.', icon: Compass },
    { num: '02', title: 'Development & Security', desc: 'Executing the blueprint using modern, performant stacks. Security protocols are woven into the fabric of the application, ensuring data integrity from the ground up.', icon: Shield },
    { num: '03', title: 'Testing, Launch & Support', desc: 'Rigorous quality assurance, load testing, and deployment orchestration. We provide ongoing monitoring and structural support post-launch to maintain peak performance.', icon: Rocket }
  ];

  return (
    <SectionWrapper id="approach">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">My Methodology & <br/><span className="text-primary">Architecture.</span></h2>
        <p className="text-zinc-400 text-lg max-w-xl">
          A systematic approach to building robust, scalable digital environments. Rooted in structured planning, rigorous engineering, and continuous refinement.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start pb-32">
        {blocks.map((block, idx) => {
          const Icon = block.icon;
          const mtClass = idx === 1 ? 'md:mt-16' : idx === 2 ? 'md:mt-32' : '';
          return (
            <div key={idx} className={`bg-[#0d0d0f] border border-zinc-800 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#ff2a2a]/80 hover:shadow-[0_0_30px_rgba(255,42,42,0.3)] hover:animate-wobble transition-colors duration-300 shadow-lg ${mtClass}`}>
              <span className="absolute top-2 right-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#ff2a2a]/25 group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.8)] transition-all duration-500">{block.num}</span>
              
              <div className="relative z-10">
                <Icon className="text-[#ff2a2a] w-8 h-8 mb-16" />
                <h3 className="text-2xl font-bold text-white group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.6)] transition-all duration-300 mb-6 pr-8">{block.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">{block.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
