/* eslint-disable linebreak-style */
import React from 'react';

export default function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-navColor" />
        <div className="w-4 h-4 rounded-full animate-pulse bg-navColor" />
        <div className="w-4 h-4 rounded-full animate-pulse bg-navColor" />
      </div>
    </div>
  );
}
