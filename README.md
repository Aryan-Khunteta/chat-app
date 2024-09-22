# Chat App 

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Real-time messaging using WebSockets (Socket.IO)
- User authentication and authorization (JWT)
- Private chats

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.IO

## Installation

### Prerequisites

Before running the application, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **MongoDB** (set up a local instance or use MongoDB Atlas)

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/Aryan-Khunteta/ chat-app.git
   cd chat-app
   ```
 
2. Install dependencies:

- **For the backend:**

```
cd server
npm install express mongoose nodemon bcryptjs cors jsonwebtoken socket.io 
```

- **For the frontend:**

```
cd client
npm install react-router-dom socket.io-client
```

3. Create a ```.env ``` file in the ```server ```folder and add the following environment variables:
```
MONGO_URI= mongodb+srv://chat_app_admin:admin1234@cluster0.helnt.mongodb.net/?
retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET= THIS_IS_A_JWT_SECRET_KEY

SOCKET_IO_PORT= 8080
```

4. Start the development servers:

- **For the backend:**
```
cd server
npm run dev
```

- **For the frontend:**
```
cd client
npm start
```

5. Open the application in your browser by navigating to ( http://localhost:3000 )

## Usage


- Navigate to ( http://localhost:3000 ) to use the chat app locally.
- Users can create an account, log in, and start real-time messaging.


## Known Issues

- Occasional delay in message rendering during high traffic.
- UI may need optimization for very small screen sizes.


## Future Improvements

- Add file sharing and media support in chats.
- Implement message reactions.
- Enhance user profile features.
- Deploy the application using cloud platforms like AWS or Heroku.


## Screenshots

1. Sign Up Page:

![Sign Up Page](https://github.com/user-attachments/assets/574a7801-77ba-4707-9ec0-735e19b751a9)


2. Sign In Page:

![Sign In Page](https://github.com/user-attachments/assets/d9a047c5-b37f-48c3-8433-bf24697f2679)


3. Dashboard: 

![Dashboard](https://github.com/user-attachments/assets/1d5e5fdd-0420-4946-837d-fe4cfa7dd6dc)


4. Chat with Admin 1:

![Chat with Admin 1](https://github.com/user-attachments/assets/8a8d8f19-1459-4a05-828e-19f9532c8434)


5. Chat with Admin 2:

![Chat with Admin 2](https://github.com/user-attachments/assets/1ea028d0-93d9-4ef1-9fb4-6ef9928516ea)
