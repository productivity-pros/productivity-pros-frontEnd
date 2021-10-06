import Feedback from "./Feedback";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { RiFeedbackLine } from 'react-icons/ri';
function FeedbackModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button id="float"  onClick={handleShow}> 
           <RiFeedbackLine size='1.5em'/>
             </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Feedback />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FeedbackModel;