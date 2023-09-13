#!/usr/bin/node

const request = require ('request');
const url = process.arg[2];

request.get(url, fuction(err, response){
    console.log('code:', ${response.statuscode});
});