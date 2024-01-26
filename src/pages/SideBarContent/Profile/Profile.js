import React from 'react';
import Styles from './Profile.module.css'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
   const blogContent = useNavigate()
   function goToSingleBlog(){
     blogContent("/Blogs/:id")
   }
  return (
    <>
    <div className={Styles.ProfileMain}>
      
        <img className={Styles.ProfileImg} src='https://picsum.photos/300/200' alt=''/>

        <div className={Styles.Bio}>
           <h1 className={Styles.nameh1}>Himanshu Dixit</h1>
           <h2 className={Styles.usernameh2}>dhimanshu076</h2>
           <p className={Styles.userBio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
    </div>

    <div className={Styles.MyBlogs}>
          <h2 className={Styles.MyBlogMainHeading}>My Blogs</h2>

          <div className={Styles.MyBlogflexBox}>

          <div className={Styles.Myblog}>
          
            < div className={Styles.MyBlogimage} style={{top: 0}}>
              < img src='https://picsum.photos/300/200'alt=''/>
            </div>
              <a  onClick={goToSingleBlog}><span className={Styles.MyBlogTitle}>My Blog Title </span></a>
              <h5>Author</h5>
              <p className={Styles.MyBlogDate}><time datetime="2024-01-03">jan 3, 2024</time></p> 
         
            </div>

          <div className={Styles.Myblog}>
          
          < div className={Styles.MyBlogimage} style={{top: 0}}>
              <img src='https://picsum.photos/300/200'alt=''/>
          </div>
            <a  onClick={goToSingleBlog}><span className={Styles.MyBlogTitle}>My Blog Title </span></a>
            <h5>Author</h5>
            <p className={Styles.MyBlogDate}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
          </div>

          <div className={Styles.Myblog}>
          
            <div className={Styles.MyBlogimage} style={{top: 0}}>
              <img src='https://picsum.photos/300/200'alt=''/>
            </div>
            <a  onClick={goToSingleBlog}><span className={Styles.MyBlogTitle}>My Blog Title </span></a>
            <h5>Author</h5>
            <p className={Styles.MyBlogDate}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
         </div>

          <div className={Styles.Myblog}>
          
            <div className={Styles.MyBlogimage} style={{top: 0}}>
              <img src='https://picsum.photos/300/200'alt=''/>
            </div>
            <a  onClick={goToSingleBlog}><span className={Styles.MyBlogTitle}>My Blog Title </span></a>
            <h5>Author</h5>
            <p className={Styles.MyBlogDate}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
          </div>

          <div className={Styles.Myblog}>
          
            <div className={Styles.MyBlogimage} style={{top: 0}}>
              <img src='https://picsum.photos/300/200'alt=''/>
            </div>
            <a  onClick={goToSingleBlog}><span className={Styles.MyBlogTitle}>My Blog Title </span></a>
            <h5>Author</h5>
            <p className={Styles.MyBlogDate}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
          </div>

          <div className={Styles.Myblog}>
          
            <div className={Styles.MyBlogimage} style={{top: 0}}>
              <img src='https://picsum.photos/300/200'alt=''/>
            </div>
            <a  onClick={goToSingleBlog}><span className={Styles.MyBlogTitle}>My Blog Title </span></a>
            <h5>Author</h5>
            <p className={Styles.MyBlogDate}><time datetime="2024-01-03">jan 3, 2024</time></p> 
       
          </div>

      </div>

    </div>

    </>
  );
};

export default Profile;