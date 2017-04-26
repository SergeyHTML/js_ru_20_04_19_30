import React, {Component} from 'react'
import CommentList from './CommentsList'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        isShowComments: false,
        commentsLink: 'Показать помментарии'
    };

    render() {
        const {article} = this.props;
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.state.isOpen && <div> {this.props.article.text} <div><h4 onClick={this.toggleComments}>{this.state.commentsLink}</h4>  {this.commentsList()}</div> </div>
    }

    commentsList(){
        return this.state.isShowComments && <div><CommentList comments={this.props.article.comments} /></div>
    }

    toggleComments = ev => {
      this.setState({
        isShowComments: !this.state.isShowComments,
        commentsLink: !this.state.isShowComments ? 'Скрыть комментарии' : 'Показать помментарии'
      })
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

