"use strict";


//* SEQUELIZE

// https://sequelize.org/docs/v6/getting-started/
const { Sequelize} = require('sequelize')

const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))
 const dbCollection=function() {
    // Synchronization:
//! SYNC MUST RUN ONCE!
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP & CREATE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP & CREATE & FROM BACKUP

// Connect:
sequelize.authenticate()
.then(() => console.log('* DB Connected *'))
.catch((err) => console.log('* DB Not Connected *', err))

 }
 module.exports=dbCollection
