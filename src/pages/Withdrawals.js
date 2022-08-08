import { useContext, useState, useEffect } from "react";
import UserContext from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import { 
    Card, 
    CardHeader,
    CardBody, 
    Button 
} from "reactstrap";



function Withdraw() {
    const context = useContext(UserContext);
    const [ withdrawal, setWithdrawal ] = useState(0);
    const [ total, setTotal ] = useState(context.balance);
    const [ submit, setSubmit ] = useState(false);
    const navigate = useNavigate();
    console.log('total', total)

    const handleSubmit = event => {
        console.log("submit ran");
        event.preventDefault();
        if (withdrawal > total){
            alert('Withdraw request larger than account balance.')
        } else {
            let newTotal = total - withdrawal;
        setTotal(newTotal);
        }
        
        
    }
    const handleChange = event => {
        setWithdrawal(Number(event.target.value));
        
    }       
    useEffect (() => {
        if ( 0 === withdrawal ) {
            return;
        }
        context.balance = total;
        const thisTransaction = { name: context.name, ts: new Date().getTime(), type: 'Withdrawal', amount: withdrawal };
        context.transactionHistory.push( thisTransaction );
        navigate('/success')
    }, [total])
    return (
        <Card 
        className="my-2"
        style={{
          width: '18rem'
        }}
      >

        <CardHeader>Account Balance: <br/>${ total }</CardHeader>
        <CardBody>
        <p>Please input your withdrawal amount and click submit!</p>
        <form onSubmit={ handleSubmit }>
                <h2></h2>
                <h4>Withdrawal Amount: </h4>
                <input 
                type="number" 
                min="0" 
                width="200" 
                value={ withdrawal }
                onChange={ handleChange }
                ></input>
                <Button disabled={ !withdrawal ? true : false}>Submit</Button>
            </form>
        </CardBody>
    </Card>
    );
}

export default Withdraw;