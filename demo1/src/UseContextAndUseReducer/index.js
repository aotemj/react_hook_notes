import React from 'react';
import Buttons from "./Buttons";
import Color from "./Color";
import ShowArea from "./ShowArea";

const UseContextAndUseReducer = () => {
    return <div>
        <p>UseContextAndUseReducerComponent</p>
        <Color>
            <ShowArea/>
            <Buttons/>
        </Color>
    </div>
}

export default UseContextAndUseReducer