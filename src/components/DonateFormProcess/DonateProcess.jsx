import React from 'react';
import signUp from '../../assets/signUp.jpg';
import login from '../../assets/login.jpg';
import Donate from '../../assets/Donate.png';
import './DonateFromProcess.css'
const DonateProcess = () => {
  return (
    <div className='donate-process-container' >
      <div className='common-items' >
        <h2 >Commonly Needed Items:</h2>
        <strong >
          (a) Canned Goods: Beans, vegetables, fruits, soups, stews, meats (tuna, chicken, etc.)<br />
          (b) Dry Goods: Rice, pasta, oats, cereal, lentils, flour, and dried beans.<br />
          (c) Cooking Staples: Cooking oil, spices, salt, sugar.<br />
          (d) Snacks: Granola bars, peanut butter, nuts, dried fruit.
        </strong>
      </div>

      <div className='steps-container'>
        <div className='step-card'>
          <h2 >Step 1: Sign Up Form</h2>
          <p >Firstly, click the sign-up button below.</p>
          <img src={signUp} alt='Sign Up form'  />
          <a href='/signup'>
            <button >
              Sign Up Now
            </button>
          </a>
        </div>

        <div className='step-card'>
          <h2 >Step 2: Login Form</h2>
          <p >Login to your account after signing up.</p>
          <img src={login} alt='Login form' />
          <a href='/login'>
            <button >
              Login Now
            </button>
          </a>
        </div>

        <div className='step-card' >
          <h2 >Step 3: Donate</h2>
          <p >Now you can proceed to donate!</p>
          <img src={Donate} alt='Donate process'  />
          <a href='/donatefood'>
            <button >
              Donate Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateProcess;
