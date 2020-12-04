import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenPost: null};


   onChosenPost = (id) =>{
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenPost: find});

   }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                {
                    posts.map(post => <Post item={post} key={post.id} onChosenPost={this.onChosenPost}/>)
                }
                {
                    chosenPost && <h2>{chosenPost.id} - {chosenPost.title}</h2>
                }

            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts})
            })
    }
}

export default AllPosts;