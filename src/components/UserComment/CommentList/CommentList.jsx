import styles from './CommentList.module.scss';
import profileImage from '../../../assets/images/default_profile.png';
import { useState } from 'react';
import CommentInput from '../CommentInput/CommentInput';
import { useReplies } from '../../../contexts/RepliesContext';

const CommentList = ({ comments, parent = null }) => {
  const [likes, setLikes] = useState([]);

  const [replies, setReplies] = useReplies();

  const handleLike = (id) => {
    let updatedLikes = [...likes];
    if (!likes.includes(id)) updatedLikes.push(id);
    else updatedLikes = updatedLikes.filter((like) => like !== id);
    setLikes(updatedLikes);
  };

  const handleReply = (id) => {
    let updatedReplies = [...replies];
    const replyId = parent ? parent : id;

    if (replies.includes(replyId)) return;
    updatedReplies.push(replyId);
    setReplies(updatedReplies);
  };

  return (
    <ul className={styles.comment__wrap}>
      {Object.values(comments).map((comment) => (
        <li key={comment.id} className={styles.comment}>
          <div className={styles.comment__content}>
            <img
              className={styles.comment__profile}
              src={profileImage}
              alt="profile"
            />
            <div
              className={`${styles.comment__text} ${
                likes.includes(comment.id) && styles['comment__text--like']
              }`}
            >
              <h4>{comment.user}</h4>
              <p>{comment.text}</p>
            </div>
          </div>
          <div className={styles.comment__buttons}>
            <button
              className={`${
                likes.includes(comment.id) && styles['comment__button--active']
              }`}
              onClick={() => handleLike(comment.id)}
            >
              좋아요
            </button>
            <button onClick={() => handleReply(comment.id)}>답글 달기</button>
          </div>
          {comment?.replies ? (
            <CommentList comments={comment.replies} parent={comment.id} />
          ) : (
            <></>
          )}
          {!parent && replies.includes(comment.id) && (
            <CommentInput
              className="comment__input--small"
              parent={parent ? parent : comment.id}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
