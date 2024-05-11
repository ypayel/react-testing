import { Link, NavLink } from "react-router-dom"


export const Nav = () => {

    // tak sie uzywa linkow w React  - <Link to="/">Home</Link>
    // do nawigacji uzywa sie NavLink -  <NavLink to="/contact">Contact</NavLink>
    return (
        <>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>  
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/settings">Settings</NavLink>
            </li>
            <li>
                <NavLink to="/userlist">UserList</NavLink>
            </li>
        </ul>
        </>
    )
}