import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../Post/Post";
import {
    Route,
    withRouter
} from "react-router-dom";
import FullPost from "../FullPost/FullPost";


class AllPosts extends Component {

    PostService = new PostService();
    state = {posts: []};

    async componentDidMount() {
        const posts = await this.PostService.posts();
        this.setState({posts});
    }

    render() {
        const {posts} = this.state;
        const {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }

                <hr/>
                <Route path={url + '/:id'} render={(props) => {
                    const {match: {params: {id}}} = props;
                    return <FullPost postId={id} key={id}/>
                }}/>
            </div>
        );
    }
}

export default withRouter(AllPosts);
