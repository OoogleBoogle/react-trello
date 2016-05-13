import React from 'react';

const Card = function(props) {
    let classes = 'card ' + (props.data.highlight ? 'highlight' : '');
    return (
        <li className={classes} onClick={props.highlightClick}>{props.card}</li>
    );
};

module.exports = Card;
