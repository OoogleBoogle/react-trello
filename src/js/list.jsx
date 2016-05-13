import React from 'react';
import Card from './card';

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

module.exports = List;
