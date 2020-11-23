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

class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [1,2,3,4]
    }
  }

  addList() {
    const newLists = [...this.state.lists]
    const addNum = this.state.lists.length + 1
    newLists.push(addNum)
    this.setState({lists: newLists})
  }

  handlListUpdate(index) {
    const newLists = [...this.state.lists]
    newLists.splice(index,1, "updated")
    this.setState({lists: newLists})
  }
  
  render() {
    const { lists } = this.state
    return(
      <div>
        <ul>
          <button onClick={this.addList.bind(this)}>増やす</button>
          {lists.map((list, index) => <List index={index} list={list} handlListUpdate={this.handlListUpdate.bind(this)}/>)}
        </ul>
      </div>
    )
  }
}

export default Lists;