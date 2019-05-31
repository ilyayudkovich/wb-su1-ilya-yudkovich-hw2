import React from 'react'
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {
                id: -1,
                title: 'New Module'
            },
            modules: this.props.modules,
            selectModule: this.props.selectModule,
            editing: false
        }
    }

    edit = () => {
        this.setState({
            editing: true
        })
    }

    createModule = () => {
        // this.state.module.push()
        this.state.module.id = (new Date()).getTime()
        this.setState({
            modules: [...this.state.modules, this.state.module]
        })
    }

    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            module: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }

    deleteModule = (id) => {
        console.log('deleteModule ' + id)
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    }

    render() {
        return(
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.module.title}
                            className="form-control"/>
                        <button onClick={this.createModule} className="btn btn-primary btn-block">
                            Add Module
                        </button>
                    </li>
                    {
                        this.state.modules.map(
                            (module, key) =>
                                <ModuleListItem
                                    deleteModule={this.deleteModule}
                                    selectModule={this.state.selectModule}
                                    module={module}
                                    key={key}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}