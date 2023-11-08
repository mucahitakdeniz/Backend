"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session")
app.use(session({ secret: process.env.SECRET_KEY || 'secret_keys_for_cookies' }))
/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//template
const ejs =require('ejs')

ejs.openDelimiter= '{' //defaılt <% 
ejs.closeDelimiter= '}' //defaılt &>


app.set('view engine','ejs')
app.set('views','./public')

// Connect to MongoDB with Mongoose:
require('./src/dbConnection')

// Searching&Sorting&Pagination:
app.use(require('./src/middlewares/findSearchSortPage'))



// Routes:
app.use('api/user', require('./src/routes/userRoute'))
app.use('api/blog', require('./src/routes/blogRoute'))
app.use('/', require('./src/routes/view'))


/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))