import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className='navbar'>
        <h1>Mini Bloggen</h1>
      </nav>
      <div>
        <Link to='/'>Hem</Link>
        <Link to='/create'>Ny Blogg-post</Link>
      </div>
    </div>
  );
};

export default Navbar;
<nav></nav>;
