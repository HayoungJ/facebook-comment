import { createContext, useContext } from 'react';
import useStorage from '../hooks/useStorage';

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useStorage('likes');

  const handleLike = (id) => {
    let updatedLikes = likes ? [...likes] : [];
    if (!updatedLikes.includes(id)) updatedLikes.push(id);
    else updatedLikes = updatedLikes.filter((like) => like !== id);
    setLikes(updatedLikes);
  };

  return (
    <LikesContext.Provider value={[likes, handleLike]}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);
