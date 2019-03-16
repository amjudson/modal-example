import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedDateout: new Date() }
  }

  selectDateChange(date) {
    return {};
  }

  render() {
    const { input } = this.props;
    let selectedDate = new Date(input.value);
    return (
      <div>
        <DatePicker
          className='form-control'
          showYearDropdown
          showMonthDropdown
          name={input.name}
          selected={selectedDate}
          onChange={this.selectDateChange}
          todayButton={'Pick Today'}
        />
      </div>
    );
  }
}

DateInput.propTypes = {
  input: PropTypes.object.isRequired
}

export default DateInput;
