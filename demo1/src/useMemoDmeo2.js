import React, {useMemo, useState} from 'react'

/**
 * 知识点：
 * useMemo 保存了渲染的结果
 * 分别改变a,b 的值，观察变量 child1,child2 的变化
 * 点击修改a，child1，child2都重新计算，重新渲染
 * 点击修改b,child2重新计算，child1 渲染一次
 */
let ch;

const Child1 = ({a}) => {
  console.log('Child1 重新渲染')
  return <h2>{a}</h2>
}

function Parent({a,b}) {
// 使用 useMemo
  const child1 = useMemo(() => <div>
    {
      console.log('这是一个复杂的计算')
    }
    <Child1 a={b}></Child1>
  </div>, [a])
  console.log('是否相等',child1 == ch)
  ch = child1

  // 不使用 useMemo

  const child2 = <div>
    {console.log('child2 重新计算')}
    <Child1 a={b}/>
  </div>
  return (
    <div>
      {child1}
      {child2}
    </div>
  )
}

const UseMemoDemo2 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return  <div>
    <Parent a={a} b={b}/>
    <button onClick={()=>setA(a+1)}>改变a</button>
    <button onClick={()=>setB(b+1)}>改变b</button>
  </div>
}

export default UseMemoDemo2
