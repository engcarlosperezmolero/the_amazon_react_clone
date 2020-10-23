import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:5001/the-ammazon-clone/us-central1/api' // THE API (cloud function from firebase) URL
});

export default instance;
