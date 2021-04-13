import {Link} from 'react-router-dom';
import './main.component.css';
import { Button, Navbar,Nav,Form,Brand,FormControl } from 'react-bootstrap'
import MyList from '../MyList/MyList';
export default function Main({search}) {

    

    return (
  <Navbar bg="transparent" expand="lg">
  <Navbar.Brand  href="#home"><img id="logo1"  src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="/home">Home</Nav.Link>
      <Nav.Link href="/movies">Movies</Nav.Link>
      <Nav.Link href="/tvshows">Tv shows</Nav.Link>
      <Nav.Link href="/list">My list</Nav.Link>           
    </Nav>
    <Form inline>
      <FormControl onChange={search} type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar.Collapse>
</Navbar>    
    )
}
