import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome CSS
import RecentAddPost from "../Recent Add Post/RecentAddPost"
import { postData  } from '../../Page/ConstantPage/ConstantPage';
const NavScrollExample = () => {
   const [search ,setSearch]=useState("");
   const [recentPost ,setRecentPost]= useState(false); 
   const [searchdata ,setSearchData] = useState("");
   
    const handleCheck=()=>{

      const found = postData.find((data) => data.pincode === search);
      
      if(found){
        setRecentPost(true);
        setSearchData(found);
      }else{
        console.log("error");
      }

    }


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Apna Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="/">
              <i className="fa fa-home"></i> Home
            </Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">Our Mission</NavDropdown.Item>
              <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
            </NavDropdown>

            {/* Service Dropdown */}
            <NavDropdown title="Service" id="navbarScrollingDropdown">
              <NavDropdown title="StackHolder" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/donatefood">Food Donate</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="NGO" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/RecentAddPost">Food Distribution</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            {/* Events Dropdown */}
            <NavDropdown title="Events" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/FQA">FQA</NavDropdown.Item>
              <NavDropdown.Item href="/BlogAndNew">Blog and News</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Dropdown */}
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="mailto:Fooddonate@gmail.com" target='_blank'>Email</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com" target='_blank'>Twiter</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {!recentPost &&(()=>{
              <RecentAddPost searchdata={searchdata} recentPost={recentPost} />
          })}

          {/* Search Form */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{
                setSearch(e.target.value)
              }}
            />
            <Button variant="outline-success" onClick={handleCheck}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
