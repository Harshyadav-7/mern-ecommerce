## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

## Run the Project

### Start Backend

```bash
cd backend
node server.js
```

### Start Frontend

```bash
cd frontend
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

The frontend will run on:

```
http://localhost:5173
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Products

- GET /api/products
- GET /api/products/:id

### Cart

- POST /api/cart
- GET /api/cart

### Orders

- POST /api/orders
- GET /api/orders

### Gemini

 -GET /api/gemini/ask