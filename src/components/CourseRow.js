import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


const CourseRow = ({course, deleteCourse, selectCourse}) =>
    <tr>
        <td>
            <Link onClick={() => selectCourse(course)} to={`/course/edit/${course.id}`}>
                {course.title}
            </Link>
            <div className="btn-group float-right">
            <Link className="btn btn-primary" 
                onClick={() => selectCourse(course)}
                to={`/course/edit/${course.id}`}>Edit</Link>  
                <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>Delete</button>
            </div>
        </td>
    </tr>

export default CourseRow;