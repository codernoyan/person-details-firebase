/* eslint-disable linebreak-style */
import React from 'react';

function Navbar() {
  return (
    <div className="bg-navColor p-2 text-white">
      <nav className="flex justify-between items-center">
        <h2 className="text-xl font-bold">SECQURAISE</h2>
        <ul className="flex gap-4 items-center">
          <li className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </li>
          <li className="font-semibold bg-box1Color px-4 py-1">25</li>
          <li className="font-semibold bg-box2Color px-4 py-1">25</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
