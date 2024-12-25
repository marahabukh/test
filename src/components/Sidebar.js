import React from "react";
import { Nav, Navbar, Dropdown, Button } from "react-bootstrap";

const Sidebar = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-dark"
            style={{ width: "280px", height: "auto", color: "white" }}
        >
            {/* Sidebar Header */}
            <Navbar.Brand
                href="/"
                className="d-flex align-items-center mt-0 mb-md-0 me-md-auto link-light text-decoration-none"
            >
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4 text-white">Sidebar</span>
            </Navbar.Brand>
            <hr />

            {/* Navigation Links */}
            <Nav className="flex-column mb-auto nav-pills">
                <Nav.Item className="nav-item">
                    <Nav.Link href="/" className="active text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <use xlinkHref="#home" />
                        </svg>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className="text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className="text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <use xlinkHref="#table" />
                        </svg>
                        Orders
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/item" className="text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <use xlinkHref="#grid" />
                        </svg>
                        Products
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className="text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <use xlinkHref="#people-circle" />
                        </svg>
                        Customers
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <hr />

            {/* Dropdown Profile Section */}
            <Dropdown>
                <Dropdown.Toggle
                    as={Button}
                    variant="link"
                    className="d-flex align-items-center link-light text-decoration-none"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong className="text-white">mdo</strong>
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow text-small">
                    <Dropdown.Item href="#">New project...</Dropdown.Item>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Sidebar;
