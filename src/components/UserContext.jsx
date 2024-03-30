import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

const UserContext = ( {children} ) => {

    
    
    const [ remain, setRemain ] = useState(2000);
    const [ spent, setSpent ] = useState(0);
    const [ data, setData ] = useState([]);

    let localData = [];



    useEffect(() => {
        if(localStorage.getItem('item') === null){
            localStorage.setItem('item', JSON.stringify(localData));
            setData(localData);
        }
        else{
            localData = JSON.parse(localStorage.getItem('item'));
            setData([...localData]);
        }

        console.log(localData);
        console.log(data);

        let total = localData.reduce((sum, item) => sum + item.price, 0);
        let remaining = localData.reduce((sum, item) => sum - item.price, 2000);
        console.log(total);
        setSpent(total);
        setRemain(remaining);
    
    }, [])





    return(
            <DataContext.Provider value={ { data, setData, remain, setRemain, spent, setSpent } }> 
                {children}
            </DataContext.Provider>
    )
}

export default UserContext;