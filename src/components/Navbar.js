import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    useEffect(() => {
      console.log('Navbar',JSON.stringify(user));
    },[user])

  const handleLogout = () => {
    logout()
      .then(toast.warning('User logged out!'))
      .catch(error => console.log(error))
  }
    return (
        <header className='text-gray-600 body-font bg-slate-200'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-gray-900 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'></path>
          </svg>
          <span className='ml-3 text-xl italic font-mono'>Computer<br/>Science<span className='text-red-300'>.org</span></span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900'>
            Home
          </Link>
          <Link to='/course' className='mr-5 hover:text-gray-900'>
            Courses
          </Link>
          <Link to='/faq' className='mr-5 hover:text-gray-900'>
            FAQ
          </Link>
          <Link to='/blog' className='mr-5 hover:text-gray-900'>
            Blog
          </Link>

            <label htmlFor="check" className='cursor-pointer bg-slate-400 relative mr-5 w-20 h-10 rounded-full '>
              <input type="checkbox" id="check" className='sr-only peer' />
              <span className='w-2/5 h-4/5 bg-slate-600 absolute rounded-full left-1 top-1 peer-checked:bg-white peer-checked:left-11 transition-all duration-500'></span>
            </label>

          {user?.uid ? (
            <>
            <span className='mr-5 text-purple-900 font-bold'> <h1> {user?.uid? user?.displayName : 'user'}</h1></span>
            <div>
                    {
                        user ? <img src={user?.photoURL} title={user?.displayName} style={{
                            width: '40px',
                            borderRadius: '50%',
                            marginRight:'10px'
                        }} alt="" /> : ''
                    }
                </div>
              <button
                onClick={handleLogout}
                className='inline-flex items-center bg-slate-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0'
              >
                Logout
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </>
          ) : (
            <>
            <Link to='/login' className='inline-flex  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'>
              Login
            </Link>
            <Link to='/register' className='inline-flex  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'>
            Register
          </Link>
            </>
          )}
        </nav>
        <nav>
        
        </nav>
      </div>
    </header>
    
    );
};

export default Navbar;