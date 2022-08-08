import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
 } from 'reactstrap';
 import Form from '../components/Form';
 import CreateAccountImg from './images/createAccount.jpg'

function CreateAccount( props ) {
    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card id="createAccountCard">
            <img
                alt="Card image"
                src={CreateAccountImg}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Create Account
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Please enter a name, valid email address and a password with at least 8 characters.
                    </CardSubtitle>
                    <Form />
                </CardBody>
        </Card> 

    </Col>
    )
}

export default CreateAccount;