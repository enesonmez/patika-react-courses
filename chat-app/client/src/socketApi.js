import io from "socket.io-client";

let sockect;

export const init = () => {
  console.log("connecting...");
  sockect = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  sockect.on("connect", () => console.log("connected!"));
};

export const sendMessage = (message) => {
  if (message) sockect.emit("new-message", message);
};

export const subscribeChat = (cb) => {
  if (!sockect) return;

  sockect.on("receive-message", (message) => {
    console.log("yeni mesaj : ", message);
    cb(message)
  });
};

export const subscribeInitialMessages = (cb) => {
  if (!sockect) return;

  sockect.on("message-list", (messages) => {
    cb(messages)
    console.log(messages);
  });
};