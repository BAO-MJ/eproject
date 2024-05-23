import React, { Children, ReactNode } from "react";
import './HeaderDropdown.css';
import { DropdownMenu, NavItem, NavLink } from "react-bootstrap";

interface Props {
    className?: string,
    title: string,
    to: string,
    children: ReactNode
};

function HeaderDropdown({className = '', title, to, children}: Readonly<Props>) {
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