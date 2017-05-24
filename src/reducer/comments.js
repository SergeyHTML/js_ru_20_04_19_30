import {ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({})
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                id: randomId,
                ...payload.comment
            }))
        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(payload.response, CommentModel))

    }

    return comments
}
