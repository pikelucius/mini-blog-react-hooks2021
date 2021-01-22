import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <br/>
            <p>Sidan du söker hittas inte!!!</p>
            <br/>
            <Link to="/">Tillbaka till hemsidan</Link>
        </div>
     );
}
 
export default NotFound;