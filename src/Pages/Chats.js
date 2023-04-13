import React, { useState, useEffect } from 'react';
import { Chat } from 'twilio-chat';

function Chats() {
  const [chatClient, setChatClient] = useState(null);
  const [currentChannel, setCurrentChannel] = useState(null);
  const [channelName, setChannelName] = useState('');

  useEffect(() => {
    const initChat = async () => {
      const token = await 'xyz'
      const client = await Chat.create(token);
      setChatClient(client);
    };

    initChat();
  }, []);

  const createOrJoinChannel = async () => {
    try {
      const channel = await chatClient.getChannelByUniqueName(channelName);
      setCurrentChannel(channel);
    } catch {
      const channel = await chatClient.createChannel({ uniqueName: channelName });
      setCurrentChannel(channel);
    }
  };

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        createOrJoinChannel();
      }}>
        <input type="text" value={channelName} onChange={e => setChannelName(e.target.value)} />
        <button type="submit">Join Channel</button>
      </form>
      {currentChannel && (
        <div>
          <h2>{currentChannel.friendlyName}</h2>
          <ul>
            {currentChannel.messages.map(message => (
              <li key={message.sid}>{message.body}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Chats;
