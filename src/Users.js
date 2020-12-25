import React, {Component} from 'react';
import User from "./User";

class Users extends Component {

    state = {users: []}

    onDeleteUser = (id)=>{
        let {users} = this.state;
        let splice = users.splice(id-1,1);
        this.setState({users})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});

            })
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id} onDeleteUser={this.onDeleteUser}/>)
                }
            </div>
        );
    }
}

export default Users;