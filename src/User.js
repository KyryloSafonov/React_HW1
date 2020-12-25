import React, {Component} from 'react';

class User extends Component {

    componentWillUnmount() {
        console.log('deleted ');
    }

    render() {

         let {item, onDeleteUser} = this.props;

    return(

        <div>
            {item.name} - {item.id} - {item.username}
            <button onClick={()=> onDeleteUser(item.id)}>delete</button>
        </div>
        );
    }

}

export default User;