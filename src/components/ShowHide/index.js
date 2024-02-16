// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  onFirstName = () => {
    this.setState(prevState => ({
      firstname: !prevState.firstname,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      lastname: !prevState.lastname,
    }))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {firstname && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {lastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
