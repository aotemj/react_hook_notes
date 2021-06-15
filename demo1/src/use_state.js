import React, {useState} from 'react';

export default function UseState(props) {
  const [count, setCount] = useState(() => {
    return 0
  })
  console.log("render")
  return (
    <div>
      {count}
      <button onClick={() => {
        setCount(count => count + 1)
      }}>+1
      </button>
    </div>
  )
}
