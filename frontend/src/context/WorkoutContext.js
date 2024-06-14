import { createContext } from "react";

const WorkoutsContext = createContext()

// provide the context to the application trree


const WorkoutContextProvider = ({children}) => {
    return (
        <WorkoutsContext.Provider>
            {children}

        </WorkoutsContext.Provider>
    )
}