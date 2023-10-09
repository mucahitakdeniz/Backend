"use strict"


const express = require('express')
const app = express()

require('dotenv').config()
const PORT=process.env.PORT

require('express-async-errors')



// continue from here...



/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))
// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()