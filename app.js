const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/db');
const customerRouter = require('./routers/CustomerRouter');
const driverRouter = require('./routers/DriverRouter');
const restaurantRouter = require('./routers/RestaurantRouter');


const app = express();
const port = config.port;
app.use(express.json());

// TODO : Handle Async Errors.
connectDB();


app.use('/customer', customerRouter);
app.use('/driver', driverRouter);
app.use('/restaurant', restaurantRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})