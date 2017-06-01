import React from 'react';
import {Link} from 'react-router-dom';

export class ListSidebar extends React.Component{
    render(){
        return <ul className="optionslist">
                    <li>
                        <Link to="/">
                        <i className="material-icons">home</i> 
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="new-order">
                            <i className="material-icons">create_new_folder</i> 
                            New Work Order
                        </Link>
                    </li>
                    <li>
                        <Link to="view-work-orders">
                        <i className="material-icons">folder</i> 
                        View Work Orders
                        </Link>
                    </li>
               </ul>;
    }
}