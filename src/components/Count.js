import React, {Component} from "react"

class Count extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncrementCount() {
   this.setState({count: this.state.count + 1})
  }

  handleDeIncrementCount() {
    this.setState({count: this.state.count - 1})
   }

  render() {
    const { count } = this.state
    return(
      <div style={{padding: "50px 700px"}}>
        {count}
        <button onClick={() => {this.handleIncrementCount()}}>+</button>
        <button onClick={() => {this.handleDeIncrementCount()}}>-</button>
      </div>
    )
  }
}

export default Count