import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

const commentMap = defaultComments.reduce((acc, comment) => ({
    ...acc, [comment.id]: comment
}), {})

export default (comments = commentMap, action) => {
    const {type, payload, randomId} = action
    switch (type) {
        case ADD_COMMENT:
            comments[randomId] = {
                id: randomId,
                user: payload.comment.user,
                text: payload.comment.comment
            }
            return comments
    }
    return comments
}
