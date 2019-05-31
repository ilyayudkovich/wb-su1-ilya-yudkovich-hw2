import React from 'react'
import CourseRow from './CourseRow'

const BetaCourseTable = ({courses, selectCourse}) =>

    <div>
        <h1>Course Table</h1>
        <table className="table">
            <tbody>
            {
                courses.map((course, key) =>
                    <CourseRow 
                            course={course}
                            deleteCourse="#"
                            selectCourse={selectCourse}
                            key={key}/>)
            }
            </tbody>
        </table>
    </div>

export default BetaCourseTable;