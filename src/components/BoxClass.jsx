import React, {Component} from 'react'

export default class BoxClass extends Component{
	render(){
		return (
			<div width="400px" className={`${this.props.who?.status} image-box` }>
				<img src={this.props.who?.image} width="70%" height="100%" alt='' />
				<div>{this.props.who?.name}</div>
			</div>
		  )
	}
}

