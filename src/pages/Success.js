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

function Success() {
    const navigate = useNavigate();
    function onClickNewAccount() {
        navigate('/createaccount');
    }
    function onClickDeposit() {
        navigate('/deposit')
    }
    function onClickWithdraw() {
        navigate('/withdraw')
    }
    const context = useContext(UserContext);

    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card >

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
                        Your transaction was successful. Your account balance is: ${context.balance}. Would you like to complete another transaction?
                    </CardText>
                    <Button id="deposit" onClick={ onClickDeposit }>Deposit</Button>
                    <Button id="withdraw" onClick={ onClickWithdraw }>Withdraw</Button>
                    <CardText>
                        Would you like to create a new account?
                    </CardText>
                    <Button onClick={ onClickNewAccount }>Create Another Account</Button>
                </CardBody>
        </Card> 
    </Col>
    )
}

export default Success;