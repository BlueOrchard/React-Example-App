import React from 'react';

export class OrderForm extends React.Component{
    firstColumn;
    secondColumn;
    thirdColumn;
    fourthColumn;

    constructor(props){
        super(props);

        this.firstColumn = ["Contact Type", "First Name", "Last Name", "Email", "Number"];
        this.secondColumn = ["Customer Type", "Name", "Account", "Email", "Phone"];
        this.thirdColumn = ["TAMCN/ID/Model", "NIIN", "Description", "TAMCN", "Instance", "Serial"];
        this.fourthColumn = ["Number", "Reported", "Type", "Status", "Priority", "Group"];

        this.renderIndividual = this.renderIndividual.bind(this);
    }

    renderIndividual(text, i){
        return <div className="item-order" key={i}>
                    <label>{text}</label>
                    <input name={text.toLowerCase()}/>
               </div>
    }

    parseForm(e){
        e.preventDefault();
        var form = $('.flex-form').serialize();
        console.log(form);
    }

    render(){
        return <div className="orderform">
                    <h1 className="maintitle">New Work Order</h1>
                    <form className="flex-form">
                        <div className="flex-4">
                            {this.firstColumn.map(this.renderIndividual)}
                        </div>
                        <div className="flex-4">
                            {this.secondColumn.map(this.renderIndividual)}
                        </div>
                        <div className="flex-4">
                            {this.thirdColumn.map(this.renderIndividual)}
                        </div>
                        <div className="flex-4">
                            {this.fourthColumn.map(this.renderIndividual)}
                        </div>
                        <div className="flex-1 submitcancel">
                            <button className="cancelbutton">Cancel</button>
                            <button onClick={this.parseForm}>Submit</button>
                        </div>
                    </form>
               </div>;
    }
}