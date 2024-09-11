// importing packages
import express, { json } from 'express';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import cors from 'cors';
import router from './src/routes/router.js';

//Load environment variables
config();

//Setup express
const app = express();

//Configure CORS to allow requests from all origins.
//Middleware to prevent unauthorized access
app.use(cors());

//Middleware to parse JSON bodies (req.body).
app.use(json());

//Use the environment variables
const port = process.env.PORT;
const mongoUri = process.env.DB_URI;

//Database connection
connect(mongoUri)
    .then(() => {
        console.log('Connected to MongoDB');
        //Start Express Server once connected to MongoDB
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
});

//set router
app.use('/', router);
