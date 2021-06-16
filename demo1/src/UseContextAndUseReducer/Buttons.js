import React, {useContext} from 'react'
import {ColorContext, UPDATE_COLOR} from "./Color";

const Buttons = () => {
    const {dispatch} = useContext(ColorContext)
    return (
        <>
            <button onClick={() => dispatch({type: UPDATE_COLOR, color: "blue"})}>蓝色</button>
            <button onClick={() => dispatch({type: UPDATE_COLOR, color: "yellow"})}>黄色</button>
        </>
    )
}

export default Buttons