require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorsMiddleware = require('./middlewares/error-midleware');

const PORT_API = process.env.PORT_API || 7000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorsMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser : true,
            useUnifiedTopology: true
        })
        app.listen(PORT_API, () => console.log(`Server started om PORT ${PORT_API}`))
    }catch (e){
        console.log(e)
    }
}

start();