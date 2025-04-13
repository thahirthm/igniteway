'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaBriefcase, FaUser, FaFileAlt } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], weight: "500" });

function NavbarF() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);
  const [manualSelect, setManualSelect] = useState(false); // Prevents conflict between click & scroll

  const tabs = [
    { name: 'Home', sectionId: 'Home', icon: <GoHomeFill /> },
    { name: 'About', sectionId: 'About', icon: <FaUser /> },
    { name: 'Services', sectionId: 'Projects', icon: <FaBriefcase /> },
    { name: 'Contact', sectionId: 'Contact', icon: <FaFileAlt /> }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (manualSelect) return;

      let currentTab = 'Home';
      for (const tab of tabs) {
        const section = document.getElementById(tab.sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            currentTab = tab.name;
            break;
          }
        }
      }
      setActiveTab(currentTab);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualSelect]);

  const handleTabClick = (tabName, sectionId) => {
    setActiveTab(tabName);
    setManualSelect(true);

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust this if needed
        behavior: 'smooth'
      });
      router.push(`#${sectionId}`, { scroll: false }); // Updates the URL
    }

    setTimeout(() => setManualSelect(false), 1000);
  };

  const getLeftPosition = (tabName) => {
    if (isMobile) {
      switch (tabName) {
        case 'Home': return 'calc(0% + 10px)';
        case 'About': return 'calc(23% + 2px)';
        case 'Projects': return 'calc(22% + 2px)';
        case 'Contact': return 'calc(22% + 2px)';
      }
    } else {
      switch (tabName) {
        case 'Home': return 'calc(0% + 25px)';
        case 'About': return 'calc(30% + 2px)';
        case 'Projects': return 'calc(32% + 2px)';
        case 'Contact': return 'calc(32% + 2px)';
      }
    }
  };

  return (
    <div className='fixed bottom-0 sm:top-0 left-1/2 transform -translate-x-1/2 z-50 mb-6 sm:pt-6 '>
      <div className={`${inter.className} flex items-center gap-3 bg-white/5 border border-gray-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg shadow-black`}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name, tab.sectionId)}
            className={`relative cursor-pointer text-sm text-white px-6 py-2 rounded-full ${
              activeTab === tab.name ? 'bg-zinc-500' : ''
            }`}
            style={{
              backdropFilter: 'blur(10px)',
              backgroundColor: activeTab === tab.name ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            <span className="hidden md:inline">{tab.name}</span>
            <span className="md:hidden">{tab.icon}</span>
            {activeTab === tab.name && (
              <motion.div
                layoutId="lamp"
                className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-8 h-1 bg-white rounded-t-md"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }}
                style={{ left: getLeftPosition(tab.name) }}
              >
                {/* Lamp elements */}
                <motion.div className="absolute w-8 h-10 bg-white rounded-full blur shadow-lg opacity-10 -top-3" />
                <motion.div className="absolute w-10 h-10 bg-white rounded-full blur shadow-lg opacity-20 -top-3 -left-1" />
                <motion.div className="absolute w-8 h-8 bg-white rounded-full blur shadow-lg opacity-10 -top-2" />
                <motion.div className="absolute w-6 h-6 bg-white rounded-full blur shadow-lg opacity-10 -top-1" />
              </motion.div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavbarF;
