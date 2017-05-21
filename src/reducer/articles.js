import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articleMap = normalizedArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {})
export default (articles = articleMap, action) => {
    const {type, payload, randomId} = action
    switch (type) {
        case DELETE_ARTICLE:
            delete articles[payload.id]
            return articles

        case ADD_COMMENT:
            return {
                ...articles, [payload.articleId] : {...articles[payload.articleId], comments : [...articles[payload.articleId].comments.concat(randomId)]
            }
        }
    }

    return articles
}
