import React from 'react'

class Keypad extends React.Component {

  constructor(){
    super()
    this.log = this.log.bind(this)
  }

  log() {
    console.log("Entering password...")
  }

  render(){
    return(
      <div>
      <input onKeyUp={this.log} type="password"></input>
      </div>
    )

  }
}


export default Keypad
