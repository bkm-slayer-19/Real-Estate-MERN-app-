import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import all controllers
import { login, logout, register } from "./controllers/auth.controller.js";
import { deleteUser, getUser, getUsers, profilePosts, savePost, updateUser } from "./controllers/user.controller.js";
import { addPost, deletePost, getPost, getPosts, updatePost } from "./controllers/post.controller.js";
import { shouldBeAdmin, shouldBeLoggedIn } from "./controllers/test.controller.js";
import { addChat, getChat, getChats, readChat } from "./controllers/chat.controller.js";
import { addMessage } from "./controllers/message.controller.js";
import { verifyToken } from "./middleware/verifyToken.js";

const app = express();

app.use(cors({ 
  origin: process.env.CLIENT_URL || "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());

// Auth routes
app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/logout", logout);

// User routes
app.get("/users", getUsers);
app.get("/users/:id", getUser);
app.put("/users/:id", verifyToken, updateUser);
app.delete("/users/:id", verifyToken, deleteUser);
app.post("/users/save", verifyToken, savePost);
app.get("/users/profilePosts", verifyToken, profilePosts);

// Post routes
app.get("/posts", getPosts);
app.get("/posts/:id", getPost);
app.post("/posts", verifyToken, addPost);
app.put("/posts/:id", verifyToken, updatePost);
app.delete("/posts/:id", verifyToken, deletePost);

// Test routes
app.get("/test/should-be-logged-in", verifyToken, shouldBeLoggedIn);
app.get("/test/should-be-admin", verifyToken, shouldBeAdmin);

// Chat routes
app.get("/chats", verifyToken, getChats);
app.get("/chats/:id", verifyToken, getChat);
app.post("/chats", verifyToken, addChat);
app.put("/chats/read/:id", verifyToken, readChat);

// Message routes
app.post("/messages/:chatId", verifyToken, addMessage);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Estate API is running!" });
});

// Export as serverless function
export default app;