import React, {useEffect, useState} from 'react';

const UseEffect2 = function () {
    const [count, setCount] = useState(0)
    const [id, setId] = useState('')
    useEffect(() => {
        const fetchId = () => {
            console.log("初始化id");
            setId("初始化id")
        }
        fetchId()
    }, [])
    useEffect(() => {
        const fetchData = () => {
            if (id) {
                // 模拟获取数据
                console.log(`fetchData: params:count: ${count}${id}`)
            }
        }
        console.log("组件初始化==useEffect2")

        fetchData()
    }, [count, id])
    const handleClick = () => {
        setCount(count + 1)
    }
    return <div>
        当前点击次数：{count}
        <button onClick={handleClick}>点击</button>
    </div>
}

export default UseEffect2