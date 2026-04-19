import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-5 flex items-center ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <Link to="home" smooth spy className="cursor-pointer">
          <img src="/cld_logo.png" alt="My Logo" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform" />
        </Link>
        <ul className="hidden lg:flex flex-wrap justify-center gap-x-4 lg:gap-x-6 xl:gap-x-8 text-[11px] xl:text-[13px] font-bold text-zinc-500">
          <li><Link to="about" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">About Me</Link></li>
          <li><Link to="expertise" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">My Expertise</Link></li>
          <li><Link to="experience" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">My Jobs</Link></li>
          <li><Link to="academic" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">My Academics</Link></li>
          <li><Link to="skills" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">My Skills</Link></li>
          <li><Link to="approach" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">My Approach</Link></li>
          <li><Link to="projects" offset={-80} smooth spy activeClass="!text-primary" className="cursor-pointer hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">My Projects</Link></li>
        </ul>
        <Link to="contact" smooth className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-colors flex items-center gap-2">
          GET IN TOUCH <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
  );
}
