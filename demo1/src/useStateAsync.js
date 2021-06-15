import React, {useState} from 'react'

const UseStateAsync = function () {
    const [num, setNum] = useState(0)
    const handleClick = () => {
        // 当点击完3次 “点击” 按钮后再点击 “显示现在的值”，当延时函数执行钱，再点击2次 “点击”按钮，然后观察 alert 的值 为 3 并不是5
        // 原因在于 每点击一次 点击 按钮， 当前的函数式组件（UseStateAsync）都会 重新渲染一次，渲染的时候 num的值从 useState 里面获取，
        // 在更新状态之后，React 会重新渲染组件，每一次渲染 都能拿到独立的num 状态，这个状态值是函数中的一个常量
        // 当前功能如果使用 Class Component 实现，则结果为 5，
        // 原因：当前的 num 是从 this.state.num 中读取的数据，在 React 中state 是不可变的，然而 this 是 可变的，通过类组件的 this， 我们
        // 可以获取到最新的state和 props
        setTimeout(() => {
            alert(num)
        }, 3000)
    }
    return <div>
        <h3>useState async </h3>
        <p>当前点击了{num}次</p>
        <button onClick={() => setNum(num + 1)}>点击</button>
        <button onClick={handleClick}>显示现在的值：</button>
    </div>
}

export default UseStateAsync