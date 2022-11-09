import React from 'react';
import { useLoaderData } from 'react-router-dom';




const ServiceDetails = () => {

  const{serviceName, serviceImage, serviceDetail, price, rating} = useLoaderData()

 

  return (
    <div>
      <div className='container mt-4 mb-2 mt-sm-2 '>

        <div className='row'>

          <div className='col-12 col-lg-6 border-2'>

            <img src={serviceImage} alt="" className='img-fluid h-100' />

          </div>

          <div className='col-12 col-lg-6 '>

            <h3 className='mt-2 mt-lg-1'>{serviceName}</h3>
            <p>{serviceDetail}</p>

            <div className='d-flex justify-content-around '>
               <p>Price: ${price}</p>
               <p>Rating: {rating}</p>
            </div>

          </div>


        </div>

      </div>

      {/* review */}

       <div className='container'>

          <div className='row'>

             <div className='col-'>

             </div>
             
          </div>
          
       </div>

    </div>
  );
};

export default ServiceDetails;