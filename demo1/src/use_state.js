import React, {useState} from 'react'

const UseState = () => {
    // 结构赋值
    const [clickTimes, setClickTimes] = useState(0)

    const handleClick = () => {
        setClickTimes(clickTimes + 1)
    }
    return <div>
        <h3>useState </h3>
        you click button {clickTimes} times
        <button onClick={handleClick}>点击</button>
    </div>
}
export default UseState