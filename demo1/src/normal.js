import React from 'react';

class NormalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickTimes: 0
        }
    }

    handleClick() {
        this.setState(() => {
            return {
                clickTimes: this.state.clickTimes + 1
            }
        })
    }

    render() {
        const {clickTimes} = this.state
        return (
            <div>
                you click button {clickTimes} times
                <button onClick={this.handleClick.bind(this)}>点击</button>
            </div>
        );
    }
}

export default NormalComponent;