import React, { useState } from 'react'

function HooksCounter(props) {
 const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Hello {props.name}, I'm a functional component with Hooks!</h1>
        <h2>You cliked {count} times</h2>
        <button onClick = {()=>setCount(count+1)}>Click to Count</button>
    </div>
  )
}

export default HooksCounter