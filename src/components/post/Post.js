import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {item, onChosenPost} = this.props;

        return (
            <div className={'divka'}>
                <p>
                    {item.id} - {item.title}

                    <button onClick={() => onChosenPost(item.id)}>chosePost</button>
                </p>
            </div>
        );
    }
}

export default Post;