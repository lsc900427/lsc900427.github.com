import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';


class Modals extends React.Component {
  constructor(props) {
    super(props);
    const avatar = this.props.avatar;
  }
  render() {
    return (
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.avatar} />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    );
  }
}

export default Modals;