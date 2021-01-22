import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetatails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
      fetch(`http://localhost:8000/blogs/${id}`, {
          method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Skriven av { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={()=> history.goBack() }>Tillbaka</button>
                    <button onClick={handleClick}>Radera</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetatails;