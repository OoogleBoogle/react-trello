import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';

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
            lists: updatedList,
            cardName: ''
        });
    },

    render: function() {
        return (
            <Board data={this.state} highlightClick={this.onClick} onText={this.onInputChange} newCard={this.createCard}/>
        )
    }
});

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Main />, document.querySelector('.app'));
});
