import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("AMS Backend API");
});

export default app;