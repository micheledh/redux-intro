import React, {Component} from 'react';
import {connect} from 'react-redux';
import './counter.css';

const add = {
    type: 'INCREMENT'
};

const minus = {
    type: 'DECREMENT'
};

class Counter extends Component {

    increment = () => {
        this.props.dispatch(add);
    };

    decrement = () => {
        this.props.dispatch(minus);
    };

    render() {
        return (
            <main>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </main>
        )
    }
}


function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);