const express = require("express");
const cors = require("cors");

app.use(cors());

const app = express();

app.use(express.json());


app.listen (port, () => {
    console.log(`Server is running on port ${port}`)
})