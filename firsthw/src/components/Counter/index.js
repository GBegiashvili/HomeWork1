import React,{useState} from 'react'

import './styles.css'

import Increment from '../CounterOptions/Increment'
import Decrement from '../CounterOptions/Decrement'
import Themes from '../Themes'

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const [counterTextColor,setCounterTextColor] = useState('gray')
    return (
        <div className='counter-container'>
            {/* Theme control */}
            <Themes setCounterTextColor={setCounterTextColor} />
            {/* I manipulate counter style with class-names, by default it is gray */}
            <h1 className={`counter-text-${counterTextColor}`}>{counter}</h1>
            {/* Divided Increment and Decrement functionalities on 2 components for better readability of the code */}
            <div className='counter-button-container'>
                <Increment counter={counter} setCounter={setCounter} />
                <Decrement counter={counter} setCounter={setCounter} />
            </div>
        </div>
    )
}

export default Counter;