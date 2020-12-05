class PostService {

    url ='https://jsonplaceholder.typicode.com/posts'

    getAllPosts() {
      return fetch(this.url)
            .then(value => value.json())
            .then(posts => {
                return posts;})
    }

    getPostById(id){
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)

    }
}

export default PostService;