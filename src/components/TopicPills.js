import React from 'react'

export default class TopicPills extends React.Component {

    constructor(props) {
        super(props);
        this.topics = props.topics
        this.selectTopic = props.selectTopic
        this.selectedTopic = props.selectedTopic

        this.state = {
            topic: {
                id: -1,
                title: 'New Topic'
            },
            topics: this.topics,
            selectedTopic: this.selectedTopic
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            topics: newProps.topics
        })
    }

    createTopic = () => {
        console.log('creating topic')
        this.state.topic.id = (new Date()).getTime()
        this.setState({
            topics: [...this.state.topics, this.state.topic]
        })
    }

    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            topic: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }


    render() {
        return(
            <ul className="nav nav-pills">
                {
                this.state.topics.map((topic, key) =>
                    <li className="nav-item" onClick={() => this.selectTopic(topic)} key={key}>
                        <a className={topic === this.props.selectedTopic? "nav-link active":"nav-link"}>{topic.title}</a>
                    </li>
                )
                }
                <li className="nav-item">
                    <div className="input-group-append">
                    <input
                        onChange={this.titleChanged}
                        defaultValue={this.state.topic.title}
                        className="form-control col-4"/>

                        <button onClick={this.createTopic} className="btn btn-primary">
                            Add Topic
                        </button>
                    </div>
                </li>
            </ul>
        )
    }
}