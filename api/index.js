import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(cors({ 
  origin: process.env.CLIENT_URL || "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/test", testRoute);
app.use("/chats", chatRoute);
app.use("/messages", messageRoute);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Estate API is running!" });
});

// Export for Vercel serverless function
export default (req, res) => {
  return app(req, res);
};