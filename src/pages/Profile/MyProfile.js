import React from 'react';
import Styles from './MyProfile.module.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddBlog from '../SideBarContent/AddBlog/AddBlog';
import UpdateBlog from '../SideBarContent/UpdateBlog/UpdateBlog';
import Profile from '../SideBarContent/Profile/Profile';



const MyProfile = () => {
  const Navigate = useNavigate()

  function goToProfile(){
    Navigate("/MyProfile/Profile")
  }

  function goToAddBlog(){
    Navigate("/MyProfile/AddBlog")
  }
  
  function goToUpdateBlog(){
    Navigate("/MyProfile/UpdateBlog")
  }
 
  return (
    <div className={Styles.whole} >
        <div className={Styles.sideBar}style={{position:'fixed'}}>

           <div className={Styles.Profile}>
              <h4 onClick={goToProfile}>Profile</h4>
            </div>
            <hr/>
            <div className={Styles.AddBlog}>
              <h4 onClick={goToAddBlog}>Add Blog</h4>
            </div>
            <hr/>
            <div className={Styles.UpdateBlog}>
              <h4 onClick={goToUpdateBlog}>Update Blog</h4>
            </div>
            <hr/>
            

          <button className={Styles.logout}>Log Out</button>
            
        </div>

        <div>
          <Routes>
          <Route path="/" element= {<Profile/>}/>
          <Route path="/AddBlog" element= {<AddBlog/>}></Route>     
          <Route path="/UpdateBlog" element= {<UpdateBlog/>}></Route>     
          <Route path="/Profile" element= {<Profile/>}></Route> 
          {/* <Route path="/Blogs/:id" element= {<SingleBlog/>}></Route>    */}
          </Routes>
        </div>

        
    </div>
  );
};

export default MyProfile;
