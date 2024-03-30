import { useContext } from 'react';
import './datashow.css';
import { DataContext } from './UserContext';

const DataShow = () => {

    const data = useContext(DataContext);

    const removeItem = (id) => {

        let Data = [...data.data];

        let newData = Data.filter((item) => item.id !== id);
        localStorage.setItem('item', JSON.stringify(newData));

        let delData = Data.filter((item) => item.id === id);

        console.log(newData);

        data.setData(newData);
        
        data.setSpent((prev) => prev -= delData[0].price);
        data.setRemain((prev) => prev + delData[0].price);
    }

    return (
        <div className='dataShow'>
            <h1>My Budget Planner</h1>
            <div className='change'>
                <div className='show'>
                    <p>Budget: Rs. 2000</p>
                </div>
                <div className='show'>
                    <p>Remaining: Rs. {data.remain}</p>
                </div>
                <div className='show'>
                    <p>Spent so far: Rs. {data.spent}</p>
                </div>
            </div>
            <strong onClick={() => console.log(data.data)}>Expenses</strong>
            <div className='items'>
                {

                    data.data.length === 0 ? <p>Add Data to List . . . </p> : data.data.map((item) => {
                        return (
                            <div className='item' key={item.id} >
                                <span>{item.name}</span>
                                <div className='price'>
                                    <span>{item.price}</span>
                                    <span onClick={() => removeItem(item.id)} className='x'>X</span>
                                </div>
                            </div>
                        )

                    })
                }
            </div>




        </div>
    )
}

export default DataShow;