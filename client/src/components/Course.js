import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import CourseSevice from '../services/course.sevice';

const Course = (props) => {
  const navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() =>{
    console.log("Using effect");
    let _id;
    if (currentUser) {
        _id = currentUser.user._id;
    } else {
        _id = "";
    }
    
    if (currentUser.user.role == "instructor") {
        CourseSevice.get(_id).then((data) => {
            console.log(data);
            setCourseData(data.data);
        }).catch((err) => {
            console.log(err);
        });
    } else if (currentUser.user.role == "student") {
        CourseSevice.getEnrollCourse(_id).then((data) => {
            console.log(data);
            setCourseData(data.data);
        }).catch((error) => {
            console.log(error);
        });
    }
  },[])

  return (
    <div style={{padding: "3rem"}}>
        {
            !currentUser && 
            <div>
                <p>You must login before seeing your courses.</p>
                <button onClick={handleTakeToLogin} className='btn btn-primary btn-lg'>Take me to login page</button>
            </div>
        }
        {
            currentUser && currentUser.user.role == "instructor" &&
            <div>
                <h1>Welcome to instructor's course page.</h1>
            </div>
        }
        {
            currentUser && currentUser.user.role == "student" &&
            <div>
                <h1>Welcome to student's course page.</h1>
            </div>
        }   
        {currentUser && courseData && courseData.length != 0 && (
        <div>
          <p>Here's the data we got back from server.</p>
          {courseData.map((course) => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p>Student Count: {course.students.length}</p>
                <button className="btn btn-primary">{course.price}</button>
                <br />
              </div>
            </div>
          ))}
        </div>
      )}
        
    </div>
  )
}

export default Course;