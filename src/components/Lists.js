import React, {Component} from "react"

class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [1,2,3,4]
    }
  }
  
  render() {
    const { lists } = this.state
    return(
      <div>
        <ul>
          {lists.map((list) => <li>{list}</li>)}
        </ul>
      </div>
    )
  }
}

export default Lists;