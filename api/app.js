'use strict';

const express = require('express');
const app = express();

const {local_port,host} = require("./config/env");

app.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json({ status: 200, message:"Welcome to the Retrogaming API" });
});

app.listen(local_port, async () => {
    console.log(`Retrograming Wiki API listening at ${host}:${local_port}`);
});
