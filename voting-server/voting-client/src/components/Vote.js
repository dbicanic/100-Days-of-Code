import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class extends React.Component {
	render() {
		return <div>
			{this.props.winner ?
				<Winner ref="winner" winner={this.props.winner} /> :
				<Vote {...this.props} />
			};
		</div>
	};
};