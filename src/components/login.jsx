import React from 'react';
import backgroundImage from '../assets/bg.png';
import logoImage from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <section className="bg-[#141118] relative flex items-center justify-center h-screen">      
      <div className="flex items-center justify-center w-full ">        
        <div className="max-w-[304.83px]">
          <div className="absolute flex-shrink-0 ml-auto top-[25px] left-[25px]">
            <img
              src={logoImage}
              alt="Background"
              className="w-[72.99px] h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-white text-3xl font-medium leading-tight tracking-tight mb-2">Sign in to your account</h1>
            <span className="text-[#FFFAF6B2] font-normal text-sm leading-tight tracking-tight">
              Sign in below or {' '}
              <Link to="/signup" className="text-[#ED3F62] font-normal text-sm leading-tight tracking-tight">create an account</Link>              
            </span> 
          </div> <br/>

          <div className="items-center justify-center">
              <label className="text-[#FFFAF6B2] font-normal text-[12.56px] leading-[19.74px]">Mobile Number, Username or Email</label>
              <input type="text" className="bg-[#36323E] text-[#FFFAF6B2] p-2 rounded-[5px] border-[0.9px] focus:outline-none h-[43.09px] w-full" autoFocus required />
          </div> <br/>

          <div className="block items-center justify-between">
              <label className="text-[#FFFAF6B2] font-normal text-[12.56px] leading-[19.74px]">Password</label>
              <input type="password" className="bg-[#36323E] text-[#FFFAF6B2] p-2 rounded-[5px] border-[0.9px] focus:outline-none h-[43.09px] w-full" required />
          </div><br/>

          <div className="">
            <button className="w-full h-[46.68px] rounded-[89.76px] bg-[#EE5170] text-white hover:bg-[#d14464] focus:outline-none focus:ring-2 focus:ring-[#EE5170] focus:ring-offset-2 mx-auto">Login</button>
          </div>
          <Link to="/" className="text-[#ED3F62] mt-3 underline cursor-pointer flex items-center justify-center w-full font-normal text-sm leading-tight tracking-tight">Forgot Password</Link>
        </div>

      </div>

      <div className="w-[20%] h-full flex-shrink-0 ml-auto">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
    </section>
  )
}

export default login