import React, {Component, PureComponent} from 'react'

class Foo extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.count == this.props.count) {
  //     return false
  //   }
  //   return true
  // }

  render() {
    console.log('foo render')
    return <div>{this.props.person.age}</div>
  }
}

export default class MemoDemo extends Component {
  state = {
    count: 1,
    person: {
      age: 1
    }
  }


  render() {
    const person = this.state.person
    return <div>
      <Foo person={person}/>
      {this.state.count}
      <button onClick={() => {
        person.age++;
        this.setState({
          person
          // count: this.state.count + 1,
          // person: {
          //   // age: this.state.person.age + 1
          // }
        })
      }}>+1
      </button>
    </div>
  }
}
