# Chai Backend - Video Platform API

A production-grade backend API for a video platform (similar to YouTube) built with Node.js, Express.js, and MongoDB. This project provides user authentication, profile management, channel subscriptions, and watch history features.

## 🚀 Features

- **User Authentication**
  - User registration with avatar and cover image upload
  - Login/Logout functionality
  - JWT-based authentication with access and refresh tokens
  - Password change functionality

- **User Management**
  - Get current user profile
  - Update account details (fullName, email)
  - Update avatar and cover image
  - Channel profile with subscriber count
  - Watch history tracking

- **Security**
  - Password hashing with bcrypt
  - Secure HTTP-only cookies for tokens
  - JWT token verification middleware
  - CORS configuration

- **File Upload**
  - Cloudinary integration for image storage
  - Multer middleware for file handling
  - Support for avatar and cover image uploads

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **File Upload**: Multer + Cloudinary
- **Security**: bcrypt, cookie-parser
- **Development**: Nodemon, dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chai-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Server Configuration
   PORT=8000
   
   # Database
   MONGODB_URI=mongodb://localhost:27017
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
   
   # CORS
   CORS_ORIGIN=http://localhost:3000
   
   # JWT Secrets
   ACCESS_TOKEN_SECRET=your_access_token_secret_here
   REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:8000` (or the port specified in your `.env` file).

## 📁 Project Structure

```
chai-backend/
├── src/
│   ├── controllers/          # Request handlers
│   │   └── user.controller.js
│   ├── db/                   # Database configuration
│   │   └── index.js
│   ├── middlewares/          # Custom middlewares
│   │   ├── auth.middleware.js
│   │   └── multer.middleware.js
│   ├── models/               # Mongoose models
│   │   ├── user.model.js
│   │   ├── video.model.js
│   │   └── subscription.model.js
│   ├── routes/               # API routes
│   │   └── user.routes.js
│   ├── utils/                # Utility functions
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── cloudinary.utils.js
│   ├── app.js                # Express app configuration
│   ├── index.js              # Entry point
│   └── constants.js          # Application constants
├── public/                   # Static files
├── .env                      # Environment variables (not in git)
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/users/register` | Register a new user | No |
| POST | `/api/v1/users/login` | Login user | No |
| POST | `/api/v1/users/logout` | Logout user | Yes |
| POST | `/api/v1/users/refresh-token` | Refresh access token | No |

### User Profile Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/users/current-user` | Get current user profile | Yes |
| PATCH | `/api/v1/users/update-account` | Update account details | Yes |
| POST | `/api/v1/users/change-password` | Change password | Yes |

### Media Upload Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| PATCH | `/api/v1/users/avatar` | Update user avatar | Yes |
| PATCH | `/api/v1/users/cover-image` | Update cover image | Yes |

### Channel & History Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/users/c/:username` | Get channel profile | Yes |
| GET | `/api/v1/users/history` | Get watch history | Yes |

## 📝 API Usage Examples

### Register User
```bash
POST /api/v1/users/register
Content-Type: multipart/form-data

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123",
  "avatar": <file>,
  "coverImage": <file> (optional)
}
```

### Login
```bash
POST /api/v1/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
```bash
GET /api/v1/users/current-user
Headers: {
  "Cookie": "accessToken=<token>"
}
```

### Update Account Details
```bash
PATCH /api/v1/users/update-account
Headers: {
  "Cookie": "accessToken=<token>"
}
Content-Type: application/json

{
  "fullName": "John Updated",
  "email": "johnupdated@example.com"
}
```

## 🔐 Authentication

The API uses JWT tokens stored in HTTP-only cookies:
- **Access Token**: Short-lived token for API requests
- **Refresh Token**: Long-lived token for obtaining new access tokens

Include the access token in cookies for authenticated requests, or use the `refresh-token` endpoint to get a new access token when it expires.

## 🗄️ Database

The application uses MongoDB with the following collections:
- **users**: User profiles and authentication data
- **videos**: Video content (referenced in watch history)
- **subscriptions**: Channel subscription relationships

Database name is configured in `src/constants.js`.

## 🧪 Development

- **Development Server**: `npm run dev` (uses nodemon for auto-reload)
- **Environment**: Development mode with detailed error logging

## 📦 Dependencies

### Production Dependencies
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `jsonwebtoken`: JWT token generation
- `bcrypt`: Password hashing
- `cookie-parser`: Cookie parsing middleware
- `cors`: Cross-origin resource sharing
- `multer`: File upload handling
- `cloudinary`: Cloud-based image management

### Development Dependencies
- `nodemon`: Auto-restart development server
- `dotenv`: Environment variable management
- `prettier`: Code formatting

## 🐛 Error Handling

The API uses a custom error handling system:
- `ApiError`: Custom error class for API errors
- `ApiResponse`: Standardized response format
- `asyncHandler`: Wrapper for async route handlers

## 📄 License

ISC License

## 👤 Author

**Kumar Gaurav**

## 🔗 Model Link

[Architecture Model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

---

**Note**: Make sure to keep your `.env` file secure and never commit it to version control. The `.gitignore` file should already include `.env`.
