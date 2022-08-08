import { useContext, useState, useEffect } from "react";
import UserContext from "../components/UserContext";
import { 
    Card, 
    CardHeader,
    CardBody, 
    Button 
} from "reactstrap";



function Withdraw() {
    const context = useContext(UserContext);
    const [ withdrawl, setWithdrawl ] = useState(0);
    const [ total, setTotal ] = useState(context.balance);
    const [ submit, setSubmit ] = useState(false);
    console.log('total', total)

    const handleSubmit = event => {
        console.log("submit ran");
        event.preventDefault();
        let newTotal = total - withdrawl;
        setTotal(newTotal);
        
    }
    const handleChange = event => {
        setWithdrawl(Number(event.target.value));
        
    }       
    useEffect (() => {
        context.balance = total;
        console.log('useeffect', context.balance);
       // context.transactionHistory
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
        <form onSubmit={ handleSubmit }>
                <h2></h2>
                <h3>Withdrawl Amount: </h3>
                <input 
                type="number" 
                min="0" 
                width="200" 
                value={ withdrawl }
                onChange={ handleChange }
                ></input>
                <Button>Submit</Button>
            </form>
        </CardBody>
    </Card>
    );
}

export default Withdraw;