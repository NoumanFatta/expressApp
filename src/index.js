const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "data.json");
const staticPath = path.join(__dirname, "../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index.hbs');
});

app.get('/submit', (req, res) => {
    // res.send(req.query.name);
    fs.appendFile(filePath, `${JSON.stringify(req.query)},`, () => {
    })
    res.render('greet.hbs', {
        name: req.query.name
    })
});

app.get("/about", (req, res) => {
    res.render('about.hbs');
})
app.get('*', (req, res) => {
    res.send("Page not found")
})
app.listen(port, () => { })
