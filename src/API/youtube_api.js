import axios from "axios";
const KEY = "AIzaSyDQ7g7iHUU9sWHLabFhwncONyAcTM_plXA"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 25,
        key: KEY,
    },
    headers: {}
})