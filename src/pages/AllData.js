
import { useContext } from 'react';
import UserContext from '../components/UserContext';
import { 
    Card,
    Table,
    Col,
    CardHeader,
    CardFooter
 } from 'reactstrap';

function AllData() {
    const context = useContext(UserContext);
    const renderTable = () => {
        return context.transactionHistory.map((transaction, index) => {
            const { name, ts, type, amount} = transaction;
            return (
                <tr key={ts}>
                    <th scope="row">{name}</th>
                    <td>{type}</td>
                    <td>${amount}</td>
                </tr>
            )
        })
    }
    
 
    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card className="allDataCard" >
                <CardHeader>All Transactions</CardHeader>
                <Table size="sm">
                    <thead>
                        <tr>
                        <th>
                            User
                        </th>
                        <th>
                            Action
                        </th>
                        <th>
                            Amount
                        </th>
                        </tr>
                    </thead>
                    <tbody>

                        {renderTable()}
                    </tbody>
                </Table>
            <CardFooter>Current Account Balance ${context.balance}</CardFooter>
        </Card> 
    </Col>
    )
}

export default AllData;