import React from 'react'

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props)

        this.module = props.module
        this.deleteModule = props.deleteModule
        this.selectModule = props.selectModule
        this.selectedModule = props.selectedModule

        this.state = {
            selectedModule: this.selectedModule,
            module: this.module,
            editMode: false
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            selectedModule: newProps.selectedModule,
            module: newProps.module
        })
    }

    editingModule() {
        this.setState({
            editMode: true
        })
    }

    updateModule = (event) => {
        console.log('updating module')
        this.setState({
            editMode: false
        })
    }

    moduleTitleChanged = (event) => {
        console.log(event.target.value)
        this.state.selectedModule.title = event.target.value;
    }


    render() {

        if (this.state.editMode) {
            return (
                <li className={this.state.module === this.state.selectedModule? "list-group-item active":"list-group-item"} onClick={() => this.selectModule(this.module)}>
                    <input  onChange={this.moduleTitleChanged}
                            defaultValue='Edit title'
                            className="form-control"/>
                    <div className="btn-group float-right">
                        <button className="btn btn-sucess" onClick={this.updateModule}>OK</button>
                    </div>
                </li>
            )
        }

        else {
            return (
                <li className={this.state.module === this.state.selectedModule? "list-group-item active":"list-group-item"} onClick={() => this.selectModule(this.module)}>
                    {this.module.title}
                    <div className="btn-group float-right">
                        <button className="btn btn-warning" onClick={() => this.editingModule()}>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.deleteModule(this.module.id)}>X</button>
                    </div>
                </li>
            )
        }
    }
}
// const ModuleListItem = ({module, deleteModule, editModule, selectModule, selectedModule}) =>
//     <li className={module === selectedModule? "list-group-item active":"list-group-item"} onClick={() => selectModule(module)}>
//         {module.title}
//         <div className="btn-group float-right">
//             <button className="btn btn-warning">Edit</button>
//             {/* <button className="btn btn-warning" onClick={() => editModule(module.id)}>Edit</button> */}
//             <button className="btn btn-danger" onClick={() => deleteModule(module.id)}>X</button>
//         </div>
//     </li>

// export default ModuleListItem