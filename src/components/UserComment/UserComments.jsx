import styles from './UserComments.module.scss';

import CommentInput from './CommentInput/CommentInput';
import { useComments } from '../../contexts/CommentContext';
import { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';

const UserComments = () => {
  const [list, setList] = useState({});

  const [comments, setComments] = useComments();

  const updateObject = (obj, keys, value) => {
    const updatedKeys = [...keys];
    const key = updatedKeys.shift();
    if (updatedKeys.length) {
      obj[key] = obj[key] || {};
      updateObject(obj[key], updatedKeys, value);
    } else {
      obj[key] = value;
    }
  };

  useEffect(() => {
    if (!comments) return;

    let computed = {};
    comments.forEach((comment) => {
      const { depths, id } = comment;

      if (!depths.length) {
        computed[id] = {
          ...comment,
          replies: {},
        };
        return;
      }

      const keys = depths.reduce((result, depth) => {
        result.push(depth);
        result.push('replies');
        return result;
      }, []);
      keys.push(id);

      updateObject(computed, keys, { ...comment, replies: {} });
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
