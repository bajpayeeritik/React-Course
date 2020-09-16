import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './HomeComponent';
class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
   
    
    render(){
        const HomePage=()=>
        {
            return(<Home/>)
        };
        return(
            <div>
                <Header/>
                <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" />
        </Switch>
        <Footer/>
    </div>
    
    )

    }
   

}
export default Main;