import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../comments/comment';
import { Button, TextField } from '@material-ui/core';
import { useAuth } from '../../hooks/useAuth';
import { postComment } from '../../services/group-services';
 

const useStyles = makeStyles( theme => ({
  empty: {
    fontSize: '18px',
  }
}));

function Comments({group}) {

  const { authData } = useAuth();
  const [ newComment, setNewComment ] = useState('');
  const getUser = userId => {
      return group.members.find(member => member.user.id === userId).user;
  }
  const sendComment = () => {
    //console.log(authData.token, newComment, group.id, authData.user.id);
    postComment(authData.token, newComment, group.id, authData.user.id)
    .then( resp => {
      setNewComment('')
      group.comments.unshift(resp);
    })
  }

  return (
    <div className="header">
        <hr />
        <h2>Comments</h2>
        <TextField
          label="New comment"
          multiline
          fullwidth
          rows={4}
          variant="outlined" 
          value={newComment}
          onChange={ e => setNewComment(e.target.value)}
        />
        <Button 
          onClick={() => sendComment()} 
          disabled={!newComment} 
          variant='contained' 
          color="primary"
        >
          Send comment
        </Button>
        <br /><br />
        {group.comments && group.comments.map((comment) => (
          <Comment comment={comment} user={getUser(comment.user)}/>
        ))}
    </div>
  );
}

export default Comments;
