import { useEffect } from "react";
import { useChat } from "../context/ChatContext";

import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();
    subscribeInitialMessages((messages) => {
      setMessages(messages);
    });
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);

  return (
    <div className="container">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
