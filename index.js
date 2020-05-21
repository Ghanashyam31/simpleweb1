const express = require("express");

const app = express();

app.get("/", (req,res) => {
        res.send("Welcome to Docker Page this is changed ...");
});

app.listen(8080,() => {
        console.log("listning on port 8080");
});