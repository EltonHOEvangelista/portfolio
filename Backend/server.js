// importing packages
import express, { json } from 'express';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
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

// Serve static frontend files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// For single page application (SPA) routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });

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
