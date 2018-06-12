
import React from 'react'
import './modal.css'
import BlockBears from './images/block_png.png';
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
    
    // componentDidMount (){
    //     setTimeout(() => {
    //  this.setState({ visible: false });     
    //     }, 10000)
    // }

  render () {
  return (
      <Modal trigger={<Button>Show Modal</Button>} closeIcon centered="false" id="modal-margin" className="modal-height">
      
        <div className="onload-modal">
          <Modal.Content className="content">
          <img src={BlockBears} alt="3Bears logo" className="bears-logo"/>
            <p className="modal-content">
            Welcome to 3Bears! Your online source to discovering a company whose culture fit's your values & views in a workplace just right. 
            </p>
          </Modal.Content>
        </div>
      </Modal>
    )
}
}
    
export default Reminder;
