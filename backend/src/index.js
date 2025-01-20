import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("Not Able to connect Express server");
      throw error;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`server is running at ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection Failed: " + error);
  });
