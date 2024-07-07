import express from 'express';
import invoiceRoutes from './routes/invoiceRoutes';
import dataRoutes from './routes/dataRoutes';

const app = express();
app.use(express.json());

app.use('/api', invoiceRoutes);
app.use('/api', dataRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
