import React, {Component} from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./commponents/AllUsers/AllUsers";
import AllPosts from "./commponents/AllPosts/AllPosts";

class App extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li>
                        <Link to={'/users'}>to users page</Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>to posts page </Link>
                    </li>
                </ul>

                    <Switch>
                        <Route path={'/users'} component={AllUsers}/>
                        <Route path={'/posts'} component={AllPosts}/>
                    </Switch>
            </div>
        );
    }
}

export default App;
