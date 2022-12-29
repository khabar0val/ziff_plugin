import axios from 'axios';

let url = document.getElementById("url");

function getDataFromURL(url) {
    data = axios.get(url)

    return data

}

function sendInfo(url) {
    data = getDataFromURL(url)

    axios.post('localhost:3000/post', {
        url: url,
        data: data
    });
}

sendInfo(url)
