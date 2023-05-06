import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();

const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://admin:vM7QaEDbPalxE5ys@cluster0.ocn0w5e.mongodb.net/Blog?retryWrites=true&w=majority"
)
  .then(() => app.listen(PORT))
  .then(() => {
    console.log(`Connected To Database and listening on port ${PORT}.`);
  })
  .catch((err) => console.log(err));
