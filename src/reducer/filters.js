import {SELECT_DAYS, CHANGE_SELECTION} from '../constants'

const defFilters = {
    selection: null,
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defFilters, action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_DAYS:
            return {...filters, dateRange: payload.dateRange}

        case CHANGE_SELECTION:
            return {...filters, selection: payload.selection}
    }
    return filters
}
