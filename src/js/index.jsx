import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';


const Board = function(props) {
    let listArray = [];
    props.data.lists.forEach((item) => {
        listArray.push(<List listItem={item} />)
    });
    return (
        <div className="board">
            <h1>{props.data.title}</h1>
            {listArray}
        </div>
    );
};

const List = function(props) {
    let cardArray = [];
    props.listItem.cards.forEach((card) => {
        cardArray.push(<Card card={card} />);
    });
    return (
        <ul className="list">
            <li className="list-title">{props.listItem.title}</li>
            {cardArray}
        </ul>
    );
};

const Card = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },

    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        let classes = 'card ' + (this.state.highlight ? 'highlight' : '');
        return (
            <li className={classes} onClick={this.onClick}>{this.props.card}</li>
        );
    }
});


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board data={data} />, document.querySelector('.app'));
});
