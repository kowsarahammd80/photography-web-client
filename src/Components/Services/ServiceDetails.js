import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

  const {service} = useLoaderData()
   
  // const [serviceDetails, setServiceDetails] = useState([])

  // useEffect(() => {
  //   fetch('services.json')
  //   .then(res => res.json())
  //   .then(data => setServiceDetails(data))
  // },[])

  return (
    <div>
       {service.serviceName}
    </div>
  );
};

export default ServiceDetails;