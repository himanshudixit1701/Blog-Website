import React from 'react';
import styles from './Blog.module.css'
import { useNavigate } from 'react-router-dom';


const Blogs = () => {
  const blogContent = useNavigate()
  function goToSingleBlog(){
    blogContent("/Blogs/:id")
  }
  return (
    <div className={styles.main}>

      <h2 className= {styles.mainHeading}>Blogs</h2>

      <div className={styles.flexBox}>

        <div className={styles.blog}>
          
            <div className={styles.image} style={{top: 0}}>
              <img src='https://picsum.photos/300/200'alt=''/>
            </div>
            <a  onClick={goToSingleBlog}><span className={styles.title}>Blog Title </span></a>
            <h5>Author</h5>
            <p className={styles.date}><time datetime="2024-01-03">jan 3, 2024</time></p> 
         
        </div>

        <div className={styles.blog}>
          
          <div className={styles.image} style={{top: 0}}>
          <img src='https://picsum.photos/300/200'alt=''/>
          </div>
          <a  onClick={goToSingleBlog}><span className={styles.title}>Blog Title </span></a>
          <h5>Author</h5>
          <p className={styles.date}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
      </div>

      <div className={styles.blog}>
          
          <div className={styles.image} style={{top: 0}}>
          <img src='https://picsum.photos/300/200'alt=''/>
          </div>
          <a  onClick={goToSingleBlog}><span className={styles.title}>Blog Title </span></a>
          <h5>Author</h5>
          <p className={styles.date}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
      </div>

      <div className={styles.blog}>
          
          <div className={styles.image} style={{top: 0}}>
          <img src='https://picsum.photos/300/200'alt=''/>
          </div>
          <a  onClick={goToSingleBlog}><span className={styles.title}>Blog Title </span></a>
          <h5>Author</h5>
          <p className={styles.date}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
      </div>

      <div className={styles.blog}>
          
          <div className={styles.image} style={{top: 0}}>
          <img src='https://picsum.photos/300/200'alt=''/>
          </div>
          <a  onClick={goToSingleBlog}><span className={styles.title}>Blog Title </span></a>
          <h5>Author</h5>
          <p className={styles.date}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
      </div>

      <div className={styles.blog}>
          
          <div className={styles.image} style={{top: 0}}>
          <img src='https://picsum.photos/300/200'alt=''/>
          </div>
          <a  onClick={goToSingleBlog}><span className={styles.title}>Blog Title </span></a>
          <h5>Author</h5>
          <p className={styles.date}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
      </div>

      </div>
      
    </div>
  );
};

export default Blogs;