import { Widget, addResponseMessage } from 'react-chat-widget';
import './App.css';
import 'react-chat-widget/lib/styles.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    addResponseMessage('Welcome to the Brand new App ')
    addResponseMessage('Ask any questions')
  }, [])
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage()
  };
  return (
    <div className="App">

      hello react
      <Widget handleNewUserMessage={handleNewUserMessage}
        title="A  Chat Widget Powered by Ai "
        subtitle="Feel free to ask any question"
        
      />



    </div>
  );
}

export default App;
