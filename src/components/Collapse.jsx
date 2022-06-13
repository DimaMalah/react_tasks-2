import React from "react";

class Collapse extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			opened: this.props.opened,
			shown: false
		}
	}

	handleClick = () => {
		this.setState({ opened: !this.state.opened })
		this.setState({ shown: !this.state.shown })
	}

	render() {
		return (
			<>
				<p>
					<a onClick={this.handleClick} className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded={this.state.opened}
						aria-controls="collapseExample">
						Link with href
					</a>
				</p>
				<div className={`collapse ${this.state.opened ? "show" : ""}`} id="collapseExample">
					<div className="card card-body">
						{this.props.text}
					</div>
				</div>
			</>
		)
	}
}
export default Collapse;