import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


const CourseCard = ({course, deleteCourse, selectCourse}) =>

    <div className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
                src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <a href={`/course/edit/${course.id}`}>
                {course.title}
            </a>
            <p className="card-text">Card text.</p>
            <Link className="btn btn-primary" 
                onClick={() => selectCourse(course)}
                to={`/course/edit/${course.id}`}>Edit</Link>
            <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
    </div>

export default CourseCard;
