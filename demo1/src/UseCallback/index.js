import React, {Component, memo, useCallback} from 'react';

let fn = null;
const TestUseCallback = ({num, name}) => {
    const memoizedCallback = useCallback(() => {
        console.log('abc');
        return num1;
    }, [num])

    console.log('callback 是否相同：', Object.is(fn, memoizedCallback), name)
    console.log("num > ", num, name)
    fn = memoizedCallback;
    return (
        <div>
            <p>TestUseCallback</p>
        </div>
    )
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6]

class UseCallback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            count: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            })
        }, 3000)
    }

    handleChangeNum = () => {
        this.setState({
            name: 'def',
            num: num2
        })
    }

    render() {
        const {name, num} = this.state
        return (
            <div>
                <button onClick={this.handleChangeNum}>修改传入的Num值</button>
                <TestUseCallback num={num} name={name}/>
            </div>
        )
    }
}

export default UseCallback