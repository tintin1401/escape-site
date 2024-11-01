import { NavLink } from "react-router-dom";
import "../../index.css";

export function FooterLink({link}) {

    return (
        <NavLink className="text-white lg:text-lg text-base font-medium" to="/">
            {link}
        </NavLink>
    )
    
}