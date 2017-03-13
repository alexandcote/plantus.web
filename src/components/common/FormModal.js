// @flow
import React from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  title: string,
  show: boolean,
  onClose: () => void,
  children?: [],
};

class FormModal extends React.Component {

  constructor(props: Props) {
    super(props);

    const self: any = this;
    self.close = this.close.bind(this);
  }

  props: Props;

  close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Modal show={this.props.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
      </Modal>
    );
  }
}

export default FormModal;
