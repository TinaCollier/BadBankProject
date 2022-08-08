
import { useContext } from 'react';
import UserContext from '../components/UserContext';
import { 
    Card,
    Table,
    Col
 } from 'reactstrap';

function AllData() {
    const context = useContext(UserContext);
 
    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card className="allDataCard" >
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
                        <th>
                            Account Balance
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">
                            {context.name}
                        </th>
                        <td>
                            Withdrawl 
                        </td>
                        <td>
                            $5
                        </td>
                        <td>
                            {context.balance}
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                        AllData@BadBank.com
                        </th>
                        <td>
                            Deposit
                        </td>
                        <td>
                            $50
                        </td>
                        <td>
                            $545
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                        AllData@BadBank.com
                        </th>
                        <td>
                            Deposit
                        </td>
                        <td>
                            $100
                        </td>
                        <td>
                            $645
                        </td>
                        </tr>
                    </tbody>
                </Table>
        </Card> 
    </Col>
    )
}

export default AllData;