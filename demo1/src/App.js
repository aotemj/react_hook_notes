import React, {Component} from 'react';
// import UseMemoDemo2 from "./useMemoDmeo2";
// import NormalComponent from './normal'
// import UseState from './use_state'
// import UseStateAsync from "./useStateAsync";
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import UseEffect from "./UseEffects";
// import UseEffect2 from "./UseEffect2";
import UseContextComponent from "./UseContext";
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
            <UseContextComponent/>
            {/*<NormalComponent/>*/}
            {/*<UseState/>*/}
            {/*<UseStateAsync/>*/}
            {/*<Router>*/}
            {/*    <Link to="/useEffect1"> UseEffect1</Link>*/}
            {/*    <Link to="/useEffect2"> UseEffect2</Link>*/}
            {/*    <Route path="/useEffect1" component={UseEffect}/>*/}
            {/*    <Route path="/useEffect2" component={UseEffect2}/>*/}
            {/*</Router>*/}
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
