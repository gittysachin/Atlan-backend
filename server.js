const express = require('express');
const dotenv = require('dotenv');

const uploadRoutes = require('./routes/uploadRouter.js');
const exportRoutes = require('./routes/exportRouter.js');
const authRoutes = require('./routes/authRouter.js');
dotenv.config();    //Load the environment variables

const app = express();

app.use(express.json());

//Link all the routes
app.use('/upload', uploadRoutes);
app.use('/export', exportRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running. Listening at port: https://localhost:${PORT}`);
})