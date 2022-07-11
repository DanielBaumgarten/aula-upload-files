import axios from "axios";

export default axios.create({
    baseURL: 'http://localhot:3003',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});