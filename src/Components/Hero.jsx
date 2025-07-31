import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import './Hero.css'; 

import heroimg from '../assets/heroimg.JPG' // use your actual path

function Hero() {
  const download = () => {
    window.open("https://drive.google.com/file/d/1zRzeTMpeKq_On9bgYRTsh0KOjd2CVb4p/view?usp=drive_link");
  };

  return (
    <div className="w-full min-h-screen max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center" id="home">
      
      {/* Left Side */}
      <div className='flex-1 mt-10 p-2'>
        <div className='text-white font-semibold text-2xl mt-16'>
          <h6><span style={{ color: '#FFFF00' }}>{"</>"} </span>Hello, I'm</h6>
        </div>

        <div className='font-bold text-5xl mt-3 p-2 text-white'>
          <h1>Swaminathan</h1>
          <h1>VK</h1>
        </div>

        <div className='text-white font-semibold ml-2 md:ml-8 text-3xl mt-4 flex items-center gap-2'>
          <FaLaptopCode className='text-gray-700' />
          <h2>Full Stack Developer</h2>
        </div>

        <p className='mt-8 text-white font-medium text-base md:text-xl leading-relaxed text-justify'>
          Passionate about creating innovative web solutions with the MERN stack. Recently completed comprehensive Full Stack Development training from Guvi, and ready to bring creative ideas to life through code.
        </p>

        {/* Buttons */}
        <div className='flex gap-4 mt-8 flex-wrap'>
          <button
            onClick={download}
            className='bg-gray-200 hover:bg-gray-300 transition duration-200 px-4 py-2 rounded-md flex items-center gap-2 font-semibold'
          >
            <GrDownload />
            Download Resume
          </button>

          <a
            href="#contact"
            className='bg-gray-200 hover:bg-gray-300 transition duration-200 px-4 py-2 rounded-md font-semibold'
          >
            Let’s Connect
          </a>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4 mt-6'>
          <a href='https://github.com/SwaminathanVK' target="_blank" rel="noopener noreferrer"
            className='bg-gray-300 hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full text-xl'>
            <SiGithub />
          </a>
          <a href='https://www.linkedin.com/in/swaminathan-vk/' target="_blank" rel="noopener noreferrer"
            className='bg-gray-300 hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full text-xl'>
            <BsLinkedin />
          </a>
          <a href='mailto:iamswami19@gmail.com'
            className='bg-gray-300 hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full text-xl'>
            <MdOutlineAlternateEmail />
          </a>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
      <div className="relative bg-[#A259FF] rounded-[20px] shadow-xl p-4 animate-float">
    <img
      src={heroimg}
      alt="Swaminathan Hero"
      className="rounded-[20px] w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover"
    />

    {/* Top Right Yellow Dot */}
    {/* <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-yellow-400 border-2 border-white"></div> */}

    {/* Bottom Left Pink Dot */}
    {/* <div className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-pink-400 border-2 border-white"></div> */}
  </div>
  </div>
  </div>
  );
}

export default Hero;
