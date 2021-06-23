import React, {Component, memo, useCallback} from 'react'

let fnn1 = null;
let fnn2 = null;

const ExpensiveComponent = memo(({handleClick}) => {
    const date = new Date();
    return <h1 onClick={handleClick}>{date.getSeconds()} 昂贵组件示例</h1>
})

function Com1({p1}) {
    const fn1 = () => console.log("fn1")
    console.log("Com1是否重新渲染: ", !Object.is(fnn1, fn1))
    fnn1 = fn1
    return <ExpensiveComponent onClick={fn1}/>
}

function Com2({p2}) {
    const fn1 = useCallback(() => console.log("fn1"), [p2])
    console.log("Com2是否重新渲染:", !Object.is(fnn2, fn1))
    fnn2 = fn1
    return <ExpensiveComponent onClick={fn1}/>
}

class UseCallbackDemo3 extends Component {
    state = {
        p1: 0,
        p2: 0,
    }

    render() {
        const {p1, p2} = this.state
        return (
            <div>
                <h2> 每次点击 fn1 都是新的</h2>
                <Com1 p1={p1}/>
                <button onClick={() => this.setState({p1: p1 + 1})}> p1 +1</button>
                <hr/>
                <h2>不用重复生成fn1</h2>
                <Com2 p2={this.state.p2}/>
                <button onClick={() => this.setState({p2: p2 + 1})}>p2 + 1</button>
            </div>
        )
    }
}

export default UseCallbackDemo3