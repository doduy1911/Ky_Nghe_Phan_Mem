const express = require("express");
const app = express();
const port = 3000;

const router = require("./router/client/index.router.js");
router(app)
app.set('views',"./views");
app.set("view engine","pug")
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});