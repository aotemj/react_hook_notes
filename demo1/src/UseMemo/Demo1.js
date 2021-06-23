import React, {useMemo, useState} from 'react';

let ch;

function Parent({a, b}) {

    const Child1 = ({a}) => {
        return <div>{a}</div>
    }
    const child1 = useMemo(() => {
        return (
            <div>
                {console.log("这是一个复杂的计算")}
                child1: <Child1 a={b}/>
            </div>
        )
    }, [a])

    console.log('child1 是否相等：', child1 === ch);
    ch = child1;

    const child2 = <div>
        {console.log("child2重新计算")}
        child2:<Child1 a={b}/>
    </div>

    return <>
        {child1}
        {child2}
    </>
}

const Demo1 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    return <div>
        <Parent a={a} b={b}/>
        <button onClick={() => setA(a + 1)}>改变a</button>
        <button onClick={() => setB(b + 1)}>改变b</button>
    </div>
}

export default Demo1