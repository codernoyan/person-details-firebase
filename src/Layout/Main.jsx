/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSideBar';
import Navbar from '../Components/Navbar';
import RightSideBar from '../Components/RightSideBar';

function Main() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <LeftSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default Main;
