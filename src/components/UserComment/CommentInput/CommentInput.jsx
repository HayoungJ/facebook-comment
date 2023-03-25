import styles from './CommentInput.module.scss';

import profileImage from '../../../assets/images/default_profile.png';
import { useEffect, useRef, useState } from 'react';

const CommentInput = () => {
  const [value, setValue] = useState('');
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const handleInput = (event) => {
    setValue(event.target.innerText);
  };

  useEffect(() => {
    if (value.length > 0) setIsPlaceholder(false);
    else setIsPlaceholder(true);
  }, [value]);

  return (
    <div className={styles.comment__input}>
      <img className={styles.input__profile} src={profileImage} alt="profile" />
      <form className={styles.input__form}>
        <div className={styles.input__textarea}>
          <div
            className={styles['input__textarea--value']}
            contentEditable="true"
            onInput={handleInput}
          />
          {isPlaceholder && (
            <div className={styles['input__textarea--placeholder']}>
              댓글을 입력하세요..
            </div>
          )}
        </div>
        <button className={styles.input__submit}>
          <span>등록</span>
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
