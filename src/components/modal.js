import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';

class ZinModal extends Component {



  render() {
    return (
      <div class="block">

        <Modal isOpen={this.props.modalIsOpen}>
          <button onClick={this.props.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>


      </div>
    );
  }
}

render(<ZinModal />, document.getElementById('root'));


export default ZinModal;
