import React from 'react';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className={styles.SignUpContainer}>
      <form action="">
      <br/>
        <h2>SignUp</h2>

        <div className={styles.inputs}>
          <div className={styles.name}>
            <label for='full name'>Name</label>
            <input type='text' placeholder='Full Name' required className={styles.name}/>
          </div>
          <br/>
          <div className={styles.email}>
            <label for="email">Email</label>
            <input type='email' placeholder='Email' required/>
          </div>
          <br/>
          <div className={styles.password}>
            <label for='password'>Password</label>
            <input type='password' placeholder='Password' required/>
          </div>
          <br/>
          <div className={styles.confirmPassword}>
            <label for='confirmPassword'>Confirm Password</label>
            <input type='password' placeholder='Confirm Password' required/>
          </div>
          <br/>
          {/* <br/> */}

          <button className={styles.submit}>Submit</button>   
          <br/>
          <hr/> 
          <br/>  
          <div className={styles.loginLink}>
            <p>Already have an account? <span ><Link to={'/Login'} className= {styles.link} >Login</Link></span></p>
        </div>
        <br/>
        </div>
      </form>
      
    </div>
  );
};

export default SignUp;
