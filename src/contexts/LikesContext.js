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

  const deleteLike = (id) => {
    let deletedLikes = likes ? [...likes] : [];
    deletedLikes = deletedLikes.filter((like) => like !== id);
    setLikes(deletedLikes);
  };

  return (
    <LikesContext.Provider value={[likes, handleLike, deleteLike]}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);
