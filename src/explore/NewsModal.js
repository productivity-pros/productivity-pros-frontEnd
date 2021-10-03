import React from 'react'
import { Modal, Image, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';


class NewsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    closeM = () => {
        this.setState({
            show: false
        })
    }
    showM = () => {
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.ele.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.ele.image} fluid />
                    <p>
                        {this.props.ele.description}
                    </p>
                    <Button variant="outline-dark" href={this.props.ele.url} style={{ position: 'absolute', right: '5px', bottom:'5px' }}>Read More</Button>
                </Modal.Body>
            </div>
        )
    }
}
export default withAuth0(NewsModal)
