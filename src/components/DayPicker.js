import React, {Component} from 'react';
// import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class Range extends Component {
    state = {
        from: null,
        to: null,
    };
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };
    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                {!from && !to && <p>Пожалуйста, выберите <strong>первый день</strong>.</p>}
                {from && !to && <p>Пожалуйста, выберите <strong>последний день</strong>.</p>}
                {from &&
                to &&
                <p>
                    Вы выбрали от
                    {' '}
                    {(from).toLocaleDateString()}
                    {' '}
                    до
                    {' '}
                    {(to).toLocaleDateString()}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Очистить</a>
                </p>}
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}
export default Range