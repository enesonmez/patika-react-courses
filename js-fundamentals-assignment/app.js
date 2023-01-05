import axios from "axios";

const getData = async (user_id) => {
    var { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)

    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)

    user['posts'] = posts

    return user
}

export default getData