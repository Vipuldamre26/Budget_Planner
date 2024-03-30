import { useContext, useRef } from 'react';
import './dataadd.css';
import { DataContext } from './UserContext';

const DataAdd = () => {

    const data = useContext(DataContext);
    let ref1 = useRef(null);
    let ref2 = useRef(null);


    const addData = () => {

        
        let newData = {
            id: data.data.length === 0 ? 1 : data.data.length + 1,
            name: ref1.current.value,   
            price: Number(ref2.current.value),
        }

        // console.log(newData);


        
        localStorage.setItem('item', JSON.stringify([...data.data, newData]));
        data.setData([...data.data, newData]);
        console.log(data.data);


        data.setSpent((prev) => prev += Number(ref2.current.value));
        data.setRemain((prev) => prev - Number(ref2.current.value));
        
        
             
    }

    return(
        <div className='dataAdd'>
            <h2>Add Expenses</h2>
            <div className='add'>
                <div className='add1'>
                    <label id='name'>Name</label>
                    <input ref={ref1} type='text' for='name'></input>
                </div>
                <div className='add1'>
                    <label id='number'>Cost</label>
                    <input ref={ref2} type='number' for='number'></input>
                </div>
            </div>
            <button onClick={addData}>Save</button>
        </div>
    )
}

export default DataAdd;