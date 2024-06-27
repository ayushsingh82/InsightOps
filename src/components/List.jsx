import React from 'react';
import data from './data.json';

const List = () => {
  return (
    <div className='bg-black h-screen '>
      <h1 className='text-center text-xl font-bold text-white py-[20px]'>List</h1>
      <table className="min-w-full bg-black  mt-[20px] border-2 border-purple-500">
        <thead>
          <tr>
            <th className="w-1/3 py-2 text-white bg-black">Puffer Module</th>
            <th className="w-1/3 py-2 text-white bg-black">Puffer Module Address</th>
            <th className="w-1/3 py-2 text-white bg-black">Restaking Operator Address</th>
          </tr>
        </thead>
        <tbody>
          {data.modules.map((module, index) => (
            <tr key={index} className="text-white">
              <td className="border border-purple-500 px-4 py-2">{module.PufferModule}</td>
              <td className="border border-purple-500 px-4 py-2">{module.PufferModuleAddress}</td>
              <td className="border border-purple-500 px-4 py-2">{module.RestakingOperatorAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
