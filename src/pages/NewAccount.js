import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
 } from 'reactstrap';
 import { useNavigate } from 'react-router-dom';
 import UserContext from '../components/UserContext';
 import { useContext } from 'react';

function NewAccount() {
    const navigate = useNavigate();
    function onClick() {
        navigate('/createaccount');
    }
    const context = useContext(UserContext);

    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card >
                <img
                alt="Card image"
                src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Success!
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                        Hello, {context.name}!
                    </CardSubtitle>
                    <CardText>
                        You have created an account with Bad Bank. Your account balance is: ${context.balance}. Would you like to create another account?
                    </CardText>
                    <Button onClick={ onClick }>Create Another Account</Button>
                </CardBody>
        </Card> 
    </Col>
    )
}

export default NewAccount;