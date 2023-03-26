import { createContext, useContext, useState } from 'react';

const RepliesContext = createContext();

export const RepliesProvider = ({ children }) => {
  const [replies, setReplies] = useState([]);

  return (
    <RepliesContext.Provider value={[replies, setReplies]}>
      {children}
    </RepliesContext.Provider>
  );
};

export const useReplies = () => useContext(RepliesContext);
