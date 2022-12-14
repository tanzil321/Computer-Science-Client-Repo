import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './RightSideNav/RightSideNav';

const Courses = () => {
    let product = useLoaderData();
    console.log(product);
    return (
        <div className='flex justify-around mt-5 '>
            <div>
                <h1 className='text-center text-cyan-400 mb-4 font-sans text-3xl font-bold'>Availabe Courses</h1>
                {product.map(option => <LeftSideNav
                key={option._id}
                option={option}
                ></LeftSideNav>)}
            </div>
            
            <div className='grid gap-8 row-gap-5 mb-8  lg:grid-cols-2 lg:row-gap-8'>
                
                {product.map(cart =><RightSideNav
                key={cart._id}
                cart={cart}
                ></RightSideNav>
                    
                    )}

            </div>
        </div>
    );
};

export default Courses;