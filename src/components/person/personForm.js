import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DateTimePicker from '../common/DateTimePicker';
import namePrefixs from './namePrefix';
import personTypes from './personTypes';
import races from './races';
import sexes from './sexes';

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitIt = this.submitIt.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      person: {
        alias: 'Jim',
        dateOfBirth: '1971-04-01T00:00:00',
        firstName: 'Jimmy',
        lastName: 'Jones',
        middleName: 'M',
        personId: 1,
        personTypeId: 1,
        prefix: '',
        raceId: 1,
        sex: 'M',
        socialSecurityNumber: '*****1234',
        ssnSalt: '',
        suffix: ''
      }
    };
  }

  handleChange(event) {
    const field = event.target.name;
    let person = this.state.person;
    person[field] = event.target.value;
    return this.setState({ person: person });
  }

  handleDateChange(date) {
    console.log('date:', date);
    let person = this.state.person;
    person.dateOfBirth = date.toJSON();
    return this.setState({ person: person });
  }

  submitIt() {
    console.log('Person', this.state.person);
  }

  render() {
    let person = this.state.person;
    let dob = new Date(person.dateOfBirth);
    return (
      <Form>
        <Form.Row className='mt-3'>
          <Col className='col-lg-1'>
            <Form.Label>Type</Form.Label>
            <Form.Control
              as='select'
              value={person.personTypeId}
              onChange={this.handleChange}
              name='personTypeId'>
              {personTypes.map(option => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className='mt-3'>
          <Col className='col-lg-1'>
            <Form.Label>Prefix</Form.Label>
            <Form.Control
              as='select'
              value={person.prefix}
              onChange={this.handleChange}
              name='prefix'>
              {namePrefixs.map(option => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
          <Col className='col-lg-2'>
            <Form.Label>First</Form.Label>
            <Form.Control
              name='firstName'
              as='input'
              type='text'
              placeholder='First Name'
              value={person.firstName}
              onChange={this.handleChange}
            />
          </Col>
          <Col className='col-sm-1'>
            <Form.Label>Middle</Form.Label>
            <Form.Control
              name='middleName'
              as='input'
              type='text'
              placeholder='Middle Name'
              value={person.middleName}
              onChange={this.handleChange}
            />
          </Col>
          <Col className='col-lg-2'>
            <Form.Label>Last</Form.Label>
            <Form.Control
              name='lastName'
              as='input'
              type='text'
              placeholder='Last Name'
              value={person.lastName}
              onChange={this.handleChange}
            />
          </Col>
          <Col className='col-lg-1'>
            <Form.Label>Suffix</Form.Label>
            <Form.Control
              name='suffix'
              as='input'
              type='text'
              placeholder='Suffix'
              value={person.suffix}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Row>
        <Form.Row className='mt-3'>
          <Col className='col-sm-1'>
            <Form.Label>Alias/Nickname</Form.Label>
            <Form.Control
              name='alias'
              as='input'
              type='text'
              placeholder='Alias/Nickname'
              value={person.alias}
              onChange={this.handleChange}
            />
          </Col>
          <Col className='col-lg-1'>
            <Form.Label>Sex</Form.Label>
            <Form.Control
              as='select'
              value={person.sex}
              onChange={this.handleChange}
              name='sex'>
              {sexes.map(option => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
          <Col className='col-lg-1'>
            <DateTimePicker
              name='dateOfBirth'
              label='Birth Date'
              handleChange={this.handleDateChange}
              startDate={dob}
            />
          </Col>
          <Col className='col-lg-1'>
            <Form.Label>Race</Form.Label>
            <Form.Control
              as='select'
              value={person.raceId}
              onChange={this.handleChange}
              name='raceId'>
              {races.map(option => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className='mt-3'>
          <Button size='lg' variant='primary' type='button' onClick={this.submitIt}>
            Save
          </Button>
        </Form.Row>
      </Form>
    );
  }
}

export default PersonForm;
