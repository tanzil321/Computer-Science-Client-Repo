import React from 'react';

const RightSideNav = ({cart}) => {
    let {course_details,course_name,picture,rating,time,_id}=cart
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={picture}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{course_name}</p>
      <p className='text-gray-700 '>Duration: {time} year</p>
      <p className='text-gray-700 font-bold'>User Rating: {rating}</p>
      <button
        // onClick={() => handleAddToCart(product)}
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
      >
        Details
      </button>
    </div>
    );
};

export default RightSideNav;