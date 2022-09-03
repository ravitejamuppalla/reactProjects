import { useEffect } from 'react';
import MessagesForm from './MessagesForm';
import MyMessages from './MyMessages';
import TheirMessages from './TheirMessages';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  useEffect(() => {
     const renderMessages = () => {
         const keys = Object.keys(messages);

         console.log(keys);
     };

     renderMessages();
  }, [messages]);

  return <div>Chat feed</div>;
};
export default ChatFeed;