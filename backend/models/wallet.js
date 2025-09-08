const express = require("express");
const moongoose = require("mongoose ");
const dotenv = require ("dotenv");


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});