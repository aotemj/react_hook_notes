import React, {Component, lazy, Suspense} from 'react'

const About = lazy(() => import(/* webpackChunkName: "about" */ './About'))


class LazyDemo extends Component {
  state = {
    hasError: false
  }

  // 检测到error 自动注入
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }

  render() {
    const {hasError} = this.state
    if (hasError) return <div>error</div>
    return <div>
      <Suspense fallback={<div>loading</div>}>
        <About></About>
      </Suspense>
    </div>
  }
}

export default LazyDemo
