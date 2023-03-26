import styles from './UserPost.module.scss';

import profileImage from '../../assets/images/default_profile.png';
import UserComments from '../UserComment/UserComments';
import { useComments } from '../../contexts/CommentContext';

const UserPost = () => {
  const [comments, setComments] = useComments();

  return (
    <article className={styles.post}>
      <div className={styles.post__header}>
        <img
          className={styles.post__profile}
          src={profileImage}
          alt="profile"
        />
        <div className={styles.post__info}>
          <h3 className={styles.post__name}>전하영</h3>
          <span className={styles.post__time}>22시간 전</span>
        </div>
      </div>
      <div className={styles.post__content}>
        댓글/답글 남기기, 삭제하기, 좋아요 기능을 이용할 수 있습니다.
        <br />
        스타일은 페이스북을 모티브로 하고 있습니다.
        <br />
        작성한 댓글/답글/좋아요는 해당 브라우저에서만 확인할 수 있습니다.
      </div>
      {comments && (
        <div className={styles['post__comments-count']}>
          댓글 {comments.length}개
        </div>
      )}
      <UserComments />
    </article>
  );
};

export default UserPost;
