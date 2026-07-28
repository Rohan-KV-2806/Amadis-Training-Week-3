import { Link } from "@tanstack/react-router";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>

            <br />

            <Link to="/add">Add Note</Link>
        </nav>
    );
}

export default NavBar;