const express = require("express");
const notes = require("./data/notes");
const dotenv = require

const app = express();

app.get("/",(req, res) => {
    res.send("Api is running..");
});

app.get("/api/notes", (req, res)=>{
    res.json(notes);
})

app.get("/api/notes/:id", (req,res) => {
    const note=notes.find((n)=> n._id === req.params.id);
    res.send(note);

})

app.listen(5000, console.log("Server started on PORT 5000"));

