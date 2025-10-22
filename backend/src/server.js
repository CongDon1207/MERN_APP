import express from 'express';
import taskRouters from './routes/taskRouters.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB(); // ket noi vs mongo

app.use("/api/task", taskRouters);

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Dang chay tren cong ${PORT}`);
})

