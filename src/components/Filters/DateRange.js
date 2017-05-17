import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {selectDays} from '../../AC/index'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
        const { selectDays, range} = this.props
        selectDays(DateUtils.addDayToRange(day, range))
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect((state) => ({
    range: state.filters.dateRange
}), { selectDays })(DateRange)