import React from 'react';
import Block from '../Block/Block';
import Party from '../Party/Party';
import Together from '../Together/Together';
import HomeBanner from './HomeBanner';

const Home = () => {
  
  return (
    <div>
        
       <HomeBanner></HomeBanner>

        <div className='container'>
          <Party></Party>
        </div>

        <div>
          <Together></Together>
        </div>

        {/* <Block></Block> */}
         
    </div>
  );
};

export default Home;