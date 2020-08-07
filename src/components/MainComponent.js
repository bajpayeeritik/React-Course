import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import { DISHES } from '../shared/dishes';

class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    render(){
        return( <div>
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="#">Restorante Con Fusion</NavbarBrand>
              </div>
            </Navbar>
            <Menu dishes={this.state.dishes} />
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      
          </div>
          )
    }
   

}
export default Main;