import React from 'react';
import ReactDOM from 'react-dom';
import {LoginRegister} from './assets/components/header-data.jsx';
import {ListSidebar} from './assets/components/sidebar-data.jsx';
import {OrderForm} from './assets/components/main-data.jsx';
import { Router , Route, IndexRoute, hashHistory } from 'react-router';

class Header extends React.Component{
    render(){
        return React.createElement("div", {className: "header"}, 
                    React.createElement("div", {className: "logo"}, "Work Order Test"), 
                    React.createElement(LoginRegister, null)
               );
    }
}

class SidebarNav extends React.Component{
    render(){
        return React.createElement("div", {className: "sidebar"}, 
                    React.createElement(ListSidebar, null)
               );
    }
}

class Footer extends React.Component{
    render(){
        return React.createElement("div", {className: "footer"});
    }
}

class MainOrder extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return  React.createElement(OrderForm, null)
    }
}

class Layout extends React.Component{
    render(){
        return React.createElement("div", null, 
                    React.createElement(Header, null), 
                    React.createElement("div", {className: "content-container"}, 
                        React.createElement(SidebarNav, null), 
                        React.createElement("div", {className: "main"}, 
                            React.createElement(MainOrder, null)
                        )
                    ), 
                    React.createElement(Footer, null)
               );
    }
}

ReactDOM.render(
    React.createElement(Layout, null)
    , document.getElementById('app'));