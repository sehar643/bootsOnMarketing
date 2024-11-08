import React from 'react';

const Home = () => {
  return (
    <div
      className="relative w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('src/assets/images/homepagebanner.jpg')`, // Ensure this path is correct
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Text content with responsive positioning */}
      <div className="relative pt-16 z-10 text-white flex flex-col lg:items-start text-center lg:text-left">
        <p className="text-2xl font-semibold text-white lg:text-gray-300">WE'D LOVE</p>
        <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold">
          <span className="text-cyan-500">TO HEAR ABOUT</span> <br />
          <span className="text-white">YOUR PROJECT</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
