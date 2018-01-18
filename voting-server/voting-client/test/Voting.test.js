import React from 'react';
import Voting from '../../src/components/Voting';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

describe('voting', () => {
	test('it renders a pair of buttons', () => {
		const component = renderer.create(
			<Voting pair={["Trainspotting", "28 Days Later"]} />
		);
		expect(component.find('button')).to.have.length(2);
	});
});




