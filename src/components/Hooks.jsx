/* eslint-disable no-unused-vars */

import { useState } from 'react';
import '../css/Hooks.css'

const Hooks = () => {
    const [value,setValue] = useState(0)
    const handleIncrement = ()=>{
        const newValue = value + 1
        setValue(newValue)
    }
    const handleDecrement = ()=>{
        const newValue = value -5
        setValue(newValue)
    }
    return (
        <div className="hooks-container">
            <h1>Value : {value}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        
        </div>
    );
};

export default Hooks;