"use client";

import Header from "./components/Header";
import About from "./components/About";
import Image from "next/image";
import boy from "../public/boy.svg"
import Experience from "./components/Experience";
import React, { useRef } from 'react';
import Skills from "./components/Skills";

export default function Home() {
  // 1. Create a ref for the target section
  const contactExperience = useRef<HTMLDivElement>(null);
  const contactSkills = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === 'Skills' && contactSkills.current) {
      contactSkills.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'Experience' && contactExperience.current) {
      contactExperience.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className='bg-white h-screen overflow-auto'>
      <Header scrollToSection={scrollToSection}/>
      <About />
      <Skills ref={contactSkills} />
      <Experience ref={contactExperience} />
    </div>
  );
}
