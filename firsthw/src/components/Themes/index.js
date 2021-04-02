import React from 'react'

import './styles.css'

// I am creating this array here so it wont re-create every time our components re-render
const themes = ['gray','red','green','blue','purple','royalblue','black']

const Themes = ({setCounterTextColor}) => {
    return (
      <div>
          {themes.map(color => {
              return <button onClick={()=>setCounterTextColor(color)} key={color} className={`button-${color}`}><p>{color}</p></button>
          })}
      </div>    
  )
}

export default Themes;