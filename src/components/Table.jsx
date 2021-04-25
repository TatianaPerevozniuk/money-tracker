import React, { Component } from 'react';
import '../assets/css/Table.css'

class Table extends Component {

    render() {
        return(
            <div className='table'>
                <p className="table__category table__items">{this.props.category}</p>
                <p className="table__description table__items">{this.props.description}</p>
                <p className="table_date table__items">{this.props.date}</p>
                <p className="table_money table__items">{this.props.money}</p>
                <p className="table_action table__items">{this.props.action}</p>
            </div>
        )
    }
}

export default Table;