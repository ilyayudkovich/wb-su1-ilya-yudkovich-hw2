import React from 'react'
import CourseRow from './CourseRow'


export default class BetaCourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = props.selectCourse
        this.state = {
            courses: this.props.courses,
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
                <h1>Course Table</h1>
                <table className="table">
                    <tbody>
                    {
                        this.state.courses.map((course, key) =>
                            <CourseRow 
                                    course={course}
                                    deleteCourse={this.deleteCourse}
                                    selectCourse={this.selectCourse}
                                    key={key}/>)
                    }
                    </tbody>
                </table>
            </div>
        )}
}


