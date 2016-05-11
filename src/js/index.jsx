import React from 'react';
import ReactDOM from 'react-dom';
// import data from './data.js';

const Main = React.createClass({
    getInitialState: function() {
        return {
            highlight: false,
            cardName: '',
            title: "Board title",
            lists: [
                {
                    title: "List 1 title",
                    cards: [],
                    key: 1

                },
                {
                    title: "List 2 title",
                    cards: [],
                    key: 2
                },
            ],
        };
    },

    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },

    onInputChange: function(e) {
        this.setState({
            cardName: e.target.value
        });
    },

    createCard: function(e) {
        // console.log(typeof e.target.dataset.key);
        var updatedList = this.state.lists.map((list) => {
            if (list.key === parseInt(e.target.dataset.key)) {
                list.cards.push(this.state.cardName);
            }
            return list;
        });
        this.setState({
            lists: updatedList
        });
    },

    render: function() {
        return (
            <Board data={this.state} highlightClick={this.onClick} onText={this.onInputChange} newCard={this.createCard}/>
        )
    }
});

const Board = function(props) {
    let listArray = [];
    props.data.lists.forEach((item) => {
        listArray.push(<List listItem={item} data={props.data} highlightClick={props.highlightClick} newCard={props.newCard} onText={props.onText}/>)
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
        cardArray.push(<Card card={card} data={props.data} highlightClick={props.highlightClick} />);
    });
    return (
        <ul className="list">
            <li className="list-title">{props.listItem.title}</li>
            {cardArray}
            <input type="text" className="card-name-input" onChange={props.onText}/>
            <button className="create-card" data-key={props.listItem.key} onClick={props.newCard}>Create Card</button>
        </ul>
    );
};

const Card = function(props) {
    let classes = 'card ' + (props.data.highlight ? 'highlight' : '');
    return (
        <li className={classes} onClick={props.highlightClick}>{props.card}</li>
    );
};


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Main />, document.querySelector('.app'));
});
