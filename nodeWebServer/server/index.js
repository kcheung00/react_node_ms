const axios = require('axios');
const express = require("express");
const https = require('https');
const { send } = require('process');
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/hello", (req, res) => {
    res.json({ message: "Hello from Node server!" });
});

app.get("/callAPI_1", (req, res) => {
    res.json({ message: "Make CDC Reporting API 1" });
});

app.get("/getMockAPI_2", (req, res) => {
    var URL = 'https://api.riteaid.com/digital/vaccine-provider/states/schedules/NV.ndjson';
    var data = axios.get(URL)
        .then(response => {
            console.log(response.data);
            return( response.data );
        })
        .catch(error => {
            console.log(error);
        });

    data.then(function(result){
        res.json(result);
    })
});

async function makeGetRequest() {
    var URL = 'http://jsonplaceholder.typicode.com/todos/1';
    let res = await axios.get(URL);
    return(res.data);
}

app.get("/getMockAPI_3", (req, res) => {
    var test = makeGetRequest();
    console.log(test);
    test.then(function(result){
        res.json(result);
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
