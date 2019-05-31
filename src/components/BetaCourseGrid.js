import React from 'react'
import CourseCard from './CourseCard'


export default class BetaCourseGrid extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = props.selectCourse
        this.state = {
            courses: this.props.courses,
            selectCourse: this.props.selectCourse
        }
    }

    deleteCourse = (id) => {
        console.log('deleteCourse ' + id)
        this.setState({
            courses: this.state.courses.filter(course => course.id !== id)
        })
    }

    render() {
        return(
            <div>
                <h1>Course Grid</h1>
                <div className="card-deck">
                    {
                        this.state.courses.map((course, key) =>
                            <CourseCard course={course}
                                        deleteCourse={this.deleteCourse}
                                        selectCourse={this.selectCourse}
                                        title={course.title}
                                        key={key}/>)
                    }
                </div>
            </div>
        )}


}
