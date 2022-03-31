//import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../comments/comment';


const useStyles = makeStyles( theme => ({
  empty: {
    fontSize: '18px',
  }
}));

function Comments({group}) {
    const getUser = userId => {
        return group.members.find(member => member.user.id === userId).user;
    }

  return (
    <div className="header">
        <hr />
        <h2>Comments</h2>
        {group.comments.map((comment) => (
            <Comment comment={comment} user={getUser(comment.user)}/>
        ))}
    </div>
  );
}

export default Comments;
