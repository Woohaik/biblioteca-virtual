import axios from "axios";

export const axiosBaseURL = axios.create({
    baseURL: 'https://bibliotechtest.herokuapp.com/api/'
});


