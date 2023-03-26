import { createContext, useContext, useState } from 'react';

const RepliesContext = createContext();

export const RepliesProvider = ({ children }) => {
  const [replies, setReplies] = useState([]);
  const [focusedReply, setFocusedReply] = useState(null);

  return (
    <RepliesContext.Provider
      value={[replies, setReplies, focusedReply, setFocusedReply]}
    >
      {children}
    </RepliesContext.Provider>
  );
};

export const useReplies = () => useContext(RepliesContext);
