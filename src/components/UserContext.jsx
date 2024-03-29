import { createContext } from "react";

const data = [];

export const DataContext = createContext();

const UserContext = ( {children} ) => {

    return(
        <div>
            <DataContext.Provider value={ {data: data } }> 
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext;