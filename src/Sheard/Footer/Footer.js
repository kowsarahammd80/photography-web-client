import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-black text-white p-3 mt-2'>
      <div className='container py-5'>
        <div className='row'>

          <div className='col-12 col-lg-4 '>
            <img src={logo} alt="" className='w-50' />
            <p className='pt-2 text-justify'>Formal wedding photos during the wedding. Rather, they might pose for a formal photo in their best clothes before more couples started posing in their wedding clothes or sometimes hired a photographer to come to the wedding venue.</p>
          </div>

          <div className='col-6 col-lg-2 footerHeaders'>
            <h4>For Wedding</h4>
            <ul className='footerList'>

              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              
            </ul>
          </div>

          <div className='col-6 col-lg-2 footerHeaders'>
            <h4>For Pre-Wedding</h4>
            <ul className='footerList'>

              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              
            </ul>

          </div>

          <div className='col-12 col-lg-4 footerHeaders'>
            <h4>News Letter</h4>

            <div className='footerContacts'>
              <p className='text-success'><i className="fa-solid fa-location-dot"></i></p>
              <h6 className='text-wrap '>3556 Beech Street, San Francisco,
                California, CA 94108
              </h6>
            </div>

            <div className='footerContacts'>
              <p className='text-warning'><i className="fa-solid fa-envelope"></i></p>
              <h6> allen@example.com</h6>
            </div>

            <div className='footerContacts'>
              <p className='text-info'><i className="fa-solid fa-phone"></i></p>
              <h6> +88 01234293874</h6>
            </div>

          </div>

        </div>
      </div>

    </div>

  );
};

export default Footer;