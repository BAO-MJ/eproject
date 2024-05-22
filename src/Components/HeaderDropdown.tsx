import React, { Children } from "react";
import './HeaderDropdown.css';
import { DropdownMenu, NavItem, NavLink } from "react-bootstrap";

function HeaderDropdown({className = '', title, to, children}) {
    return (
        <NavItem className={"dropdown " + className}>
            <NavLink href={to} className="dropdown-toggle">{title}</NavLink>
            <DropdownMenu renderOnMount>
                {Children.map(children, (child) => <div className="dropdown-bordered">{child}</div>)}
            </DropdownMenu>
        </NavItem>
    )
}

export { HeaderDropdown };