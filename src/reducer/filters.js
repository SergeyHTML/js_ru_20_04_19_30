import {SELECT_DAYS, CHANGE_SELECTION} from '../constants'

const defFilters = {
    selection: [],
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
            console.log(2);
            return {...filters, selection: payload.selection}
    }
    return filters
}
