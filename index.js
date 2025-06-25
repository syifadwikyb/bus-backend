require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const userRoutes = require('./src/routes/users');
const middlewareLogRequest = require("./src/middleware/logs");
const authRoutes = require('./src/routes/auth');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json())
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
