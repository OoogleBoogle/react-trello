import React from 'react';
import List from './list'

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

module.exports = Board;
