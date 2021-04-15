import axios from 'axios';

const url = 'http://localhost:5000/subscribe';

class PostService {
    // CREATE SUBSCRIPTION

    static postEmail(text) {
        return axios.post(url, {
            text: text
        })


    }

}
export default PostService;