import React from 'react'

import './styles.css'

const Decrement = ({setCounter,counter}) => {

    return (
        <div className='decrement-option-container'>
            <button onClick={() => setCounter(counter-1)} className='decrement-button'>-1</button>
            <button onClick={() => setCounter(counter-5)} className='decrement-button'>-5</button>
            <button onClick={() => setCounter(counter-100)} className='decrement-button'>-100</button>
        </div>
    )
}

export default Decrement