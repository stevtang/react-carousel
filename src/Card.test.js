import React from 'react';
import {render} from '@testing-library/react';
import Card from './Card';
import TEST_IMAGES from "./_testCommon.js";

it("renders Card without crashing", function(){
    render(<Card src={TEST_IMAGES[0].src} caption={TEST_IMAGES[0].caption}/>)

});

it("matches snapshot", function() {
    const {container} = render(<Card src={TEST_IMAGES[0].src} caption={TEST_IMAGES[0].caption}/>);
    expect(container).toMatchSnapshot();
});