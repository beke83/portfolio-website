import { createContext, useReducer } from "react";

//1: create the theme context
export const ThemeContext = createContext();

//2: provide the initial state
const INITIAL_STATE = { darkMode: true };

//3: create a reducer that would change the initial state
const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
}

//4: create the theme provider and export our actions

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    //return
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}