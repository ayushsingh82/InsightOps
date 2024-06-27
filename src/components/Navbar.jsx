import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';


const gradientStyle = {
  background: 'linear-gradient(to right, #45E1E5, #0052FF, #B82EA4, #FF9533, #7FD057, #45E1E5)',
  height: '4px',
  width: '100%',
  border: 'none',
};

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
          <div className='font-bold text-2xl text-purple-400'>
            <a href='/'>Puffer</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center'>
            <h1 className='font-medium text-lg text-white'>
              <a href='/'>Module</a>
            </h1>
            <h1 className='font-medium text-lg text-white'>
              <a href='/'>List</a>
            </h1>
          </div>
          <div className='text-white'>
           <ConnectButton/>
          </div>
        </div>
        <div style={gradientStyle} />
      </nav>
    );
  }
  

export default Navbar