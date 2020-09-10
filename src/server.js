import express from 'express'
import router from './routes/index.routes'
import centros from './routes/centros.routes'

const app = express();

// settings
app.set('port', process.env.PORT || 5000)

// middleware
app.use(express.json());

// routes
app.use(router);
app.use('/centros', centros);


export default app;