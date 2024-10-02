# Talk Karoo 

Talk Karoo is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js).

## Link
Click on the link for demo

[TalkKaroo](https://talkkaroo.netlify.app/)


## Features

- Real-time messaging using WebSockets (Socket.IO)
- User authentication and authorization (JWT)
- Private chats

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.IO

# Installation

## Prerequisites

Before running the application, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **MongoDB** (set up a local instance or use MongoDB Atlas)

## Steps

1. Clone the repository:
   ```
   git clone https://github.com/Aryan-Khunteta/chat-app.git
   cd chat-app
   ```
 
2. Install dependencies:

- **For the backend:**

Navigate inside the directory:
```
cd server
```
Install all the necessary backend dependendecies
```
npm install
```

- **For the frontend:**

Navigate inside the directory:
```
cd client
```
Install all the necessary frontend dependendecies
```
npm install
```

3. Create a `.env ` file in the `server`folder and add the following environment variables:
```
DB_USERNAME=...
DB_PASSWORD=...
JWT_SECRET=...
PORT=...
```

4. Start the development servers:

- **For the backend:**

Navigate inside the directory:
```
cd server
```
Now run the server:
```
npm run dev
```

- **For the frontend:**

Navigate inside the directory:
```
cd client
```
Now run the client:
```
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


# Screenshots

### Sign Up Page:

![Sign Up Page](https://github.com/user-attachments/assets/574a7801-77ba-4707-9ec0-735e19b751a9)


### Sign In Page:

![Sign In Page](https://github.com/user-attachments/assets/d9a047c5-b37f-48c3-8433-bf24697f2679)


### Dashboard: 

![Dashboard](https://github.com/user-attachments/assets/1d5e5fdd-0420-4946-837d-fe4cfa7dd6dc)


### Admin Account:

![Admin Account](https://github.com/user-attachments/assets/6b060e0e-fa4e-41e0-ac25-d3a55febf9bd)

### Ak Account:

![Ak Account](https://github.com/user-attachments/assets/736778b6-a365-4a2c-8fd8-35105e9517e5)

