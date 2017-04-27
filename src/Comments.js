import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
export default class Comments extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div>
        <b>Author: {comment.user}</b>
        <p>{comment.text}</p>
      </div>
    )
  }
}
