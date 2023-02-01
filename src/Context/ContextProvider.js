import React, { useContext } from 'react';

const Context = React.createContext();

export function ContextFunction() {
    return useContext(Context)
}

export function InputProvider({ children }) {

    let obj = {

    }

    return (
        <Context.Provider value={obj}>
            {children}
        </Context.Provider>
    )
}