import React from 'react';
import Voting from '../components/Voting';
import { shallow, mount, render } from 'enzyme';

describe('voting', () => {
	test('it renders a pair of buttons', () => {
		const component = shallow(
			<Voting pair={["Trainspotting", "28 Days Later"]} />
		);

		expect(component.find('button').length).toBe(2);
		expect(component.find('button').first().text()).toBe("Trainspotting");
		expect(component.find('button').last().text()).toBe("28 Days Later");

	});

	test('it invokes a callback when a button is clicked', () => {
		let voteWith;
		const vote = (entry) => voteWith = entry;

		const component = shallow(
			<Voting pair={["Trainspotting", "28 Days Later"]} vote={vote} />
		);

		const buttons = component.find('button');
		buttons.first().simulate('click');
	});
});