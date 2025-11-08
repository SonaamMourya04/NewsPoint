import React from 'react'
import {Data} from '../App'

const ComponentA = () => {
  return (
    <div>
      <Data.Consumer>
{(name)=>{return <h1>{name}</h1>}}
      </Data.Consumer>

    </div>
  )
}

export default ComponentA;