import React from 'react'
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import courses from './courses.json'
import BetaCourseTable from './BetaCourseTable'
import BetaCourseGrid from './BetaCourseGrid'
import '../css/WhiteBoard.css'
import { findAllCourses, createCourse, findCourseById, updateCourse, deleteCourse } from '../services/CourseService'

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCourse: courses[0]
        }
    }

    selectCourse = course => {
        this.setState({
            selectedCourse: course
        })
    }


    render() {
        return (
            <Router>
                <nav className="navbar bg-dark navbar-dark navbar-expand-sm fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-brand" href="/">
                                <Link to="/">WhiteBoard</Link>
                            </div>
                        </div>
                            <ul className="navbar-nav navbar-top-links">
                            <li className="nav-item"><Link className="nav-link" to="/course/grid">Grid</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/course/table">Table</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/course/edit">Editor</Link></li>
                            </ul>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2"
                                       type="text"
                                       placeholder="Add Class..."
                                       onChange={this.handleInputChange}/>
                                <button className="btn btn-primary" onClick={this.createClass}>
                                    Add Class
                                </button>
                            </form>
                        </div>
                    </nav>
                    <body>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <BetaCourseTable 
                                        selectCourse={this.selectCourse}
                                        courses={courses}/>}/>
                                <Route
                                    path="/course/grid"
                                    render={() => <BetaCourseGrid 
                                                    selectCourse={this.selectCourse}
                                                    courses={courses}/>}/>
                                <Route
                                    path="/course/table"
                                    render={() => <BetaCourseTable 
                                                    selectCourse={this.selectCourse}
                                                    courses={courses}/>}/>
                                <Route
                                    path="/course/edit/:courseId"
                                    render={props => <CourseEditor course={this.state.selectedCourse}/>}/>
                    </body>
            </Router>
        )
    }
}

