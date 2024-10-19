const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("Server Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });
