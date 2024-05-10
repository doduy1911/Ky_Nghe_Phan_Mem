const express = require("express");
var flash = require('express-flash');
var cookieParser = require('cookie-parser')
var session = require('express-session')

const app = express();
app.use(cookieParser('messages'));
app.use(session({ cookie: { maxAge: 1000 }}));
app.use(flash());
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

// flast

// end flash

app.listen(port, ()=>{
    console.log(`lắng Nghe Cổng ${port}`);
});