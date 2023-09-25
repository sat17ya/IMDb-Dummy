import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                }
                alt=""
                width="100"
                className="d-inline-block align-top"
                style={{ width: "60px" }}
              />
            </Nav.Link>
            <GiHamburgerMenu />
            <p>Menu</p>
            <Nav.Link as={Link} to="/movies/popular">
              Popular
            </Nav.Link>
            <Nav.Link as={Link} to="/movies/top_rated">
              Top Rated
            </Nav.Link>
            <Nav.Link as={Link} to="/movies/upcoming">
              Upcoming
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
