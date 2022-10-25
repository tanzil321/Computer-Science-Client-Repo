import React, { useContext } from 'react';

import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <section>
      <div className=''>
      <img  src={require("../assets/home.jpg")} alt="" />
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
          
        
          <h1 
          
          className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900'>
            
            This Is Home
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>
            
          </p>
          
        </div>
      </div>
    </section>
    );
};

export default Home;