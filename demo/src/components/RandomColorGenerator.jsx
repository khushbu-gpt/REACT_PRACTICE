import React, { useState } from 'react'

const RandomColorGenerator = () => {
    const [color,setColor]=useState("")
    function colorGenerator() {
       setColor()
    }
  return (
    <div className={`bg-${color}`}>
      <button onClick={colorGenerator}></button>
    </div>
  )
}

export default RandomColorGenerator
