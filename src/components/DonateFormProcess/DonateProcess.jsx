import React from 'react';
import signUp from '../../assets/signUp.jpg';
import login from '../../assets/login.jpg';
import Donate from '../../assets/Donate.png';
import '../../styles/DonateProcess.css'
const DonateProcess = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '20px', maxWidth: '1200px', margin: 'auto', textAlign: 'center' }}>
      <div style={{ backgroundColor: '#f0f4f8', border: '1px solid #e1e8ed', borderRadius: '10px', padding: '20px', marginBottom: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '600' }}>Commonly Needed Items:</h2>
        <strong style={{ color: '#2c3e50', fontSize: '1.25rem' }}>
          (a) Canned Goods: Beans, vegetables, fruits, soups, stews, meats (tuna, chicken, etc.)<br />
          (b) Dry Goods: Rice, pasta, oats, cereal, lentils, flour, and dried beans.<br />
          (c) Cooking Staples: Cooking oil, spices, salt, sugar.<br />
          (d) Snacks: Granola bars, peanut butter, nuts, dried fruit.
        </strong>
      </div>

      <div  style={{ display:'flex' , flexDirection:'row' ,justifyContent: 'space-around',  maxWidth: '1200px', gap: '20px', flexWrap: 'wrap', margin: 'auto' }}>
        <div className='w-1/3 md:w-full' style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '33%', maxWidth: '320px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px', color: '#34495e' }}>Step 1: Sign Up Form</h2>
          <p style={{ fontSize: '1rem', color: '#7f8c8d', marginBottom: '20px' }}>Firstly, click the sign-up button below.</p>
          <img src={signUp} alt='Sign Up form' style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '5px' }} />
          <a href='/signup'>
            <button style={{ backgroundColor: '#2ecc71', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
              Sign Up Now
            </button>
          </a>
        </div>

        <div className='w-1/3 md:w-full' style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '33%', maxWidth: '320px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px', color: '#34495e' }}>Step 2: Login Form</h2>
          <p style={{ fontSize: '1rem', color: '#7f8c8d', marginBottom: '20px' }}>Login to your account after signing up.</p>
          <img src={login} alt='Login form' style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '5px' }} />
          <a href='/login'>
            <button style={{ backgroundColor: '#2ecc71', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
              Login Now
            </button>
          </a>
        </div>

        <div className='w-1/3 md:w-full' style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '33%', maxWidth: '320px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px', color: '#34495e' }}>Step 3: Donate</h2>
          <p style={{ fontSize: '1rem', color: '#7f8c8d', marginBottom: '20px' }}>Now you can proceed to donate!</p>
          <img src={Donate} alt='Donate process' style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '5px' }} />
          <a href='/donatefood'>
            <button style={{ backgroundColor: '#2ecc71', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
              Donate Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateProcess;
