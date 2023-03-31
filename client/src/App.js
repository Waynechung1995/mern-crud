import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Course from './components/Course';
import Postcourse from './components/Postcourse';
import Enroll from './components/Enroll';
import AuthService from './services/auth.service';



const App = () => {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/> } />
        <Route path='/profile' element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/course' element={<Course currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/postCourse' element={<Postcourse currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/enroll' element={<Enroll currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  )
}

export default App;