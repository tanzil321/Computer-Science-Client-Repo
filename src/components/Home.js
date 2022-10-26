import React, { useContext } from 'react';

import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <section>
      <div className=''>
      <img  src={require("../assets/home.jpg")} alt="" />
      </div>
    </section>
    );
};

export default Home;