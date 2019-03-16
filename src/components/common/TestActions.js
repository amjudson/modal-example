import React from 'react';
import { connect } from 'react-redux';
import * as triggerActions from '../../actions/triggerActions';
import * as startDateActions from '../../actions/startDateActions';
import * as utils from '../../utilities';
import DateTimePicker from './DateTimePicker';

class TestActions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.setStartDatetime(new Date());
		this.setTiggerObj('isThisTestWorking', true);
		this.props.dispatch(triggerActions.getTrigger());
  }

  setTiggerObj(triggerName, triggerValue) {
    const trigger = {};
    trigger[triggerName] = triggerValue;
    this.props.dispatch(triggerActions.setTrigger(trigger));
  }

  handleChange() {
    const trigger = this.props.trigger;
    if (this.props.trigger.isThisTestWorking) {
      this.setTiggerObj('isThisTestWorking', false);
    } else {
      this.setTiggerObj('isThisTestWorking', true);
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  setStartDatetime(startDate) {
    const datetime = startDate;
    this.props.dispatch(startDateActions.setStartDate(datetime));
  }

  handleDateChange(date) {
      this.setStartDatetime(date);
  }

  render() {
    const { trigger, startDate } = this.props;
    console.log('StartDate:', startDate);
    let triggerEvent = 'The trigger is off';
		let eventClass = 'row alert alert-danger';
		let iconClass = <i className='fas fa-frown fa-3x'></i>;
    if (trigger.isThisTestWorking) {
      triggerEvent = 'The trigger is on';
			eventClass = 'row alert alert-primary';
      iconClass = <i className='fas fa-smile fa-3x'></i>;
    }

    return (
      <div className='container'>
        <div className='row'>
          <h2>Testing Props and Actions Example</h2>
        </div>
        <div className={eventClass}>
          <h4>{triggerEvent}</h4>
        </div>
        <div className='row'>
          <button className='btn btn-primary col-md-1 mr-1' onClick={this.handleChange}>{iconClass}</button>
          <button className='btn btn-primary col-md-2 ml-1' onClick={this.goBack}>Go Back</button>
        </div>
        <div className='row'>
          <div className='col-md-2 mt-2'>
            <DateTimePicker
              handleChange={this.handleDateChange}
              startDate={startDate}
              label='Date of Birth'
              name='dateOfBirth' />
          </div>
          <div className='col-xl-3 mt-2'>
            <h4 className='ml-3'>{startDate.toDateString()}</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    trigger: state.trigger,
    startDate: state.startDate
  }
}

export default connect(mapStateToProps)(TestActions);
