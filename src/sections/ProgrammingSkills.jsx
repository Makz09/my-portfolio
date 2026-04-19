import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SkillCard from '../components/SkillCard';
import { portfolioData } from '../data/portfolioData';

export default function ProgrammingSkills() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" className="!pt-6">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">My <span className="text-[#ff2a2a]">Programming</span> Skillset</h2>
        <p className="text-zinc-400 max-w-2xl text-lg mb-10">
          A curated selection of languages, frameworks, and tools utilized to architect and build digital experiences. Focusing on scalable performance and immersive interactions.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <SkillCard title="Languages" items={skills.languages} layout="flex" className="md:col-span-1" />
        <SkillCard title="Frameworks & Libraries" items={skills.frameworks} layout="flex" className="md:col-span-1" />
        <SkillCard title="Databases" items={skills.databases} layout="flex" className="md:col-span-1" />
        
        <SkillCard title="Tools & Platforms" items={skills.tools} layout="flex" className="md:col-span-2" />
        <SkillCard title="Authentication" items={skills.auth} layout="flex" className="col-span-1" />
        
        <SkillCard title="Others" items={skills.others} layout="flex" className="md:col-span-3" />
      </div>
    </SectionWrapper>
  );
}
