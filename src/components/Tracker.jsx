import React, {Component} from 'react';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../assets/css/Table.css';
import Table from './Table';


class Tracker extends Component {

    state = {
        charges: [
            { category: 'Category', description: 'Description', date: 'Date', money: 'Money', action: 'Action'},
            { category: 'Food', description: 'Dinner with Jonn', date: '12/05/2021', money: '$13.65', action: 'more..'},
            { category: 'Clothes', description: 'T-shirt', date: '20/05/2021', money: '$20', action: 'more..'},
            { category: 'Restoraunts', description: '', date: '15/04/2021', money: '$15.76', action: 'more..'},
            { category: 'Utility bills', description: '', date: '10/01/2021', money: '$8', action: 'more..'},
            {category: 'Pets', description: '', date: '03/08/2020', money: '$6.75', action: 'more..'}
        ],
        incomes: [
            { category: 'Category', description: 'Description', date: 'Date', money: 'Money', action: 'Action'},
            { category: 'Wage', description: '', date: '30/05/2021', money: '$2000', action: 'more..'},
            { category: 'Money for the project', description: 'T-shirt', date: '20/05/2021', money: '$500', action: 'more..'}
        ],
    }

    render() {
        return(
            <div className='tracker'>
                <section className='button-panel'>
                    <button className='button-item'>Charges</button>
                    <button className='button-item'>Incomes</button>
                </section>
                <section className='filter'>
                    <h3 className='title-charges'>My charges</h3>
                    <h3 className='title-incomes'>My incomes</h3>
                    <select className='select-filter'>
                        <option>category</option>
                        <option>description</option>
                        <option>this week</option>
                        <option>this monht</option>
                        <option>this day</option>
                        <option>all time</option>
                        <option>any period</option>
                    </select>
                    <button className='add-more'>Add more</button>
                </section>
                <section className='table__tracker'>
                    <div className='table-charges'>
                        { this.state.charges.map((item, i) => <Table {...item} key={i} />)}
                    </div>
                    <div className='table-incomes'>
                    { this.state.incomes.map((item, i) => <Table {...item} key={i} />)}
                    </div>
                </section>
            </div>
        )
    }
}

export default Tracker;