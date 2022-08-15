import NewsSearch from '../components/NewsAPI';
import { Card, CardHeader, CardBody } from 'reactstrap';

const NewsPage = () => {
    return (
        <Card>
            <CardHeader>
                Bing News Search
            </CardHeader>
            <CardBody>
                <NewsSearch />
            </CardBody>
        </Card>
    )
}

export default NewsPage;