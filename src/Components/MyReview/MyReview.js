import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/wed-img.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {

  const {user} = useContext(AuthContext); 
   
  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
   fetch(`http://localhost:5000/myreview/${user.email}`)
   .then(res => res.json())
   .then(data => setUserEmails(data))
   .catch(error => console.log(error))

  },[])

  return (
    <div className='container'>
       
       <h3 className='text-center mt-2'>There have my review</h3>
       
      <div className='container mt-5 mb-4'>

        <div className='row '>

          {
            userEmails.map(userEmail => <MyReviewCard key={userEmail._id}
              userEmail={userEmail}
            ></MyReviewCard>)
          }


        </div>

      </div>
    </div>
  );
};

export default MyReview;