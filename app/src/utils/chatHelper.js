import { nanoid } from "nanoid";
// A lot of this data modeling copied from
// https://github.com/casthewiz/sample-chat-app/blob/master/src/components/chat/message-view.js
// Don't reinvent the wheel

const messageTemplate = () => {
  return { id: "", conversationId: "", sender: "", text: "", time: "" };
};

export const messageFormat = function(data) {
  const newMessage = messageTemplate();
  newMessage.text = data.message;
  newMessage.sender = data.user;
  newMessage.time = Date.now();
  newMessage.conversationId = data.id;

  const messageId = nanoid();
  newMessage.id = `message_${messageId}`;
  console.log(newMessage);
  return newMessage;
};
