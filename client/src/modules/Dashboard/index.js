import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Avatar from "../../assets/Avatar.svg";
import Call from "../../assets/Call.svg";
import Send from "../../assets/Send.svg";
import Plus from "../../assets/Plus.svg";
import { io } from "socket.io-client";

const Dashboard = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user: detail"))
  );
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null)
 
  console.log(messages, 'messages')

  useEffect(() => {
    setSocket(io('http://localhost:8080'))
  }, [])

  useEffect(() => {
    socket?.emit('addUser', user?.id)
    socket?.on('getUsers', users => {
      console.log('activeUsers :>> ', users);
    })
    socket?.on('getMessage', data => {
      console.log('data :>>', data);
      setMessages(prev => ({
        ...prev,
        messages: [...prev.messages, { user: data.user, message: data.message }] 
      }))
      
    })
  }, [socket])

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user: detail"));
    const fetchConversations = async () => {
      const res = await fetch(
        `http://localhost:8000/api/conversations/${loggedInUser?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = await res.json();
      setConversations(resData);
    };
    fetchConversations();
  }, []);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8000/api/users/${user?.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      setUsers(resData);
    };
    fetchUsers();
  }, []);

  const fetchMessages = async (conversationId, receiver) => {
    const res = await fetch(
      `http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`,
      {
        method: "GET",        
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resData = await res.json();
    console.log("resData :>> ", resData);
    setMessages({ messages: resData, receiver, conversationId });
  };

  const sendMessage = async () => {
    socket?.emit('sendMessage', {
        senderId: user?.id,  
        receiverId: messages?.receiver?.receiverId,
        message,
        conversationId: messages?.conversationId
    });
    const res = await fetch(`http://localhost:8000/api/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversationId: messages?.conversationId,
        senderId: user?.id,
        message,
        receiverId: messages?.receiver?.receiverId
      }),
    });
    setMessage("");
  };

  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-secondary">
        <div className="flex items-center my-8 mx-14">
          <div className="border border-primary p-[2px] rounded-full">
            <img src={Avatar} width={75} height={75} />
          </div>
          <div className="ml-8">
            <h3 className="text-2xl">{user?.fullName}</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr></hr>
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {conversations.length > 0 ? (
              conversations.map(({ conversationId, user }) => {
                return (
                  <div className="flex items-center py-8 border-b border-b-gray-300">
                    <div
                      className="cursor-pointer flex items-center"
                      onClick={() => fetchMessages(conversationId, user)}
                    >
                      <div>
                        <img src={Avatar} width={60} height={60} />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-semibold">
                          {user?.fullName}
                        </h3>
                        <p className="text-sm font-light text-gray-600">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-lg font-semibold mt-24 ">
                No Conversations
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[50%] h-screen bg-white flex flex-col items-center ">
        {messages?.receiver?.fullName && (
          <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 py-2">
            <div className="cursor-pointer border border-dark-grey p-1 rounded-full">
              <img src={Avatar} width={60} height={60} />
            </div>
            <div className="ml-6 mr-auto">
              <h3 className="text-lg ">{messages?.receiver?.fullName}</h3>
              <p className="text-sm font-light text-grey-600">
                {messages?.receiver?.email}
              </p>
            </div>
            <div className="cursor-pointer">
              <img src={Call} width={30} height={30} />
            </div>
          </div>
        )}

        <div className="h-[75%] w-full overflow-scroll shadow-sm">
          <div className=" p-14">
            {messages?.messages?.length > 0 ? (
              messages.messages.map(({ message, user: { id } = {} }) => {
                return (
                  <div
                    className={`max-w-[40%] rounded-b-xl p-4  mb-6 ${
                      id === user?.id
                        ? "bg-primary text-white rounded-tl-xl ml-auto"
                        : "bg-secondary rounded-tr-xl"
                    }  `}
                  >
                    {message}
                  </div>
                );
              })
            ) : (
              <div className="text-center text-lg font-semibold mt-24">
                {" "}
                No Messages or No Conversation Selected{" "}
              </div>
            )}
          </div>
        </div>
        {messages?.receiver?.fullName && (
          <div className="p-14 w-full flex items-center">
            <input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[75%] p-4 border-0 shadow-md rounded-full outline-none"
            ></input>
            <div
              className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${
                !message && "pointer-events-none"
              }`}
              onClick={() => sendMessage()}
            >
              <img src={Send} width={30} height={30} />
            </div>
            <div
              className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${
                !message && "pointer-events-none"
              }`}
            >
              <img src={Plus} width={30} height={30} />
            </div>
          </div>
        )}
      </div>
      <div className="w-[25%] h-screen bg-light px-8 py-16">
        <div className="text-primary text-lg">People</div>
        <div>
          {
            users.length > 0 ? (
             users.map(({ userId, user }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-300">
                  <div
                    className="cursor-pointer flex items-center"
                    onClick={() => fetchMessages('new', user)}
                  >
                    <div>
                      <img src={Avatar} width={60} height={60} />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">
                        {user?.fullName}
                      </h3>
                      <p className="text-sm font-light text-gray-600">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-lg font-semibold mt-24 ">
              No Conversations
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
