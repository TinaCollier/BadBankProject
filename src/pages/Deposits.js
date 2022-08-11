import { useContext, useState, useEffect } from "react";
import UserContext from "../components/UserContext";
import { useNavigate } from "react-router-dom";

import { 
    Card, 
    CardHeader,
    CardBody, 
    Button 
} from "reactstrap";



function Deposit() {
    const context = useContext(UserContext);
    const [ transaction, setTransaction ] = useState({});
    const [ deposit, setDeposit ] = useState(0);
    const [ total, setTotal ] = useState(context.balance);
    const [ error, setError ] = useState('');
    const navigate = useNavigate();
    //console.log('total', total)

    const handleSubmit = event => {
        console.log("submit ran");
        event.preventDefault();
        let newTotal = total + deposit;
        setTotal(newTotal);
        
    }

    const handleChange = event => {
        const input = event.target.value;
        if (isNaN(input)) {
            setError('Please input a valid number')
        } else { 
            setDeposit(Number(input)); 
        }
    }

    useEffect (() => {
        if ( 0 === deposit ) {
            return;
        }
        context.balance = total;
        const thisTransaction = { name: context.name, ts: new Date().getTime(), type: 'Deposit', amount: deposit };
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

        <CardHeader>Account Balance: <br/>${total}</CardHeader>
        <CardBody>
        <form onSubmit={ handleSubmit }>
                <p>Please input your deposit amount and click submit!</p>
                <h4>Deposit Amount: </h4>
                <input 
                type="text" 
                width="200" 
                value={ deposit }
                onChange={ handleChange }
                ></input>
                <div className="error" >{ error }</div>
                <Button disabled={ !deposit ? true : false}>Submit</Button>
            </form>
        </CardBody>
    </Card>
    );
}

export default Deposit;