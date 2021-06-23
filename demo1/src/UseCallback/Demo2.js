import React, {Component, memo, useCallback, useState} from 'react'

/**
 * Foo 类组件中没有使用 箭头函数，重新生成了多个函数
 * Foo1 类组件中用 bind 绑定 this,只有一个函数
 * Foo2 函数组件反复生成了多个 handleClick
 * Foo3 函数组件用 useCallback 避免了重复生成handleClick
 * 通过 useCallback 避免 Parent 重新渲染，优化了性能
 */
class Foo extends Component {
    handleClick() {
        console.log("Foo handle Click invoked");
    }

    render() {
        return <button onClick={() => this.handleClick()}>Foo Button</button>
    }
}

class Foo1 extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("Foo1 handle Click invoked")
    }

    render() {
        return <button onClick={this.handleClick}> Foo1 Button</button>
    }
}

function Foo2() {
    function handleClick() {
        console.log("Foo2 handleClick")
    }

    return <div>
        <button onClick={handleClick}>Foo2 Button</button>
    </div>
}

function Foo3() {
    const memoizedHandleClick = useCallback(() => console.log("Foo3 handleClick"), [])
    return <button onClick={memoizedHandleClick}>Foo3 Button</button>
}

const Parent = memo(({a, c}) => {
    {
        console.log("Parent 渲染")
    }
    return <div>
        a: {a}
        <button onClick={c}>点击c按钮</button>
    </div>
})

const App = props => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    // 使用 useCallback 时，memoHandleClick 方法会被缓存， 当 Parent 组件内的其他状态没有变化的时候，
    // App 组件渲染时，由于 Parent 组件内的props、state都没有变化，则当前 parent 不会重新渲染，节省了资源消耗
    // const memoHandleClick = useCallback(() => {
    //     console.log('memo click')
    // }, [])
    // 不使用 useCallback 时，App 组件渲染时，一定会引起 Parent 组件的渲染，因为此时 重新生成了 memoHandleClick 方法，
    const memoHandleClick = () => {
        console.log('memo click')
    }
    return (
        <div>
            {console.log("app 渲染")}
            <Parent a={a} c={memoHandleClick}/>
            <button onClick={() => setA(a + 1)}>改变a</button>
            <button onClick={() => setB(b + 1)}>改变b</button>
            <button onClick={memoHandleClick}>memoButton</button>
        </div>
    )
}

export default App