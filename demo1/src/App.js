import React, {Component} from 'react';
// import UseMemoDemo2 from "./useMemoDmeo2";
import NormalComponent from './normal'
import UseState from './use_state'
import UseStateAsync from "./useStateAsync";
// import MemoDemo from "./Memo";
// import UseState from "./use_state";
// import UseEffect from "./UseEffects";
// import Context1 from "./Context1";
// import UseMemo from "./use_memo_use_callback";
// import ContextDemo from "./Context";
// import LazyDemo from "./Lazy/LazyDemo";

class App extends Component {

    render() {
        return (<div>
            <NormalComponent/>
            <UseState/>
            <UseStateAsync/>
            {/*<ContextDemo/>*/}
            {/*<LazyDemo/>*/}
            {/*<MemoDemo/>*/}
            {/*<UseEffect/>*/}
            {/*<Context1/>*/}
            {/*<UseMemo/>*/}
            {/*<UseMemoDemo2/>*/}
        </div>);
    }
}

export default App;
