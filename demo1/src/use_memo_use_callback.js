import React, {useMemo, useState, memo, useCallback} from "react";


const Counter = memo(function Counter(props) {
  const {count} = props
  console.log('counter render');
  return <div>
    {count}
  </div>
})

export default function UseMemo() {
  const [count, setCount] = useState(0)
  const double = useMemo(() => {
    return count * 2
  }, [count == 3])
  // const onClick = useMemo(() => {
  //   // console.log('click');
  //   return () => setCount(count => count + 1)
  // }, [])
  const onClick = useCallback(() => {
    // console.log('click');
    setCount(count => count + 1)
  }, [])
  // const onClick = () => {
  //   // console.log('click');
  //   setCount(count => count + 1)
  // }
  return (
    <div>
      <button onClick={onClick}>count+1</button>
      <Counter count={double} onClick={onClick}/>
      {/*<Counter count={double}/>*/}
      count:{count}
    </div>
  )
}
