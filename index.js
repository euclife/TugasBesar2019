const express = require('express');
const sequelize = require('./configs/sequelize');
const bodyParser = require('body-parser');

const app = express();

const Buku = require('./models/buku');
const Category = require('./models/category');
const User = require('./models/user');
const Keranjang = require('./models/keranjang');

Buku.belongsTo(Category);
Keranjang.belongsTo(Buku);
Keranjang.belongsTo(User);

const bukuRouter = require('./Routes/Buku');
const categoryRouter = require('./Routes/Category');
const userRouter = require('./Routes/User');
const keranjangRouter = require('./Routes/Keranjang');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(bukuRouter);
app.use(categoryRouter);
app.use(userRouter);

app.use('/buku',bukuRouter);
app.use('/category',categoryRouter);
app.use('/user',userRouter);


// sequelize
//  .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


app.listen(3102, () => {
    console.log('server started');
    // sequelize.sync();
})