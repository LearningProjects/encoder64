import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {textInput: '', textOutput: '', mode: 'Encode'}
    this.convertString = this.convertString.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  convertString(){
    let output = ''

    if(this.state.mode)
      output = btoa(this.state.textInput)
    else
      output = atob(this.state.textInput)

    this.setState({textOutput: output})
  }
  changeMode(){
    let newMode = ''

    if(this.state.mode === 'Encode')
      newMode = 'Decode'
    else    
      newMode = 'Encode'
  
    this.setState({mode: newMode})
  }

  render() {
    const {textInput} = this.state
    return (
      <div className="app">
        <h1>String {this.state.mode}r</h1>

        <label className="siimple-label">Input String:</label>
        <br/>
        <input type="text" id="textInput" name="textInput" value={textInput} onChange={this.onChange} className="siimple-input"/>
        <br/>

        <div className="siimple-btn siimple-btn--primary" onClick={this.changeMode}>MODE</div>
        <div className="siimple-btn siimple-btn--success" onClick={this.convertString}>Converter</div>

        <div id="textOutput">Output: 
            <p>{this.state.textOutput}</p>
        </div>
      </div>
      );
  }
}

export default App;