import { INCREMENT, DELETE_ARTICLE, SELECT_DAYS, CHANGE_SELECTION} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}
export function selectDays(dateRange) {
    return {
        type: SELECT_DAYS,
        payload : { dateRange }
    }
}

export function changeSelection( selection ) {
    return {
        type: CHANGE_SELECTION,
        payload: { selection }
    }
}