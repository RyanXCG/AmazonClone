import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-41315.cloudfunctions.net/api",
  //"http://localhost:5001/challenge-41315/us-central1/api", // THE API (cloud function) URL
});

export default instance;
