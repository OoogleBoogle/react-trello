var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../src/js/card');

describe('The Card component', function() {
    it('should render a card', function() {
        var cardProps = {
            card: 'Lord Card of Cardville',
            onClick: function() {console.log("I have no purpose!!!!")},
            highlight: false
        }
        var renderer = TestUtils.createRenderer();
        renderer.render(<Card card={cardProps} data={cardProps} highlightClick={cardProps.onClick} />);
        var result = renderer.getRenderOutput();
        // console.log(result);
        result.props.className.should.equal('card ');
        result.type.should.equal('li');
        result.props.children.card.should.equal('Lord Card of Cardville');
    });
});
