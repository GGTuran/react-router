import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <h2>The foking site</h2>
            <ul >
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
               
            </ul>
        </nav>
    );
};

export default Navbar;