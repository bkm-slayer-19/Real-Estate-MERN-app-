# Full Stack Estate - Deployment Guide 🚀

## Architecture Overview
- **Frontend (Client)**: React app deployed on Vercel
- **Backend (API)**: Node.js API deployed as Vercel serverless functions  
- **Socket Server**: Socket.io server deployed on Railway/Render
- **Database**: MongoDB Atlas (cloud database)

## Prerequisites
1. GitHub account
2. Vercel account (free)
3. Railway account (free) or Render account
4. MongoDB Atlas account (free)

## Step 1: Database Setup (MongoDB Atlas)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string
5. Add your connection string to environment variables

## Step 2: Deploy Socket Server (Railway)
1. Go to [Railway](https://railway.app)
2. Connect your GitHub repository
3. Deploy the `/socket` directory
4. Set environment variables:
   - `CLIENT_URL=https://your-vercel-app.vercel.app`
   - `PORT` (Railway will set this automatically)
5. Note your Railway app URL (e.g., `https://your-app.railway.app`)

## Step 3: Deploy to Vercel
1. Go to [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Configure build settings:
   - Framework: Other
   - Root Directory: `.` (root)
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
4. Set environment variables in Vercel:
   - `DATABASE_URL`: Your MongoDB connection string
   - `JWT_SECRET_KEY`: A secure random string
   - `CLIENT_URL`: `https://your-vercel-app.vercel.app`

## Step 4: Configure Client Environment
1. In Vercel, add these environment variables:
   - `VITE_API_URL`: `https://your-vercel-app.vercel.app/api`
   - `VITE_SOCKET_URL`: `https://your-socket-app.railway.app`

## Step 5: Final Configuration
1. Update Railway socket server environment:
   - `CLIENT_URL`: Update to your actual Vercel domain
2. Redeploy both services if needed

## Environment Variables Summary

### Vercel (Client + API)
```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/estate
JWT_SECRET_KEY=your-super-secret-key-here
CLIENT_URL=https://your-app.vercel.app
VITE_API_URL=https://your-app.vercel.app/api
VITE_SOCKET_URL=https://your-socket-app.railway.app
```

### Railway (Socket)
```
CLIENT_URL=https://your-app.vercel.app
```

## Testing Deployment
1. Visit your Vercel app URL
2. Register/login to test authentication
3. Create a property listing
4. Try sending messages to test real-time functionality
5. Check if all features work correctly

## Troubleshooting
- **CORS errors**: Check CLIENT_URL matches exactly
- **API not working**: Verify DATABASE_URL and JWT_SECRET_KEY
- **Messages not real-time**: Check socket server deployment and VITE_SOCKET_URL
- **Build fails**: Check all dependencies are in package.json

## Production Optimizations
- Enable Vercel Analytics
- Set up custom domain
- Configure CDN for images
- Enable compression
- Set up monitoring and logging