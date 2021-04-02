import React from 'react'

import './styles.css'


import Message from '../Message'
import Counter from '../Counter'

const MainScreen = () => {
    return (
        <div className='main-screen-container'>
            <Message title={'Homework N1'} madeBy={'Giorgi Begiashvili'} />
            <Counter />
        </div>
    )
}

export default MainScreen;