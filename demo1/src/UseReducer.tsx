import React, {FunctionComponent, useReducer} from 'react'

const UseReducerComponent: FunctionComponent = () => {
    const [count, dispatch] = useReducer((state: any, action: string) => {
        switch (action) {
            case "Add":
                return state + 1;
            case "Sub":
                return state - 1;
            default:
                return state
        }
    }, 0)
    return <div>
        <p>UseReducerDemo</p>
        <button onClick={() => dispatch("Add")}>+1</button>
        <button onClick={() => dispatch("Sub")}>-1</button>
        <p>当前count的值：{count}</p>
    </div>
}
export default UseReducerComponent