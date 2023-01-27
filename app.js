const express = require('express');
const app = express();
// require db connection
const db = require('./connection');
// require table
const table = require('./schema');
// require routers
const router = require('./routes/auth');
//check authentication
db.authenticate()
    .then(() => console.log('authenticate!'))
    .catch((err) => console.log(err))

// middleware
app.use(express.json());
app.use('/shoppingcart/product', router);

async function createTable() { 
    await table.sync({ force: false, alter: true }); 

}
createTable()    

app.listen(5000, () => {
    console.log('server listen at port 5000...');
})