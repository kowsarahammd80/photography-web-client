import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {

  const {user} = useContext(AuthContext); 
   
  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    
   fetch(`http://localhost:5000/myreview/${user?.email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('photo-token')}`
    }
    
  })
   .then(res => res.json())
   .then(data => setUserEmails(data))
   .catch(error => console.log(error))

  },[userEmails])



  let handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete this review");
    if (proceed) {
      fetch(`http://localhost:5000/myreview/${id}`, {

        method: 'DELETE',

        headers: {
          authorization: `Bearer ${localStorage.getItem('photo-token')}`
        }

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted seccessfully');
            let remaining = userEmails.filter(email => email._id !== id);
            setUserEmails(remaining);
          }
        })
    }
  }

  

  return (
    <div className='container'>
       
       <h3 className='text-center mt-2'>There have my review</h3>
       
      <div className='container mt-5 mb-4'>

        <div className='row '>

          {
            userEmails?.map(userEmail => <MyReviewCard key={userEmail._id}
              userEmail={userEmail} handleDelete={handleDelete}
            ></MyReviewCard>)
          }


        </div>

      </div>
    </div>
  );
};

export default MyReview;