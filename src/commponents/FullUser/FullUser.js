import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUser extends Component {

    state = {user: null};
    UserService = new UserService();

    componentDidMount() {
        const {userId} = this.props;
        this
          .UserService
          .userByID(userId)
          .then(user=>this.setState({user}))

    }

    render() {
        const {user} = this.state;
        return (
            <div>
                {user && <div>{user.id} - {user.name} - {user.email}</div>}
            </div>
        );
    }
}

export default FullUser;
