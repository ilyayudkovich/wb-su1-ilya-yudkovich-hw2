import React from 'react'
import LessonTabItem from './LessonTabItem'

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: {
                id: -1,
                title: 'New Lesson'
            },
            lessons: ['l1', 'l2', 'l3']
        }
    }

    createLesson = () => {
        // this.state.module.push()
        this.state.lesson.id = (new Date()).getTime()
        this.setState({
            modules: [...this.state.lessons, this.state.lesson]
        })
    }

    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            lesson: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }
    
    render() {
        return(
            <ul className="nav nav-tabs">
                {
                    this.state.lessons.map(lesson =>
                        <LessonTabItem lesson={lesson}/>
                    )
                }
                <li className="nav-item">
                    <div className="input-group-append">
                    <input
                        onChange={this.titleChanged}
                        defaultValue={this.state.lesson.title}
                        className="form-control col-4"/>

                        <button onClick={this.createLesson} className="btn btn-primary">
                            Add Lesson
                        </button>
                    </div>
                </li>
            </ul>
        )
    }
}