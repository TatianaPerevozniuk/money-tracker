import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-bootstrap/Table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../assets/css/Table.css'

class Tracker extends Component {

    state = {
        charges: [
          {category: 'Food', description: 'Dinner with Jonn', date: '12/05/2021', money: '$13.65'},
          {category: 'Clothes', description: 'T-shirt', date: '20/05/2021', money: '$20'}
        ]
    }

    render() {
        return(
            <div className='tracker'>
                <div className='button_panel'>
                    <button className='button_item'>Charges</button>
                    <button className='button_item'>Incomes</button>
                </div>
                <div className='filter'>
                    <h3 className='title_charges'>My charges</h3>
                    <select className='select_filter'>
                        <option>category</option>
                        <option>description</option>
                        <option>this week</option>
                        <option>this monht</option>
                        <option>this day</option>
                        <option>all time</option>
                        <option>any period</option>
                    </select>
                    <button className='add_more'>Add more</button>
                </div>
                <div className='table'>
                    <div className='charges'>
                    <Table>
                        <BootstrapTable data={this.state.charges}>
                        <TableHeaderColumn isKey dataField='category'>
                            Category
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='description'>
                            Description
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='date'>
                            Date
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='money'>
                            Money
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='action'>
                            Action
                        </TableHeaderColumn>
                        </BootstrapTable>
                </Table>
                    </div>
                    <div className='incomes'></div>
                </div>
            </div>
        )
    }
}

export default Tracker;