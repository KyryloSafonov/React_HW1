import React, {Component} from 'react';
import Button from "../button/Button";

class User extends Component {
    render() {

        let {item, onSelectUser} = this.props;

        return (
            <div>
                {item.id} - {item.name}

                <button onClick={() => onSelectUser(item.id)}>chose</button>
                <Button onSelectedUser={onSelectUser}/>
            </div>
        );
    }
}

export default User;