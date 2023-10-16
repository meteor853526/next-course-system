"use client";
import { getServerSession } from 'next-auth';
import { getSession ,useSession} from 'next-auth/react'

import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';
import  DotImg from  '../../images/dot.png'

import React, { useState } from "react";

function Image({ src, alt, className, width, height }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}

export default function SelectDropdown () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label htmlFor="cars" className="mr-2">
        选择一辆汽车:
      </label>
      <div className="relative inline-flex">
        <button onClick={toggleDropdown} className="custom-select-button">
          <span>选择</span>
          <div
            className={`${
              isOpen ? 'arrow-icon-open' : 'arrow-icon-closed'
            } absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <select id="cars" className="custom-select">
            <option value="volvo">Volvo</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
          </select>
        )}
      </div>
    </div>
  );
};