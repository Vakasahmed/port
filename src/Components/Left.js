import React from 'react';
import facebook from'../Icons/facebook.png'
import linkedin from'../Icons/linkedin.png'
import google from'../Icons/google.png'

function Left() {
  return (
    <div className='left'>
        <div className='up'>
            <span className='c'>Company</span>
            <span className='n'>Name</span>
        </div>
        <div className='down'>
            <div>
                <h2 className='sign'>Sign in to Account</h2>
            </div>
            <hr className='greenLine'></hr>
            <div className='icon'>
                <img src={facebook} alt='facebook'/>
                <img src={linkedin} alt='linkedin'/>
                <img src={google} alt='google'/>
            </div>
            <p className='p'>or use your email account</p>
            <div className='input'>
                <label>Email</label>
                <input className='inputD' placeholder='You|'/>
                <input className='inputUp' placeholder='Password'/>
            </div>
            <div className='inline'>
                <div className='checkbox'>
                    <input type="checkbox"/>
                    <span>Remember me</span>
                </div>
                <span>Forgot Password</span>
            </div>
            <button className='btn2'>Sign In</button>
            <p className='p'> Privacy Policy &#x2022; Tems & Conditions</p>
        </div>
    </div>
  )
}

export default Left;