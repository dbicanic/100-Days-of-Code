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
		expect(voteWith).toEqual("Trainspotting");
	});

	test('disables a button when user has voted', () => {
		const component = shallow(
			<Voting pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting"/>
		);
		const buttons = component.find('button');

		expect(buttons.length).toBe(2);
		expect(buttons.first().props().disabled).toBeTruthy();
		expect(buttons.last().props().disabled).toBeTruthy();
	});

	test('it adds label to voted entry', () => {
		const component = shallow(
			<Voting pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting"/>
		);

		const buttons = component.find('button');
		expect(buttons.first().text()).toContain("Voted");
	});

	test('it renders just the winner when there is one', () => {
		const component = mount(
			<Voting winner='Trainspotting'/>
		);

		const buttons=component.find('button');
		expect(buttons.length).toBe(0);
		expect(component.text()).toContain('Trainspotting');

		const winner=component.ref('winner');
		expect(winner).toBeTruthy();

	});
});