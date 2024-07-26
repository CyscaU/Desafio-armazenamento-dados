const express = require("express");
const dotenv =require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use("/api/estudante", require("./routes/estudante.router"));


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));