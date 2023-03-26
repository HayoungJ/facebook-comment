import styles from './UserComments.module.scss';

import CommentInput from './CommentInput/CommentInput';
import { useComments } from '../../contexts/CommentsContext';
import { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';

const UserComments = () => {
  const [list, setList] = useState({});

  const [comments, setComments] = useComments();

  useEffect(() => {
    if (!comments) return;

    let computed = {};
    comments.forEach((comment) => {
      const { parent, id } = comment;

      if (!parent) {
        computed[id] = {
          ...comment,
          replies: {},
        };
        return;
      }

      computed[parent].replies[id] = comment;
    });

    setList(computed);
  }, [comments]);

  return (
    <div className={styles.comments}>
      <CommentList comments={list} />
      <CommentInput />
    </div>
  );
};

export default UserComments;
