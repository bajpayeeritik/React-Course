import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav,NavbarToggler,Collapse,NavItem,Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Input, Label, Col  } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../App.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isModalOpen: false,
      isNavOpen: false
    };
    this.handleLogin=this.handleLogin.bind(this);
    this.toggle=this.toggle.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  handleLogin(event) {
    this.toggle();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}
  toggle(){
    this.setState(
      {
        isModalOpen:!this.state.isModalOpen
      }
    )
  }
  render()  {
    const ModalExample = (props) => {
      const {
        className
      } = props;
    
      
      return (
        <div>
          <Button outline onClick={this.toggle}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className={className}>
            <ModalHeader toggle={this.toggle}>Login</ModalHeader>
            <ModalBody>
             <Example />
            </ModalBody>
            <ModalFooter>
              <Button color="primary"className="mr-auto" onClick={this.handleLogin}>Login</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    const Example = (props) => {
      return (
        <Form onSubmit={this.handleLogin}>
          <FormGroup row>
            <Label for="Username" sm={2} name="Username"  value={this.state.username}>Email</Label>
            <Col sm={10}>
            <Input type="email" name="email" id="Username" placeholder="Enter Username" innerRef={(input) => this.username = input} />
            </Col>
          </FormGroup>
          
          <FormGroup className="row ">
            <Label for="Password" sm={2}>Password</Label>
            <Col>
            <Input type="password" name="password" id="Password" placeholder="Password"sm={10} innerRef={(input) => this.password = input} />
            </Col>
          </FormGroup>
          <FormGroup check>
            <Label check for="remember">
              <Input type="checkbox" value={!this.state.password}  innerRef={(input) => this.remember = input}  />{' '}
              Remember Me
            </Label>
          </FormGroup>
        </Form>
      );
    }
    return(
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                        
                        </Nav>
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <ModalExample><span className="fa fa-sign-in fa-lg"></span> Login</ModalExample>
                                </NavItem>
                            </Nav>
                        

                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                </div>
    
    );
  }
}
export default Header;