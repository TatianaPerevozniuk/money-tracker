import React,{Component} from 'react';

class Balance extends Component {
    render() {
        return(
            <div className='balance'>
                <p className='balanceText'>Balance</p>
                <p className='balanceSum'>	&#36; 25,532.05</p>
            </div>
        )
    }
}

export default Balance;