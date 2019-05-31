import React from 'react'

export default class BetaLessonTabs extends React.Component {
    constructor(props) {
        console.log('building lesson tabs')
        console.log(props)
        super(props);
        this.lessons = this.props.lessons
        this.selectLesson = this.props.selectLesson
        this.state = {
            lesson: {
                id: -1,
                title: 'New Lesson'
            },
            lessons: this.lessons
        }
    }

    

    componentWillReceiveProps(newProps) {
        this.setState({
            lessons: newProps.lessons
        })
    }
    
    createLesson = () => {
        console.log('creating lesson')
        this.state.lesson.id = (new Date()).getTime()
        this.setState({
            lessons: [...this.state.lessons, this.state.lesson]
        })
    }

    deleteLesson = (id) => {
        console.log('deleteLesson ' + id)
        this.setState({
            lessons: this.state.lessons.filter(lesson => lesson.id !== id)
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
        return (
            <ul className="nav nav-tabs">
                {
                this.state.lessons.map((lesson, key) =>
                    <li className="nav-item"
                        onClick={() => this.selectLesson(lesson)} key={key}>
                        <a className={lesson === this.props.selectedLesson? "nav-link active":"nav-link"} >
                            {lesson.title}
                        </a>
                    </li>
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