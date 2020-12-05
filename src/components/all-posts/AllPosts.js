import React, {Component} from 'react';
import Post from "../post/Post";
import PostService from "../../services/PostService";



class AllPosts extends Component {

   PostService = new PostService()

    state = {posts: [], chosenPost: null};


   // onChosenPost = (id) =>{
   //      let {posts} = this.state;
   //      let find = posts.find(value => value.id === id);
   //      this.setState({chosenPost: find});
   //
   // }

   onChosenPost = (id) =>{
        this.PostService.getPostById(id).then(value => this.setState({chosenPost: value}))

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

       this.PostService.getAllPosts().then(value => this.setState({posts: value}))

    }
}

export default AllPosts;