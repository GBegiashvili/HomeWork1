import React from 'react'

import './styles.css'

const Message = ({title,madeBy}) => {
    return (
        <div>
            <h1 className='main-screen-title '>{title}</h1>
            <p className='main-screen-secondary-title'>By: {madeBy}</p>
        </div>
    )
}

export default Message