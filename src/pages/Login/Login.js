import React from 'react';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <div className={styles.container}>      
      <form action="" autoComplete="off">
        <br/>
        <h2>Login</h2>
        <div className={styles.inputBoxUsername}>
          <input type='text' placeholder='Username' required  autoComplete='off'/> 
        </div>

        <br/>

        <div className={styles.inputBoxPassword}>
          <input className={styles.pw} type='Password' placeholder='Password' required  autoComplete='off'/>
        </div>      
        
        <div className={styles.rememberForgot}>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot password</a>
        </div>

        <br/>
        
       <button className={styles.login}>login</button>
        
        <br/>
        <br/>
        <hr/>
        <br/>       

        <div className={styles.signUpLink}>
            <p>Don't have an account? <span ><Link to={'/SignUp'} className= {styles.link} >SignUp</Link></span></p>
        </div>


      </form>
    </div>
    </>
  );
};

export default Login;
