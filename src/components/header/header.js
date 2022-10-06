import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header className="App-header">
            <NavLink
                to="home"
            >
                Home
            </NavLink>
            <NavLink
                to="error"
            >
                Error
            </NavLink>
            <NavLink
                to="login"
            >
                Login
            </NavLink>
            <NavLink
                to="dashboard"
            >
                Dashboard
            </NavLink>
        </header>
    )
}
