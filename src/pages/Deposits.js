import { useContext, useState, useEffect } from "react";
import UserContext from "../components/UserContext";
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
    const [ submit, setSubmit ] = useState(false);
    console.log('total', total)

    const handleSubmit = event => {
        console.log("submit ran");
        event.preventDefault();
        let newTotal = total + deposit;
        setTotal(newTotal);
    }
    const handleChange = event => {
        setDeposit(Number(event.target.value));
        
    }


     
    useEffect (() => {
        context.balance = total;
        console.log('useeffect', context.balance);
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
                <h2></h2>
                <h3>Deposit Amount: </h3>
                <input 
                type="number" 
                min="0" 
                width="200" 
                value={ deposit }
                onChange={ handleChange }
                ></input>
                <Button>Submit</Button>
            </form>
        </CardBody>
    </Card>
    );
}

export default Deposit;