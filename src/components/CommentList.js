import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadComment } from '../AC/index'

class CommentList extends Component {

    componentWillReceiveProps({article, loadComment, isOpen, loaded}){
        if(isOpen && !this.props.isOpen && !loaded) loadComment(article.id);
    }

    render() {
        const {isOpen, toggleOpen, loaded} = this.props
        const linkText = isOpen && loaded  ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }
    getBody() {
        const {article, loaded,  isOpen, errorComment} = this.props
        if (!isOpen) return null
        console.log(loaded);
        if (!loaded) return <Loader />
        if (loaded) {
            if (!article.comments.length) return <div><p>No comments yet</p><CommentForm articleId = {article.id}/></div>

            if(errorComment) return <div>{errorComment}</div>
            return (
                <div>
                    <ul>
                        {article.comments.map(id => <li key={id}><Comment id={id}/></li>)}
                    </ul>
                    <CommentForm articleId = {article.id} />
                </div>
            )
        }

    }
}

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    article: PropTypes.object
}

export default connect((state, props) => ({
    loaded: state.articles.getIn(['entities', props.article.id, 'commentLoaded']),
    errorComment: state.articles.getIn(['entities', props.article.id, 'commentErrorText'])
}), { loadComment })(toggleOpen(CommentList))