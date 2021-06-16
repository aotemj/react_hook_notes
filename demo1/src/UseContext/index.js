import React, {createContext, useContext, useState} from 'react';

const CountContext = createContext(0);

const SubChild = () => {
    const count = useContext(CountContext)
    return <div>
        <p>SubChild</p>
        <p>来自 上上级组件的count的值:{count}</p>
    </div>
}

const Child = () => {
    // const count = useContext(CountContext)
    return <div>
        <p>Child Component</p>
        {/*<p>{count}</p>*/}
        <SubChild/>
    </div>
}


const UseContextComponent = () => {
    const [count, setCount] = useState(0)
    return <div>
        <h3>UseContextParent</h3>
        <CountContext.Provider value={count}>
            <Child/>
        </CountContext.Provider>
        <button onClick={() => setCount(count + 1)}> +1</button>
    </div>
}

export default UseContextComponent