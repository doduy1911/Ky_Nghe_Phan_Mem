const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./config/database.js")
const sysconfig = require("./config/system.js");
database.connect();
var methodOverride = require('method-override')
var bodyParser = require('body-parser')

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))



const router = require("./router/client/index.router.js");
const routerAdmin = require("./router/admin/index.router.js")
routerAdmin(app)
const port = process.env.PORT 
app.use(express.static("public"))
app.locals.prefixAdmin=  sysconfig.prefixAdmin;
router(app)
// routerAdmin(app)
app.set('views',"./views");
app.set("view engine","pug")

app.listen(port, ()=>{
    console.log(`lắng Nghe Cổng ${port}`);
});