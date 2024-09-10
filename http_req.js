const express = require('express');
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hell from client");
    console.log(req.body)
});
app.post("/", (req, res) => {
    res.send("Hell from client");
    console.log(req.body)
});app.put("/", (req, res) => {
    res.send("Hell from client");
    console.log(req.body)
});app.delete("/", (req, res) => {
    res.send("Hell from client");
    console.log(req.body)
});


 
app.listen(4001, () => {
    console.log("Server is running on port 4001");
});
