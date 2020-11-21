import React, {useState} from 'react';
import {hot} from 'react-hot-loader';
import './App.css';

function App(){
    const [ count, setCount] = useState(0);

    return(
        <div>
            <div>Hello</div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default hot(module)(App);
