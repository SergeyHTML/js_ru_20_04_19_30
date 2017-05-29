import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_ALL_COMMENTS, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    //не обязательно OrderedMap
    pages: new OrderedMap({}),
    totalPage: null
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .setIn(['totalPage'], response.total)
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                //ids
                .setIn(['pages', payload.page, 'id'], response.records.map((comment) => comment.id))

    }

    return comments
}
