import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {LoginRegister} from './assets/components/header-data.jsx';
import {ListSidebar} from './assets/components/sidebar-data.jsx';
import {OrderForm} from './assets/components/main-data.jsx';

class Header extends React.Component{
    render(){
        return <div className="header">
                    <div className="logo">Work Order Test</div>
                    <LoginRegister />
               </div>;
    }
}

class SidebarNav extends React.Component{
    render(){
        return <div className="sidebar">
                    <ListSidebar />
               </div>;
    }
}

class Footer extends React.Component{
    render(){
        return <div className="footer"></div>;
    }
}

class MainOrder extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return  <OrderForm />
    }
}

class Layout extends React.Component{
    render(){
        return <div>
                    <Header />
                    <div className="content-container">
                        <SidebarNav />
                        <div className="main">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
               </div>;
    }
}

ReactDOM.render(
    <HashRouter>
        <Layout>
            <Switch>
                <Route path="/new-order" component={MainOrder}></Route>
            </Switch>
        </Layout>
    </HashRouter>
    , document.getElementById('app'));