import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
function Header() {
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><h1>logo</h1></Navbar.Brand>
       
        <Nav>
            <Nav.Link href="#deets"><h6>HOURS</h6></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <h6>JOIN OUR TEAM</h6>
            </Nav.Link>
            <Nav.Link href="#deets"><h6>TRANSLATE</h6></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
   
    <div id="wrapper">
      <div id="header">
        <nav className="container">
          <ul id="main-menu">
            <li><a href=""><h5>AMUSEMENT PARK</h5></a></li>
            <li><a href=""><h5>WATERPARK</h5></a></li>
            <li><a href=""><h5>DINING</h5></a></li>
            <li><a href=""><h5>GROUPS</h5></a></li>
            <li><a href=""><h5>PLAN YOUR VISIT</h5></a></li>
            <li><a href=""><h5>BUY TICKETS</h5></a></li>

          </ul>
        </nav>

      </div>

    </div>
    

   
  </>
  );
}

export default Header;
