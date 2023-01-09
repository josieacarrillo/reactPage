import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/"> LOGO </Link>
            </div>
            <ul>
                <li>
                    <Link to ="/about"> About </Link>
                </li>
                <li>
                    <Link to ="/articles" > Articles </Link>
                </li>
                <li>
                    <Link to ="/portfolio" > Portfolio </Link>
                </li>
                <li>
                    <Link to ="/contact" > Contact </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;