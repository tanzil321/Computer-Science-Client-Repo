import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

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

          {user?.uid ? (
            <>
            <span className='mr-5 text-purple-900 font-bold'> {user?.displayName}</span>
              {/* <Link to='/profile' className='mr-5 hover:text-gray-900'>
                Profile
              </Link>
              <Link to='/wallet' className='mr-5 hover:text-gray-900'>
                Wallet
              </Link> */}
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
            <Link to='/login' className='inline-flex items-center bg-slate-400 border-0 py-1 px-3 focus:outline-none hover:bg-slate-500 rounded text-base mt-4 md:mt-0'>
              Login
            </Link>
          )}
        </nav>
        <nav>
          
        </nav>
      </div>
    </header>
    );
};

export default Navbar;