import React from 'react'
import Comment from './Comments'

export default function CommentList({ comments }) {

    let elements;
    if(comments){
      elements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    } else {
      elements = <li>Комментариев нет</li>
    }

    return (
        <div>
            <ul>
              {elements}
            </ul>
        </div>
    )
}