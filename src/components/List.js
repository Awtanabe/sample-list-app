import React, {Component} from "react"

class List extends Component {
  constructor(props) {
    super(props)
  }

  handlUpdate(index) {
    this.props.handlListUpdate(index)
  }

  render() {
    const { list, index } = this.props
    return(
      <li>
       {list}
       <button onClick={() => {this.handlUpdate(index)}}>更新</button>
      </li>
    )
  }
}

export default List;