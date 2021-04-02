import React from 'react'

import './styles.css'

const Increment = ({setCounter,counter}) => {

    return (
        <div className='increment-option-container'>
            <button onClick={() => setCounter(counter+1)} className='increment-button'>+1</button>
            <button onClick={() => setCounter(counter+5)} className='increment-button'>+5</button>
            <button onClick={() => setCounter(counter+100)} className='increment-button'>+100</button>
        </div>
    )
}

export default Increment