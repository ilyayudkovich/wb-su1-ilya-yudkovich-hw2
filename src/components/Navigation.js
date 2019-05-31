import React, { Proptypes } from 'react'
import {Navbar, Nav, NavItem, Form,  Button} from 'reactstrap'

export default class Navigation extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ' ',
        }
    }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }

    createClass() {
        console.log('creating class')
    }

    render() {
        return(
            <form>

                <input placeholder="Add Class..."
                       onChange={this.handleInputChange}
                       className="form-control"/>
                <button className="btn btn-primary" onClick={this.createClass}>
                    Add Class
                </button>
            </form>
        )


    }





}