const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db/db");
const authRoutes = require("./routes/authRoutes");
dotenv.config();


const PORT=process.env.PORT;

app.get("/", (res, req)=>{res.status(400),json({message:"welcome to our web app"})});
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes)
connectDb();
app.listen(PORT, ()=>{
    console.log(`App listening to ${PORT}`);
});













