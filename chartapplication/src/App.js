import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './component/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine 	
      projectID='08592300-e91d-47ed-84ba-01e8febf45d2'
      userName='RaviTeja'
			userSecret='Password'
       height="100vh"
       renderChatFeed={(chatAppState) => {<ChatFeed {...chatAppState}></ChatFeed> }}
      ></ChatEngine>


     
    </div>
  );
}

export default App;
