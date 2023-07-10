import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key:'3beb8fc568b44b4d8b3b35c1415e1027'
    }
})