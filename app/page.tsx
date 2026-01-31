"use client";

import Header from "./components/Header";
import About from "./components/About";
import Image from "next/image";
import boy from "../public/boy.svg"
import Experience from "./components/Experience";
import React, { useRef } from 'react';

export default function Home() {
  // 1. Create a ref for the target section
  const contactSection = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    // 2. Use the scrollIntoView API
    contactSection.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };


  return (
    <div className='bg-white h-screen overflow-auto'>
      <Header scrollToSection={scrollToSection}/>
      <About />
      <Experience ref={contactSection} />
    </div>
  );
}
