import "reflect-metadata";

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {createConnection} from 'typeorm'

import couponsRoutes from './routes/coupons.routes'
import storesRoutes from './routes/stores.routes'

const app = express();
createConnection();

const port = 3000;

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


//routes
app.use(couponsRoutes);
app.use(storesRoutes);

app.listen(port, () => {
    console.log('Server started at http://localhost:$',port)
})






