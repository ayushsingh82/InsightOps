import React from 'react';
import data from './data.json';


const List = () => {
  return (
    <div className='bg-black min-h-screen'>
    <div className='relative'>
    <h1 className='text-center text-xl font-bold text-white py-[20px]'>
      Get Stats of Restaking Operator by Address
    </h1>
    <button className='absolute top-[20px] right-[20px] border border-2 border-white text-xl text-purple-500 px-[10px] py-[4px] rounded-lg
     font-medium gradient-border'>
     <a href='/operator'>  Click to get data</a>
    </button>
  </div>
  
      <table className="min-w-full bg-black mt-[40px] border-2 gradient-border">
        <thead>
          <tr>
            <th className="w-1/3 py-2 text-purple-500 bg-black text-xl">Puffer Module</th>
            <th className="w-1/3 py-2 text-purple-500 bg-black text-xl">Puffer Module Address</th>
            <th className="w-1/3 py-2 text-purple-500 bg-black text-xl">Restaking Operator Address</th>
          </tr>
        </thead>
        <tbody>
          {data.modules.map((module, index) => (
            <tr key={index} className="text-white">
              <td className="border border-white px-4 py-2 text-purple-500">{module.PufferModule}</td>
              <td className="border border-white px-4 py-2">{module.PufferModuleAddress}</td>
              <td className="border border-white px-4 py-2">{module.RestakingOperatorAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
      
