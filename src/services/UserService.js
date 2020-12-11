export default  class UserService {

    url = 'https://jsonplaceholder.typicode.com/users';

    allUsers() {
         return fetch(this.url)
            .then(value => value.json());
    }

    userByID(id){
        return fetch(this.url + '/' + id)
            .then(value => value.json());
    }
}
