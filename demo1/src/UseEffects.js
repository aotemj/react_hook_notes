import React, {useEffect, useState} from 'react'

export default function UseEffect() {
  const [title, setTitle] = useState(0)
  const [flag, setFlag] = useState(0)
  const onResize = () => {
    // console.log(e);
    console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);
    const title = `${document.documentElement.clientWidth} / ${document.documentElement.clientHeight}`
    setTitle(title)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    document.title = title
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])
  return (
    <div>
      {title}
      <div>
        {
          flag ? <span>{flag}</span> : <p>{flag}</p>
        }
      </div>
      <button onClick={() => setFlag(flag ? 0 : 1)}>toggle: {flag}</button>
    </div>
  )
}
