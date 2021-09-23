// Imports
const express = require("express");


// Making main app variable and setting view engine
const app = express();
app.set("view engine", "ejs");
const port = 5500;


// We are not going to use our main endpoint as our ejs rendered file so we'll just keep this static for now
app.get("/", (req, res) => {
    res.send("Home page");
});


// Now this endpoint will be used as our ejs render file
app.get("/render", (req, res) => {
    const random = Math.floor(Math.random() * 2) + 1;
    if(random === 1){
        res.render("response.ejs", {data: {bool: true, true: "True!", false: "False!"}})
    }
    if(random === 2){
        res.render("response.ejs", {data: {bool: false, true: "True!", false: "False!"}})
    }
})

// The data provided needs to be a javascript object

// Starting the app
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});