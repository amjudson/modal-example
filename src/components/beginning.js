import React, { Component } from 'react';
import VerticalModal from './modals/VerticalModal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import PersonForm from './person/personForm';

class Beginning extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const body = (
      <div>
        <h3>This is the passed body for the modal</h3>
      </div>
    );

    return (
      <div>
        <ButtonToolbar>
          <Button
            variant='primary'
            onClick={() => this.setState({ modalShow: true })}>
            Launch vertically centered modal
          </Button>

          <VerticalModal
            show={this.state.modalShow}
            onHide={modalClose}
            title='This is a Passed Parameter'
            body={body}
          />
        </ButtonToolbar>
        <PersonForm />
      </div>
    );
  }
}

export default Beginning;
