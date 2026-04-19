import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import TiltWidget from './TiltWidget';

export default function TimelineItem({ data, align = "left", isLast = false, isEducation = false }) {
  return (
    <>
      {/* Desktop View */}
      <div className={`hidden md:flex w-full ${align === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center relative mb-16 last:mb-0 group`}>
        {/* Date side */}
        <div className={`w-1/2 flex px-12 ${align === 'right' ? 'justify-start' : 'justify-end'}`}>
          <span className={`inline-flex items-center gap-2 text-primary font-bold ${isEducation ? 'text-4xl translate-y-2' : 'text-lg'} ${align === 'right' ? 'text-left' : 'text-right flex-row-reverse'}`}>
            <FaCalendarAlt className={`${isEducation ? 'text-2xl mt-1' : 'text-[1.1rem]'} opacity-90`} />
            <span className="inline-block">
              {isEducation ? (
                <>
                  <span className="block text-2xl font-normal opacity-80 text-white text-right">{data.dates.split(' ')[0] + ' ' + data.dates.split(' ')[1]}</span>
                  {data.dates.split(' ')[2] + ' ' + data.dates.split(' ')[3] + ' ' + data.dates.split(' ')[4]}
                </>
              ) : <span className="text-white">{data.dates}</span>}
            </span>
          </span>
        </div>

        {/* Center line and node */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[-4rem] flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-background z-10 shadow-[0_0_15px_rgba(229,9,20,0.8)] mt-6"></div>
          {!isLast && <div className="w-px h-full bg-gradient-to-b from-primary/50 to-primary/0 mt-2"></div>}
        </div>

        {/* Card side */}
        <div className={`w-1/2 px-12 flex ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          <TiltWidget>
            <div className="bg-[#0d0d0f] border border-zinc-800 p-8 rounded-2xl w-full group-hover:border-[#ff2a2a]/80 transition-colors shadow-[0_0_20px_rgba(255,42,42,0.05)] group-hover:shadow-[0_0_30px_rgba(255,42,42,0.3)] h-full">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.6)] transition-all duration-300">{data.title}</h4>
              <p className="text-sm text-zinc-400 font-medium">{data.company || data.institution}</p>
            </div>
          </TiltWidget>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative pl-8 mb-12 last:mb-0">
        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(229,9,20,0.8)] z-10"></div>
        {!isLast && <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gradient-to-b from-primary/50 to-primary/0"></div>}
        
        <span className="text-primary font-bold mb-3 text-[13px] flex items-center gap-2">
          <FaCalendarAlt className="opacity-90" />
          {isEducation ? (
            <>
              <span className="text-zinc-300 font-medium">{data.dates.split(' ')[0] + ' ' + data.dates.split(' ')[1]}</span>
              {' ' + data.dates.split(' ')[2] + ' ' + data.dates.split(' ')[3] + ' ' + data.dates.split(' ')[4]}
            </>
          ) : <span className="text-zinc-300 font-medium">{data.dates}</span>}
        </span>
        <TiltWidget>
          <div className="bg-[#0d0d0f] border border-zinc-800 p-6 rounded-xl hover:border-[#ff2a2a]/80 transition-colors shadow-[0_0_20px_rgba(255,42,42,0.05)] hover:shadow-[0_0_30px_rgba(255,42,42,0.3)] group hover:scale-[1.02] duration-300">
            <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#ff2a2a] transition-colors">{data.title}</h4>
            <p className="text-sm text-zinc-400">{data.company || data.institution}</p>
          </div>
        </TiltWidget>
      </div>
    </>
  );
}
