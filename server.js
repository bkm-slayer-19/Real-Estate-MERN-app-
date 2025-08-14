import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import { createServer } from "http";

// Import API routes
import authRoute from "./api/routes/auth.route.js";
import postRoute from "./api/routes/post.route.js";
import testRoute from "./api/routes/test.route.js";
import userRoute from "./api/routes/user.route.js";
import chatRoute from "./api/routes/chat.route.js";
import messageRoute from "./api/routes/message.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  },
});

// Socket.io logic
let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

// Express setup
app.use(cors({ 
  origin: process.env.CLIENT_URL || "http://localhost:3000", 
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());

// Debug endpoint
app.get("/api", (req, res) => {
  res.json({ 
    message: "API is working!", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// API routes with error handling
try {
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/posts", postRoute);
  app.use("/api/test", testRoute);
  app.use("/api/chats", chatRoute);
  app.use("/api/messages", messageRoute);
  console.log("✅ API routes loaded successfully");
} catch (error) {
  console.error("❌ Error loading API routes:", error);
}

// Catch-all for unhandled API routes (for debugging)
app.all('/api/*', (req, res) => {
  console.log(`❌ Unhandled API route: ${req.method} ${req.path}`);
  res.status(404).json({ 
    error: "API route not found", 
    path: req.path, 
    method: req.method 
  });
});

// Serve static files (client build)
app.use(express.static(join(__dirname, 'client/dist')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Socket.io running on same port`);
});