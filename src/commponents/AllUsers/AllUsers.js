import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../User/User";

class AllUsers extends Component {

    UserService = new UserService();
    state = {users:[]};

    async componentDidMount() {
        const users = await this.UserService.users();
        this.setState({users});
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers; 