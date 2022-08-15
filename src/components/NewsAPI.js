import React, { useState } from 'react';
import { Button } from 'reactstrap';



async function searchNews(q) {
    q = encodeURIComponent(q);
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "8c92c093eemsh5e0dea634c28d38p1e8e03jsn7227b3c75cbe",
        "x-bingapis-sdk": "true"
      }
    });
    const body = await response.json();
    return body.value;
  }

function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <li className="item">

        <h2 className="title"
        >
            {item.image &&
            <img className="thumbnail"
        
            alt=""
            src={item.image?.thumbnail?.contentUrl}
            />
        }
            <a href={item.url}>{item.name}</a>
        </h2>

        <div className="meta">
            <span>{formatDate(item.datePublished)}</span>
            <span className="provider">
            {item.provider[0].image?.thumbnail &&
                <img className="provider-thumbnail"
                alt=""
                src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
            />
            }
            {item.provider[0].name}
            </span>
            {item.category &&
            <span>{separateWords(item.category)}</span>
            }
        </div>
    </li>
);
}

const Pagination = ({ list, pageSize, onPageChange }) => {
    if (list.length <= 1) return null;

    let num = Math.ceil(list.length / pageSize);
    let pages = range( 1, num + 1);
    const listItems = pages.map( page => {
        return (
            <Button 
            key={ page } 
            onClick={ onPageChange } 
            className="page-item">
                { page }
            </Button>
        );
    });
    return (
        <nav>
            <ul className="pagination">{ list }</ul>
        </nav>
    );
};
const range = ( start, end ) => {
    return Array(end - start + 1)
    .fill(0)
    .map((item, i) => start + 1);
};

function paginate( list, pageNumber, pageSize) {
    const start = (pageNumber - 1) * pageSize;
    let page = list.slice( start, start + pageSize);
    return page;
}

const NewsSearch = () => {
    const [query, setQuery] = useState('finance');
    const [list, setList] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const search = (e) => {
        e.preventDefault();
        searchNews(query).then(setList);
    };
    
    // const handlePageChange = e => {
    //     setCurrentPage(Number(e.target.textContent));
    // };
    
    // let items = list.length;
    // if (items.length >= 1) {
    //     items = paginate(items, currentPage, pageSize);
    //     console.log('currentPage: ', currentPage);
    // }

    return (
        <div>
            <form onSubmit={search}>
                <input
                style={{ width: "180px" }}
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                />
                <Button style={{ width: "100px" }}>Search</Button>
            </form>
            {!list
            ? null
            : list.length === 0
            ? <p><i>No results</i></p>
            : <ul>
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
            </ul>
            }

        </div>
    )
}

export default NewsSearch;