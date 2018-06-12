
import React from 'react'
import './modal.css'
import { Button, Modal } from 'semantic-ui-react'



class Reminder extends React.Component {
    // Event listener to close wifi reminder alert.
constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss () {
    this.setState({ visible: false });
    }
    
    componentDidMount (){
        setTimeout(() => {
     this.setState({ visible: false });     
        }, 10000)
    }

  render () {
  return (
      <Modal trigger={<Button>Show Modal</Button>} closeIcon centered={false} className="modal-height">
      
        <body className="onload-modal">
          <Modal.Content className="content">
          <h1>3Bears</h1>
            <p className="modal-content">
            Welcome to 3Bears! Your online source to discovering a company whose culture fit's your values & views in a workplace just right. 
            </p>
          </Modal.Content>
        </body>
      </Modal>
    )
}
}
    
    export default Reminder;
