# Mock API Setup Summary

## ✅ Successfully Configured Mock Backend

Your Studforce application is now fully functional **without requiring a backend server**. All API calls are intercepted and handled by mock data.

## 🎯 What Was Done

### 1. **Created Mock API Service** (`src/services/mockApi.js`)
   - Intercepted all axios requests to `localhost:8000`
   - Implemented mock handlers for all API endpoints
   - Uses data from `studforce_db.sql` (5 products, 2 users)
   - Simulates realistic network delays (300ms)

### 2. **Updated Entry Point** (`src/main.js`)
   - Integrated `initMockApi()` to activate the mock backend
   - Initializes on application startup

### 3. **Mock Data Included**

#### Products (5 items)
- ASICS DS LIGHT X-FLY PRO 2 PARIS - ฿7,500
- PUMA FUTURE 7 ULTIMATE VOLUME - ฿8,000
- MIZUNO MORELIA II PRO AG - ฿4,500
- ADIDAS F50 + FG - ฿10,500
- NIKE MERCURIAL SUPERFLY 10 - ฿9,600

#### Test Users
- **Customer**: username: `testuser` | password: `password123`
- **Admin**: username: `admin` | password: `admin123`

#### Other Features
- Shopping cart (in-memory)
- Orders (in-memory)
- Addresses (in-memory)
- Promotions: `SAVE10` (10% off, min ฿100), `SAVE20` (20% off, min ฿500)

## 🚀 Running the Application

```bash
cd STUDFORCE_FE
npm run dev
```

Server will start on: **http://localhost:5174/**

## 📋 All Supported Endpoints

### Products
- ✅ GET `/api/products/` - List all products
- ✅ GET `/api/products/:id` - Get product details
- ✅ POST `/api/products/` - Create product (admin)
- ✅ PUT `/api/products/:id` - Update product (admin)
- ✅ DELETE `/api/products/:id` - Delete product (admin)

### Authentication
- ✅ POST `/api/auth/login/` - User login
- ✅ POST `/api/token/refresh/` - Refresh token
- ✅ POST `/api/auth/password-reset/` - Request password reset
- ✅ POST `/api/auth/password_reset_confirm/` - Confirm password reset

### Customers
- ✅ GET `/api/customers/` - List all customers
- ✅ POST `/api/customers/register/` - Register new customer

### Addresses
- ✅ GET `/api/customers/customer-addresses/:id` - Get addresses
- ✅ POST `/api/customers/customer-addresses/` - Create address
- ✅ PUT `/api/customers/customer-addresses/:id` - Update address
- ✅ DELETE `/api/customers/customer-addresses/:id` - Delete address

### Cart
- ✅ GET `/api/customers/customer-cart/:id` - Get cart items
- ✅ POST `/api/customers/customer-cart/` - Add to cart
- ✅ PUT `/api/customers/cart/:id` - Update cart quantity
- ✅ DELETE `/api/customers/cart/:id` - Remove from cart

### Orders
- ✅ POST `/api/customers/orders/` - Create order
- ✅ GET `/api/customers/orders/` - Get orders
- ✅ PUT `/api/customers/edit_orders/` - Update order status

### Promotions
- ✅ POST `/api/products/promotions/` - Apply promo code
- ✅ POST `/api/products/promotions/create/` - Create promotion

## 🧪 Testing Tips

1. **Login with test account**
   - Username: `testuser`
   - Password: `password123`

2. **Admin features**
   - Username: `admin`
   - Password: `admin123`

3. **Add products to cart**
   - Select any product
   - Choose size and quantity
   - All cart operations work in-memory

4. **Apply promotion codes**
   - Use `SAVE10` or `SAVE20`
   - Minimum purchase amounts apply

## 📝 Data Persistence

All data is stored **in-memory** and will reset when you:
- Refresh the page
- Close the browser
- Restart the development server

This is intentional for development/testing purposes.

## ⚙️ How It Works

The mock API uses **axios interceptors** to:
1. Intercept all requests to `localhost:8000`
2. Match the request method and path to registered handlers
3. Execute the handler and return mock data
4. Prevent the request from actually making a network call

This means **no code changes** are needed in stores and components - they work exactly as if calling a real backend!

## 🔄 When Ready for Real Backend

Simply update the API base URL in stores from:
```javascript
http://localhost:8000/api/...
```

To your production backend URL, and remove/disable the mock API initialization in `src/main.js`.
