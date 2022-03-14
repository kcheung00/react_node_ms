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

app.get("/callAPI_2", (req, res) => {
    res.json({ message: "Make CDC Reporting API 2" });
});

app.get("/getMockAPI", (req, res) => {
    var optionsget = {
        host: 'jsonplaceholder.typicode.com', // here only the domain name
        // (no http/https !)
        port: 443,
        path: '/todos/1', // the rest of the url with parameters if needed
        method: 'GET' // do GET
    };

    console.info('Options prepared:');
    console.info(optionsget);
    console.info('Do the GET call');

    res.json("Heee");

    // do the GET request
    var reqGet = https.request(optionsget, function (res) {
        console.log("statusCode: ", res.statusCode);

        // uncomment it for header details
        console.log("headers: ", res.headers);

        res.on('data', function (d) {
            console.info('GET result:\n');
            process.stdout.write(d);
            console.info('\n\nCall completed');
        });
    });

    reqGet.end();
    reqGet.on('error', function (e) {
        console.error(e);
    });
});

app.get("/getMockAPI_2", (req, res) => {
    var URL = 'https://api.riteaid.com/digital/vaccine-provider/states/schedules/NV.ndjson';
    var data = axios.get(URL)
        .then(response => {
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
    // var URL = 'https://api.riteaid.com/digital/vaccine-provider/states/schedules/NV.ndjson';
    var URL = 'http://jsonplaceholder.typicode.com/todos/1';
    let res = await axios.get(URL);
    return(res.data);
}

app.get("/getMockAPI_3", (req, res) => {
    var test = makeGetRequest();
    test.then(function(result){
        res.json(result);
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});