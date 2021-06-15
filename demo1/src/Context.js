import React, {Component, createContext} from 'react';

const BatteryContext = createContext(90)
const OnlineContext = createContext()

class Leaf extends Component {
  static contextType = BatteryContext

  render() {
    const battery = this.context
    return (
      <div>battery: {battery}</div>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf/>
  }
}

class ContextDemo extends Component {
  state = {
    value: 50,
    online: false
  }

  render() {
    const {value, online} = this.state
    return (<div>
      <BatteryContext.Provider value={value}>
        <OnlineContext.Provider value={online}>
          <button onClick={() => this.setState({value: value + 1})}>+1</button>
          <button onClick={() => this.setState({value: value - 1})}>-1</button>
          {/*<button onClick={() => this.setState({online: !online})}>changeFalse</button>*/}
          <Middle/>
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    </div>);
  }
}

export default ContextDemo;
