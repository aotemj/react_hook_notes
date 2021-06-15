import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} from "react";

const Demo1Context = createContext(90)
const Demo2Context = createContext(90)
const Demo3Context = createContext(21)

// context
class Leaf extends Component {
  render() {
    return <div>
      <Demo1Context.Consumer>
        {value => <div>{value}</div>}
      </Demo1Context.Consumer>
    </div>
  }
}

//contextType
class Leaf2 extends Component {
  static contextType = Demo2Context

  render() {
    const demo2Value = this.context
    return <div>
      value2: {demo2Value}
    </div>
  }
}

// useContext
function Leaf3(props) {
  // const count = useContext(Demo3Context)
  console.log('lef3 render');
  const [count, setCount] = useState(0)

  const double = useMemo(() => {
    return count * 2
  }, [count])

  // useEffect(() => {
  //   console.log('count changed')
  // }, [])
  const onClick = () => {
    setCount(count => count + 1)
  }
  return <div>
    {count}
    double: {
    double
  }
    <button onClick={onClick}> count+1</button>
  </div>
}

class Middle extends Component {
  render() {
    return <div>
      <Leaf/>
      <Leaf2/>
      <Leaf3 onClick={this.props.onClick}/>
    </div>
  }
}

export default class Context1 extends Component {
  state = {
    value1: 20,
    value2: 33,
    value3: 20
  }

  onClick() {
    // console.log('state++');
    this.setState({
      value3: this.state.value3 + 1
    })
  }

  render() {
    const {value1, value2, value3} = this.state
    return <div>
      <Demo1Context.Provider value={value1}>
        <Demo2Context.Provider value={value2}>
          <Demo3Context.Provider value={value3}>
            <Middle onClick={() => this.onClick()}/>
          </Demo3Context.Provider>
        </Demo2Context.Provider>
      </Demo1Context.Provider>
    </div>
  }
}
