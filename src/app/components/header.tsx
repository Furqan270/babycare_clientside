'use client'
import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import classnames from 'classnames';
import { useSidebarToggle } from '@/app/hooks/use-sidebar-toggle';
import UserNav from './usernav'; // Import the UserNav component
export default function Header() {
  const { toggleCollapse, invokeToggleCollapse } = useSidebarToggle();

  const sideBarToggle = () => {
    invokeToggleCollapse();
  };

  const [openProfile, setOpenProfile] = useState(false);

  const handleProfileClick = () => {
    setOpenProfile(prev => !prev);
  };
  const headerStyle = classnames("fixed bg-[#31353d] w-full z-0 px-4 shadow-5sm shadow-slate-500/40 pl-[20rem]", {
    ["sm:pl-[20rem]"]: !toggleCollapse,
    ["sm:pl-[5rem]"]: toggleCollapse,
  });

  return (
    <header className={headerStyle}>
      <div>
       
        <div className="flex items-center justify-between h-16">
          <button
            onClick={sideBarToggle}
            className="order-2 sm:order-1 bg-[#3a3f48] text-[#6e768e] hover:bg-white ml-2.5 rounded-md h-[25px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <BsList />
          </button>
    
          <div className="order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center">
            {/* Use an onClick function to toggle the profile */}
             
            <button className="order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center" onClick={handleProfileClick}>  </button>
            {/* Add the UserNav dropdown component */}
            {openProfile && <UserNav />}
          </div>

        </div>
      </div>
    </header>
  );
}
