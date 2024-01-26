import React from 'react';
import Styles from './AddBlog.module.css';

const AddBlog = () => {
  return (
    <>
    <h2 style={{marginTop:'7.5%', marginLeft:'52%', fontSize:'1.8rem', color:'whitesmoke'}}>Add a new Blog</h2>
    <div className={Styles.AddBlogContainer} >
      <div className={Styles.titleInput}>
        <label for='Title'>Blog Title</label><br/>
        <input type='text' placeholder='Blog Title...' required className={Styles.Title}/>
      </div>
      <br/>
      <div className={Styles.imgInput}>
        <label for='image'>Image URL</label><br/>
        <input type='text' placeholder='Image URL...' required className={Styles.Img}/>
      </div>
      <br/>
      <div className={Styles.contentInput}>
        <label for='Content'> Blog Content</label><br/>
        <input type='text' placeholder='Blog Content...' required className={Styles.Content}/>
      </div>
      <br/>
      <div className={Styles.AuthorDate} >
        <div className={Styles.AuthorInput}>
          <label for='AuthorName'> Author</label><br/>
          <input type='text' placeholder='Author Name...' required className={Styles.Author}/>
        </div>
      
        <div className={Styles.DateInput}>
          <label for='Date'> Date</label><br/>
          <input type='date' placeholder='Date...' required className={Styles.Date}/>
        </div>
      </div>
      <br/>
      <br/>
      <button type='Submit' className={Styles.submitButton}> Submit</button>
      
    </div>
    </>
  );
};

export default AddBlog;
