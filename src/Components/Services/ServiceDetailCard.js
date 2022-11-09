import React from 'react';

const ServiceDetailCard = ({services}) => {
    
   const {serviceName, serviceImage, serviceDetail} = services

  return (
    <div className='container'>

      <div className='row'>

        <div className='col-6'>
          
          <img src={serviceImage} alt="" />
           
        </div> 
        
        <div className='col-6'>

          <h3>{serviceName}</h3>

        </div>


      </div>
      
    </div>
  );
};

export default ServiceDetailCard;