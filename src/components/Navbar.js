import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">My Apps</div>
        <div className="flex flex-col md:flex-row md:space-x-4 items-center mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search for contacts"
            className="px-3 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 mb-2 md:mb-0 w-full md:w-auto"
          />
          <button className="bg-red-500 px-4 py-2 rounded-md w-full md:w-auto mb-2 md:mb-0">Create</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md w-full md:w-auto">Home</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
