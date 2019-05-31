import React from 'react'
import CourseCard from './CourseCard'

const BetaCourseGrid = ({courses, selectCourse}) =>

    <div>
        <h1>Course Grid</h1>
        <div className="card-deck">
            {
                courses.map((course, key) =>
                    <CourseCard course={course}
                                deleteCourse="#"
                                selectCourse={selectCourse}
                                title={course.title}
                                key={key}/>)
            }
        </div>
    </div>

export default BetaCourseGrid;