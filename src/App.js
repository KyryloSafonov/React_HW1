import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./commponents/AllUsers/AllUsers";
import AllPosts from "./commponents/AllPosts/AllPosts";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/users'}>
                               to users page
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts'}>
                                to posts page
                            </Link>
                        </li>
                    </ul>

                    <div>
                        <Switch>
                            <Route path={'/users'} render={(props)=> {

                                return <AllUsers/>

                            }}/>

                            <Route path={'/posts'} render={(props)=> {
                                return <AllPosts/>
                            }}/>
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;