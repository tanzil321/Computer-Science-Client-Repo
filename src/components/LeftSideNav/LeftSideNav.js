import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({option}) => {
    let {course_name,_id}=option
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
           <Link to={`/categories/${_id}`} >{course_name}</Link> 
        </div>
    );
};

export default LeftSideNav;