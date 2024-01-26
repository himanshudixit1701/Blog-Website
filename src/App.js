import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import Blogs from './pages/Blog/Blogs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import MyProfile from './pages/Profile/MyProfile';
import { Routes, Route } from 'react-router-dom';
import SingleBlog from './pages/SingleBlog/SingleBlog';

 

const App = () => {
  return (
   
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element= {<Blogs/>}/>
          <Route path="/Blogs" element= {<Blogs/>}/>
          <Route path="/Login" element= {<Login/>}/>
          <Route path="/SignUp" element= {<SignUp/>}/>
          <Route path="/MyProfile/*" element= {<MyProfile/>}/>
          <Route path="/Blogs/:id" element= {<SingleBlog/>}></Route>       
             
          
      </Routes>

      
    </div>
    
  );
};

export default App;
