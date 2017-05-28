import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../../components/Comment'
import Loader from '../../components/Loader'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadAllListComments} from '../../AC/index'
import './style.css'

class ArticlesPage extends Component {
    componentWillMount(){
        this.checkLoaded(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.checkLoaded(nextProps)
    }

    checkLoaded({ loading, comments, match, loadAllListComments }) {
        if (!comments) loadAllListComments(match.params.page)
    }

    render() {
        return (
            <div>
                {this.getCommentList()}

                {this.getPaginator()}
            </div>
        )
    }

    getCommentList () {
        const {comments} = this.props
        if(comments) return(
            <div>{comments.map(id => <li key={id}><Comment id={id}/></li>)}</div>
        )
        return <div><Loader/></div>

    }
    getPaginator(){
        const{ totalPage } = this.props
        const pageList = []
        for(let i = 1; i <= Math.floor((totalPage - 1) / 5) + 1; i++){
            pageList.push(<li key = {i}><NavLink to = {`/comments/${i}`} activeClassName={'active'} >{i}</NavLink></li>)
        }

        return <ul className="paginator">{pageList}</ul>
    }
}

export default connect((state, {match}) => {
    const { totalPage, pages } = state.comments
    return{
        totalPage,
        comments: pages.getIn([match.params.page, 'id'])
    }

}, {loadAllListComments})(ArticlesPage)