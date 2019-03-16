import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateTimePicker extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { startDate, handleChange, label, name, showYearDropdown, showMonthDropdown } = this.props;
    return (
      <div>
        <label>{label}</label>
        <DatePicker
          className='form-control'
          name={name}
          selected={startDate}
          onChange={handleChange}
          todayButton={'Pick Today'}
        />
      </div>
    );
  }
}

DateTimePicker.propTypes = {
  startDate: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default DateTimePicker;
