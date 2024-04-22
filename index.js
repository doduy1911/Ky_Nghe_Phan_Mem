const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./config/database.js")
database.connect();



const router = require("./router/client/index.router.js");
const port = process.env.PORT 
app.use(express.static("public"))
router(app)
app.set('views',"./views");
app.set("view engine","pug")
app.listen(port, ()=>{
    console.log(`lắng Nghe Cổng ${port}`);
});