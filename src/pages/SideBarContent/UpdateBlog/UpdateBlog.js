import React from 'react';
import Styles from './UpdateBlog.module.css';

const AddBlog = () => {
  return (
    <>
    <h2 style={{marginTop:'7.5%', marginLeft:'52%', fontSize:'1.8rem', color:'whitesmoke'}}>Update Blog</h2>
    <div className={Styles.UpdateBlogContainer} >
      <div className={Styles.UpdatetitleInput}>
        <label for='UpdatedTitle'>Blog Title</label><br/>
        <input type='text' placeholder='Blog Title...' required className={Styles.UpdateTitle}/>
      </div>
      <br/>
      <div className={Styles.UpdateimgInput}>
        <label for='Updatedimage'>Image URL</label><br/>
        <input type='text' placeholder=' Updated Image URL...' required className={Styles.UpdateImg}/>
      </div>
      <br/>
      <div className={Styles.UpdatecontentInput}>
        <label for='UpdatedContent'> Blog Content</label><br/>
        <input type='text' placeholder=' Updated Blog Content...' required className={Styles.UpdateContent}/>
      </div>
      <br/>
      <div className={Styles.UpdateAuthorDate} >
        <div className={Styles.UpdateAuthorInput}>
          <label for='AuthorName'> Author</label><br/>
          <input type='text' placeholder='Author Name...' required className={Styles.UpdateAuthor}/>
        </div>
      
        <div className={Styles.UpdateDateInput}>
          <label for='UpdatedDate'> Date</label><br/>
          <input type='date' placeholder='Date...' required className={Styles.UpdateDate}/>
        </div>
      </div>
      <br/>
      <br/>
      <button type='Submit' className={Styles.UPdatesubmitButton}> Submit</button>
      
    </div>
    </>
  );
};

export default AddBlog;
