# 🍃 How to Connect MongoDB to This Project

There are **two options**: Local MongoDB or MongoDB Atlas (cloud). Pick one.

---

## OPTION A — Local MongoDB (Recommended for beginners)

### Step 1: Install MongoDB Community
1. Go to https://www.mongodb.com/try/download/community
2. Select **Version**: Latest, **Platform**: Windows, **Package**: MSI
3. Download and run the installer
4. During setup, check ✅ **"Install MongoDB as a Service"**
   - This means MongoDB starts automatically with Windows
5. Also install **MongoDB Compass** (the GUI) when prompted — very helpful!

### Step 2: Verify MongoDB is Running
Open Command Prompt and type:
```
mongod --version
```
You should see a version number like `db version v7.0.x`

If MongoDB is set as a service, it already runs in the background.
If not, open a separate terminal and run:
```
mongod
```
Leave that terminal open.

### Step 3: Configure .env
Your `.env` file already has the right setting:
```
MONGODB_URI=mongodb://localhost:27017/carwale
```
No changes needed!

### Step 4: Start the project
```bash
npm install
node seed.js        # adds all sample data to MongoDB
npm run dev         # starts the server
```

Open http://localhost:3000 — done! ✅

---

## OPTION B — MongoDB Atlas (Cloud, no installation needed)

### Step 1: Create a Free Account
1. Go to https://www.mongodb.com/atlas
2. Click **"Try Free"** → Sign up with Google or email
3. Choose the **FREE tier** (M0 Sandbox, 512MB)

### Step 2: Create a Cluster
1. Click **"Build a Database"**
2. Choose **Free (M0)**
3. Select a cloud provider (AWS, Google, Azure — any)
4. Choose a region close to India (e.g. Mumbai ap-south-1)
5. Click **"Create"**

### Step 3: Create a Database User
1. In the left menu → **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter a username: `carwale_user`
5. Enter a password: `mypassword123` (save this!)
6. Under "Database User Privileges" → select **"Atlas admin"**
7. Click **"Add User"**

### Step 4: Whitelist Your IP Address
1. In the left menu → **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** → `0.0.0.0/0`
   (For development this is fine. Restrict it in production.)
4. Click **"Confirm"**

### Step 5: Get Your Connection String
1. Go to **"Database"** in the left menu
2. Click **"Connect"** on your cluster
3. Click **"Connect your application"**
4. Select **Driver: Node.js**, **Version: 5.5 or later**
5. Copy the connection string. It looks like:
```
mongodb+srv://carwale_user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Step 6: Update .env
Open the `.env` file in your project and replace the MONGODB_URI:
```
MONGODB_URI=mongodb+srv://carwale_user:mypassword123@cluster0.xxxxx.mongodb.net/carwale?retryWrites=true&w=majority
```
⚠️ Replace `<password>` with your actual password
⚠️ Replace `cluster0.xxxxx` with your actual cluster address

### Step 7: Start the project
```bash
npm install
node seed.js
npm run dev
```

---

## How MongoDB Connects in This Project

Here is the exact line in `server.js` that makes the connection:

```js
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err.message));
```

When you run `npm run dev` you will see in the terminal:
```
🚀 Server running at http://localhost:3000
✅ MongoDB Connected: mongodb://localhost:27017/carwale
```

If you see the ❌ error instead, MongoDB is not running or the URI is wrong.

---

## How User Data is Saved to MongoDB

When someone registers at http://localhost:3000/login:

```
User fills Register form
        ↓
Frontend calls  POST /api/auth/register
        ↓
routes/auth.js receives name, email, password
        ↓
models/User.js hashes password with bcryptjs (12 rounds)
        ↓
User document saved to MongoDB  ←── THIS IS WHERE IT SAVES
        ↓
JWT token generated and returned to browser
        ↓
Token stored in localStorage
        ↓
User is now logged in
```

### View saved users in MongoDB Compass:
1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Click the **carwale** database
4. Click the **users** collection
5. You will see all registered users (passwords are hashed, not readable)

### View saved users via API (Postman):
```
GET http://localhost:3000/api/auth/users
Authorization: Bearer <your_admin_token>
```

---

## Verify Everything is Working

Run these checks in order:

```bash
# 1. Check Node.js is installed
node -v

# 2. Check npm packages installed
npm list express mongoose bcryptjs jsonwebtoken

# 3. Check MongoDB is running (local)
mongod --version

# 4. Seed the database
node seed.js
# Should print: ✅ Seeded: 15 brands, 34 cars, 8 used cars, 6 news

# 5. Start the server
npm run dev
# Should print: ✅ MongoDB Connected

# 6. Test the API
curl http://localhost:3000/api/cars
# Should return JSON with car data

# 7. Test registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","password":"123456"}'
# Should return: {"success":true,"token":"...","user":{...}}
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `MongoServerError: connect ECONNREFUSED` | MongoDB not running | Run `mongod` in a separate terminal |
| `MongoServerError: bad auth` | Wrong password in Atlas URI | Check .env MONGODB_URI password |
| `Cannot find module 'bcryptjs'` | npm install not run | Run `npm install` |
| `JWT malformed` | Bad/expired token | Log out and log in again |
| `Email already registered` | Duplicate email | Use a different email to register |
| Port 3000 already in use | Another server running | Change PORT=3001 in .env |

---

## Database Collections Created

After `node seed.js`, MongoDB will have these collections:

| Collection | What it stores |
|------------|---------------|
| `users`    | Registered accounts (name, email, hashed password, city, phone) |
| `cars`     | New car listings (brand, model, price, fuel, etc.) |
| `brands`   | Car brands (Maruti, Tata, Hyundai, etc.) |
| `usedcars` | Used car listings |
| `news`     | News articles and reviews |
