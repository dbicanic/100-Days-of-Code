import React from 'react';
import Voting from '../components/Voting';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

describe('voting', () => {
	test('it renders a pair of buttons', () => {
		const component = shallow(
			<Voting pair={["Trainspotting", "28 Days Later"]} />
		);
		console.log(component.find('button'));
		// expect(comp);
	});
});




