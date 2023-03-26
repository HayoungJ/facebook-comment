import { useEffect, useRef, useState } from 'react';

import { useComments } from '../../../contexts/CommentsContext';

import styles from './CommentInput.module.scss';
import profileImage from '../../../assets/images/default_profile.png';

const CommentInput = ({ className = '', parent = null }) => {
  const inputRef = useRef();

  const [value, setValue] = useState('');
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const [comments, setComments] = useComments();

  const handleInput = (event) => {
    setValue(event.target.innerText);
  };

  const handleEnter = (event) => {
    const { code, altKey, ctrlKey, metaKey, shiftKey, nativeEvent } = event;
    if (
      code === 'Enter' &&
      !altKey &&
      !ctrlKey &&
      !metaKey &&
      !shiftKey &&
      nativeEvent.isComposing === false
    ) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (event) => {
    event?.preventDefault();

    const newComment = {
      parent,
      id: Date.now(),
      user: '전하영',
      text: value,
      createdTime: new Date(),
    };
    const updatedComments = comments ? [...comments, newComment] : [newComment];
    setComments(updatedComments);
    setValue('');
    inputRef.current.innerText = '';
  };

  useEffect(() => {
    if (value.length > 0) setIsPlaceholder(false);
    else setIsPlaceholder(true);
  }, [value]);

  return (
    <div className={`${styles.comment__input} ${styles[className]}`}>
      <img className={styles.input__profile} src={profileImage} alt="profile" />
      <form className={styles.input__form} onSubmit={handleSubmit}>
        <div className={styles.input__textarea}>
          <div
            ref={inputRef}
            className={styles['input__textarea--value']}
            contentEditable="true"
            onInput={handleInput}
            onKeyDown={handleEnter}
          />
          {isPlaceholder && (
            <div className={styles['input__textarea--placeholder']}>
              댓글을 입력하세요..
            </div>
          )}
        </div>
        <button
          className={`${styles.input__submit} ${
            value.length > 0 && styles['input__submit--active']
          }`}
        >
          <span>등록</span>
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
