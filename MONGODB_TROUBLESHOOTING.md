# MongoDB Connection Troubleshooting Guide

## Error: `ETIMEOUT _mongodb._tcp.ac-ipu5ixl-shard-0.tzupimi.mongodb.net`

This error occurs when the server cannot connect to MongoDB Atlas. Here's how to fix it:

## Solution 1: Allow All IPs in MongoDB Atlas (Quick Fix for Development)

**⚠️ NOT recommended for production, but works for testing**

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Select your cluster → **Network Access**
3. Click **Edit** on the current IP allowlist entry
4. Change the IP to `0.0.0.0/0` (allows all IPs)
5. Click **Confirm**

## Solution 2: Add Netlify IPs (Recommended for Production)

Netlify uses multiple IPs for deployments:

1. Go to MongoDB Atlas → Network Access
2. Add these Netlify IP ranges:
   - `34.195.145.42/32` (US East)
   - `34.197.235.158/32` (US East)
   - `35.164.203.137/32` (US West)
   - `50.18.208.232/32` (US West)
   - More info: https://docs.netlify.com/configure-builds/manage-dependencies/#source-ip

3. Or use MongoDB Atlas's IP allowlist + environment variables:
   - Set `DATABASE_URL` in Netlify Build & Deploy → Environment

## Solution 3: Verify Environment Variables on Netlify

1. Go to Netlify Dashboard → Your Site
2. Click **Site Settings** → **Build & deploy** → **Environment**
3. Verify `DATABASE_URL` is set:
   ```
   mongodb+srv://assistophere_db_user:PASSWORD@ac-ipu5ixl-shard-0.tzupimi.mongodb.net/assistophere-web?retryWrites=true&w=majority
   ```
4. Also check `PAYLOAD_SECRET` is set

## Solution 4: Check MongoDB Atlas Cluster Status

1. Go to MongoDB Atlas Dashboard
2. Check your cluster status (green = good, anything else = issue)
3. Try connecting with MongoDB Compass locally:
   ```
   mongodb+srv://assistophere_db_user:PASSWORD@ac-ipu5ixl-shard-0.tzupimi.mongodb.net/assistophere-web
   ```

## Solution 5: Add Connection String to .env

If running locally, ensure `.env` has:
```properties
DATABASE_URL=mongodb+srv://assistophere_db_user:PASSWORD@ac-ipu5ixl-shard-0.tzupimi.mongodb.net/assistophere-web?retryWrites=true&w=majority&appName=Cluster01
PAYLOAD_SECRET=814e82889e173abd77e4bef3
```

Then restart the dev server:
```bash
npm run dev
```

## Quick Diagnostics

### To test if MongoDB is accessible:

```bash
# Install mongodb-tools if needed
npm install -g mongodb-tools

# Test connection (replace PASSWORD with actual password)
mongosh "mongodb+srv://assistophere_db_user:PASSWORD@ac-ipu5ixl-shard-0.tzupimi.mongodb.net/assistophere-web"
```

### Check Netlify logs:
1. Go to Netlify Dashboard
2. Click **Deploys**
3. Click on the failed deploy
4. Scroll to **Build logs** to see detailed error

## Current Status

✅ **Local Development**: Working (dev server started on port 3007)
❌ **Production/Netlify**: Timeout error on MongoDB connection

## Recommended Action

1. **For immediate testing**: Use Solution 1 (allow all IPs) in MongoDB Atlas
2. **For Netlify deployment**: Use Solution 2 (add Netlify IPs) or Solution 3 (set env vars)
3. **For production safety**: Use Solution 2 with specific Netlify IPs only

---

**Note**: The `.env` file is already set up locally with the correct DATABASE_URL. The issue is on Netlify's side where it needs proper MongoDB Atlas access permissions.
