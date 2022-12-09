import './index.css'
import {Component} from 'react'
import {execSync} from 'child_process'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onModeButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getMode = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'darkMode' : 'lightMode'
  }

  getButtonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const className = this.getMode()
    const buttonText = this.getButtonText()
    return (
      <div className="lightDarkModeContainer">
        <div className={className}>
          <h1>Click To Change Mode</h1>
          <button className="modesButton" onClick={this.onModeButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
