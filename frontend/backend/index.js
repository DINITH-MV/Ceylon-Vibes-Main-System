import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import sliprouter from './routes/sliproutes.js';
import cors from 'cors';
import notirouter from './routes/notificationRoutes.js';
import payrouter from './routes/paymentroute.js';
import billrouter from './routes/billroute.js';
import eventrouter from './routes/eventroute.js';
import Ticketrouter from './routes/Ticketroute.js';
import artrouter from './routes/articlesRoutes.js';
import carrouter from './routes/carRoutes.js';
import rentrouter from './routes/rentRoutes.js';
import tourRouter from './routes/tourRoute.js';
import bookingRouter from './routes/bookingRoute copy.js';
import appoinmentroute from './routes/appointmentsparoute.js';
import ayurvedicroute from './routes/ayurvedicsparoute.js';
import classicalroute from './routes/classicalsparoute.js';
import ratingReviewRouter from './routes/ratingreviewRoute.js';

const app = express();
app.use(express.json());

app.use(cors());

/*app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)*/

// Define routes
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('OK');
});

app.use('/noti',notirouter)
app.use('/bill',billrouter)
app.use('/events',eventrouter)
app.use('/Ticket',Ticketrouter)
app.use('/api/articles',artrouter)
app.use('/pay',payrouter)
app.use('/events',eventrouter)
app.use('/slips',sliprouter)
app.use('/api/cars',carrouter)
app.use('/api/rents',rentrouter)
app.use('/tours', tourRouter )
app.use('/bookings', bookingRouter)
app.use('/appointmentSpa',appoinmentroute)
app.use('/classicalSpa',classicalroute)
app.use('/ratingreviews',ratingReviewRouter)
app.use('/ayurvedicSPA', ayurvedicroute )

// Connect to MongoDB and start the server
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
