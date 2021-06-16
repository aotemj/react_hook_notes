import React, {createContext, useReducer} from "react";

export const ColorContext = createContext()

export const UPDATE_COLOR = "UPDATE_COLOR"
const Color = (props) => {
    const [color, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case UPDATE_COLOR:
                return action.color;
            default:
                return state
        }
    }, "blue")
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}

export default Color