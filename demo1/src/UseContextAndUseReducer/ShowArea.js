import React, {useContext} from 'react'
import {ColorContext} from "./Color";

const ShowArea = () => {
    const {color} = useContext(ColorContext)
    return (
        <div style={{color: color}}>当前字体颜色为： {color}</div>
    )
}

export default ShowArea