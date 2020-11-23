import React, {Component} from "react"

class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list } = this.props
    return(
      <li>
       {list}
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
  
  render() {
    const { lists } = this.state
    return(
      <div>
        <ul>
          <button onClick={this.addList.bind(this)}>増やす</button>
          {lists.map((list, index) => <List index={index} list={list}/>)}
        </ul>
      </div>
    )
  }
}

export default Lists;