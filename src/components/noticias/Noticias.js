import { useEffect, useState } from 'react';
import {apiNoticias} from '../../api/apiNoticias';
import './Noticias.css'

function Noticias() {
    const [title, setTitle] = useState([]);
    // const [description, setDescription] = useState([]);

    useEffect(() => {
        apiNoticias(`https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&apiKey=44e8bba538a742ddbca6a4ee46383d84`)
            .then((data) => {
                
                const titulo_ = data.articles.map(articles => articles);
                // const descripcion_ = data.articles.map(article => article.description);

                setTitle(titulo_);
                // setDescription(descripcion_);

            });
    }, []);
    
    return(
        <div className='noticias'>
            <div className='listas'>
                {title.map(articles => (
                    <ul >
                        <li> {articles.title}</li>
                        <li> {articles.author}</li>
                    </ul>
                ))};
            </div>
            <div className='mas-informacion'>
                <h2>Mas informacion</h2>
            </div>
        </div>
        
    )
}
export default Noticias