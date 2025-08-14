# 🚀 Deploy to Railway (Easier Alternative)

Since Vercel has function limits, Railway is a better option for full-stack apps.

## Step 1: Deploy on Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"**
4. Click **"Deploy from GitHub repo"**
5. Select your repository
6. Choose **ROOT directory** (not a subfolder)

## Step 2: Set Environment Variables

In Railway dashboard, add these variables:

```bash
# Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/estate

# JWT Secret
JWT_SECRET_KEY=your-super-secret-key-here

# Client URL (Railway will provide this)
CLIENT_URL=https://your-app.railway.app

# API URL (same as CLIENT_URL + /api)
VITE_API_URL=https://your-app.railway.app/api

# Socket URL (same as CLIENT_URL)
VITE_SOCKET_URL=https://your-app.railway.app

# Port (Railway sets automatically)
PORT=3000
```

## Step 3: Create Railway Configuration

Railway needs a build script. I'll create this for you.

## Benefits of Railway:
- ✅ No function limits
- ✅ Supports full Node.js apps
- ✅ Built-in database support
- ✅ Automatic HTTPS
- ✅ Better for full-stack apps
- ✅ Free tier: $5/month credit (plenty for this app)