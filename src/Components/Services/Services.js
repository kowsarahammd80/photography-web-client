import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = ({len}) => {
   
  const [services, setServices] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
    
  },[])

  let length = 0;
  !len ? length = services.length : length = len ;

  return (
    <div className='container mt-3'>
           
           <h3 className='text-center font-style mt-2 mb-3'>See Of Service</h3>
            <h5 className='text-center mb-3'>TWO HEARTS THAT BEAT AS ONE!</h5>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

         {
          services.slice(0, length).map(service => <ServicesCard key={service._id}
           service={service}
          ></ServicesCard>)
         } 
        
      </div>
    </div>
  );
};

export default Services;