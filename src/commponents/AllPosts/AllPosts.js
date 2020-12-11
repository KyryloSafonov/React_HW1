import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../Post/Post";

class AllPosts extends Component {

    PostService = new PostService();
    state = {posts:[]};

    async componentDidMount() {
        const posts = await this.PostService.posts();
        this.setState({posts});
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;