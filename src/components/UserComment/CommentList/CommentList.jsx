import styles from './CommentList.module.scss';

import profileImage from '../../../assets/images/default_profile.png';

import CommentInput from '../CommentInput/CommentInput';

import { useReplies } from '../../../contexts/RepliesContext';
import { useLikes } from '../../../contexts/LikesContext';
import { useMenu } from '../../../contexts/MenuContext';
import { useComments } from '../../../contexts/CommentsContext';

const CommentList = ({ comments, parent = null }) => {
  const [rawComments, setComments] = useComments();
  const [likes, handleLike] = useLikes();
  const [menu, setMenu] = useMenu();
  const { replies, setReplies, focusedReply, setFocusedReply } = useReplies();

  const handleReply = (id) => {
    let updatedReplies = [...replies];
    const replyId = parent ? parent : id;

    if (replies.includes(replyId)) return;
    updatedReplies.push(replyId);
    setReplies(updatedReplies);
    setFocusedReply(replyId);
  };

  const handleMenu = (id) => {
    if (menu === id) setMenu(null);
    else setMenu(id);
  };

  const handleDelete = (id) => {
    const updatedComments = rawComments.filter(
      (comment) => comment.id !== id && comment.parent !== id
    );
    setComments(updatedComments);
  };

  const getTimeDiff = (time) => {
    const diff = new Date().getTime() - new Date(time).getTime();

    let diffTime = Math.floor(diff / 1000);
    if (diffTime < 60) return `${diffTime}초`;

    diffTime = Math.floor(diff / (1000 * 60));
    if (diffTime < 60) return `${diffTime}분`;

    diffTime = Math.floor(diff / (1000 * 60 * 60));
    return `${diffTime}시간`;
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
                likes &&
                likes.includes(comment.id) &&
                styles['comment__text--like']
              } ${
                focusedReply === comment.id && styles['comment__text--focused']
              }`}
            >
              <h4>{comment.user}</h4>
              <p>{comment.text}</p>
            </div>
            <div className={styles.comment__delete}>
              <button
                onClick={() => handleMenu(comment.id)}
                onBlur={() => handleMenu(null)}
              >
                <span>삭제</span>
              </button>
              <div className={styles.comment__guide}>삭제</div>
              <ul
                className={`${styles.comment__menu} ${
                  menu === comment.id && styles['comment__menu--show']
                }`}
              >
                <li onMouseDown={() => handleDelete(comment.id)}>삭제</li>
              </ul>
            </div>
          </div>
          <div className={styles.comment__bottoms}>
            <button
              className={`${
                likes &&
                likes.includes(comment.id) &&
                styles['comment__button--active']
              }`}
              onClick={() => handleLike(comment.id)}
            >
              좋아요
            </button>
            <button onClick={() => handleReply(comment.id)}>답글 달기</button>
            <div className={styles.comment__time}>
              {getTimeDiff(comment.createdTime)}
              <div className={styles.comment__guide}>
                {new Date(comment.createdTime).toLocaleString()}
              </div>
            </div>
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
