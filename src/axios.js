import axios from "axios";
const instance=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos/1"
})
export default instance;