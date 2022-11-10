import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialSIgnIn from '../../Sheard/SocalSignIn/SocialSIgnIn';
import Spiner from '../../Sheard/Spiner/Spiner';


const SignIN = () => {
  let [error, setError] = useState('')

  let { signIn, loading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from.pathname || '/';

  let handleSubmit = (event) => {

    event.preventDefault()
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;

    console.log(email, password)
    signIn(email, password)
      .then(result => {
        let user = result.user

        const currentUser = {
          email: user.email
        }
        console.log(currentUser);

        // get jwt token 
        fetch('https://genius-car-server-snowy.vercel.app/jwt', {

          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)

        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

            // local storage is the easiest but not the best prectice to storage
            localStorage.setItem('photo-token', data.token);
            if(loading){
              <Spiner/>
            }

            navigate(from, { replace: true });

          });
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })

  }


  return (
    <div className='container-fluid pb-4 bg-color text-color'>

      <div className='row  align-items-center g-4'>

        < div className='col-12 col-lg-6 ps-0 ps-lg-5 d-none d-lg-block' >
          <img src='' className='img-fluid' alt="" />
          <div className='text-center pt-3'>
            <h1 className='fw-bold'>WelCome ALAN MILLER <br />
              WEDING PHOTOGRAPHY</h1>
            <p className='px-0 px-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vitae iusto officiis repudiandae cumque aliquid eius laborum doloribus non?</p>
          </div>
        </div >

        <div className='col-12 col-lg-6 '>

          <div className='row align-items-center'>
            <div className='col-0 col-lg-1'>

            </div>
            <div className='col-8 col-lg-7 ps-5'>
              <img src='' className='w-50 pb-2 pb-lg-5' alt="" />
              <h1>Sign into Your Account</h1>
            </div>
            <div className='col-4 d-flex align-items-center gap-2 backtoHome'>
              <i className="fa-solid fa-arrow-left"></i>
              <Link to="/" className='backtoHome'>Back to Home</Link>
            </div>

          </div>



          <form className='w-75 pt-5 container' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label fw-bold ">Email</label>
              <input type="email" name='email' className="form-control  inputField" id="formGroupExampleInput" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Password</label>
              <input type="password" name='password' className="form-control  inputField" id="formGroupExampleInput2" placeholder="Password" required />
            </div>

            {/* <Link to="/password-reset" className='forgotPass'>Forgot Password ?</Link> */}

            <>
              <p className='text-danger'>{error}</p>
            </>
            <div className=''>
              <p className='text-center'>Need User? <Link to="/signUp" className='forgotPass'> Sign Up </Link> </p>
            </div>

            <div className='pt-4'>
              <button type="submit" className="btn submitButton btn-lg bg-info w-100">Sign In</button>
            </div>

          </form>

          <SocialSIgnIn />

        </div>

      </div >

    </div >
  );
};

export default SignIN;