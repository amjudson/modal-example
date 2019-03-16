import React from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import * as dateActions from '../../actions/datetimeActions';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.setStartDatetime(new Date());
    this.props.dispatch(dateActions.getDatetime());
  }

  setStartDatetime(startDate) {
    let date = startDate;
    if (this.props.datetime) {
      date = this.props.datetime;
    }

    const datetime = { startDatetime: date }
    this.props.dispatch(dateActions.setDatetime(datetime));
  }

  handleChange(date) {
    this.setStartDatetime(date);
  }

  render() {
    const { datetime } = this.props;
    console.log('DATETIME:', datetime);
    return (
      <DatePicker
        selected={datetime.startDatetime}
        onChange={this.handleChange}
        todayButton={'Pick Today'}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    datetime: state.datetime
  }
}

export default connect(mapStateToProps)(DateInput);
