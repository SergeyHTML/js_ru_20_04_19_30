import React, {Component} from 'react'
import Article from './Article'
import AccordionOpen from '../decorators/accordionOpen'
import PropTypes from 'prop-types'

function ArticleList(props){

    const{openArticleId, toggleArticle} = props
    const elements = props.articles.map(article => <li key={article.id}>
            <Article article={article}
                 isOpen={article.id == openArticleId}
                 toggleOpen={toggleArticle(article.id)}/>
        </li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordionOpen decorator
    openArticleId: PropTypes.string,
    toggleArticle: PropTypes.func
}

export default AccordionOpen(ArticleList)