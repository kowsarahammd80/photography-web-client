import React, { useContext } from 'react';
import './SocialSignIn.css';
import {GoogleAuthProvider} from 'firebase/auth'
import google from '../../assets/google.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';




const SocialSIgnIn = () => {
  
  let {providerLogin} = useContext(AuthContext)

  let googleProvider = new GoogleAuthProvider()

  let handleGoole = () => {
     
    providerLogin(googleProvider)
    .then(result => {
       let user = result.user;
       console.log(user)
        
    

    })
    .catch(error => console.error(error))

  }

  return (

    <div className=' py-5 mt-2'>
      
      <div className='row justify-content-center align-items-center'>

        <button onClick={handleGoole}  className='col-12 col-lg-5 d-flex align-items-center justify-content-center g-3 socialButton middleBorder' >
          <img src={google} className="w1-10 me-2" alt="" />
          <h2 className='socialTag'>Sign in using Google</h2>
        </button>

      </div>




    </div>
  );
};

export default SocialSIgnIn;