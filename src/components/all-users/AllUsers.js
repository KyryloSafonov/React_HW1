import React, {Component} from 'react';
import User from "../user/User";

class AllUsers extends Component {

    state = {users:[], chosenOne: null};

    constructor() {
        super();

    }

    onSelectUser = (id) => {

        let {users} = this.state;
        let find = users.find(value => value.id === id);
        this.setState({chosenOne:find})


    }


    componentDidMount() {
         this.users = [];
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users})
            });
    }

    render() {

        let {users,chosenOne} = this.state;

        return (
            <div>
                {
                    users.map(user => <User item={user} key={user.id} onSelectUser={this.onSelectUser}/>)
                }
                {
                    chosenOne && <h2>{chosenOne.id} - {chosenOne.name}</h2>
                }


            </div>
        );
    }
}

export default AllUsers;