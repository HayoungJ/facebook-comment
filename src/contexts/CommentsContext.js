import { createContext, useContext } from 'react';
import useStorage from '../hooks/useStorage';

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments, removeComments] = useStorage('comments');

  return (
    <CommentsContext.Provider value={[comments, setComments, removeComments]}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
