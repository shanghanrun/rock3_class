import React, {Component} from 'react'

export default class ButtonClass extends Component {
	render(){
		return (
			<div onClick={this.props.onClick} className="btn">
				<img src={this.props.img} alt=''/>
			</div>
		)
	}
}
