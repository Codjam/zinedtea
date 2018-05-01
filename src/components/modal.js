import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';

class ZinModal extends Component {
  state = {
    modalIsOpen: false,

  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <button raised onClick={this.openModal}>Open Modal</button>

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>


      </div>
    );
  }
}

render(<ZinModal />, document.getElementById('root'));


export default ZinModal;
