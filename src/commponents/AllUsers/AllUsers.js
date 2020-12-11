import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../User/User";
import {Route, withRouter} from "react-router-dom";
import FullUser from "../FullUser/FullUser";

class AllUsers extends Component {

    UserService = new UserService();
    state = {users: [], loading: true};

    componentDidMount() {
        setTimeout(() =>{
            this
                .UserService
                .allUsers()
                .then(users => this.setState({users, loading: false}))
                .catch(err => console.error(err))
        }, 3000)
    }

    render() {
        const {users, loading} = this.state;
        const {match: {url}} = this.props;
        return (
            <div>
                {
                    !loading
                        ? users.map(value => <User item={value} key={value.id}/>)
                        : <h1>Loading</h1>
                }
                <hr/>
                <Route path={url + '/:id'} render={myRout}/>
            </div>
        );
    }
}

export default withRouter(AllUsers);

const myRout = (props) => {
    const {match: {params: {id}}} = props;
    return <FullUser userId={id} key={id}/>
}
