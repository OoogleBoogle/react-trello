var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../src/js/list');

describe('The List component', function() {
    it('should fucking work', function() {
        var listProps = {
            highlight: false,
                cardName: '',
            title: "Board title",
            lists: {
                title: "List 1 title",
                cards: ['stuff'],
                key: 1
            }

        };

        var highlightClick = function () {
            console.log("I have no purpose!!!!");
        };

        var renderer = TestUtils.createRenderer();
        renderer.render(<List listItem={listProps.lists} data={listProps} highlightClick={highlightClick} />);
        var result = renderer.getRenderOutput();
        console.log(result);
        result.props.className.should.equal('list');
        result.type.should.equal('ul');

    });
});
