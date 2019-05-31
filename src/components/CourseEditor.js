import React from 'react'
import TopicPills from "./TopicPills";
import BetaModuleList from "./BetaModuleList";
import BetaLessonTabs from "./BetaLessonTabs";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course: this.props.course,
            selectedModule: this.props.course.modules[0],
            selectedLesson: this.props.course.modules[0].lessons[0],
            selectedTopic: this.props.course.modules[0].lessons[0].topics[0]
        }
    }


    componentWillReceiveProps(newProps) {
        this.setState({
            course: newProps.course
        })
    }


    handleChange(event) {
        this.setState({ name: event.currentTarget.value });
      }
    

    selectModule = module => {
        console.log('selecting module') 
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic:  module.lessons[0].topics[0]
        })
        console.log('re-calling render')
    }

    selectLesson = lesson => {
        console.log('selecting lesson')
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })
    }

    selectTopic = topic => {
        console.log('selecting topic')
        this.setState({
            selectedTopic: topic,
            selectedWidget: topic.widgets[0]
        })
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <h2>{this.state.course.title} {this.state.course.id}</h2>
                <div className="row">
                    <div className="col-3 left list-group">
                        <BetaModuleList modules={this.state.course.modules}
                                        selectedModule={this.state.selectedModule}
                                        selectModule={this.selectModule}/>
                    </div>
                    <div className="col-9 right ">
                        <BetaLessonTabs lessons={this.state.selectedModule.lessons}
                                        selectLesson={this.selectLesson}
                                        selectedLesson={this.state.selectedLesson}/>
                        <br/>
                        <TopicPills topics={this.state.selectedLesson.topics}
                                    selectTopic={this.selectTopic}
                                    selectedTopic={this.state.selectedTopic}/>
                    </div>
                </div>
            </div>
        )
    }
}