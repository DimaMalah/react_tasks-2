import React from "react";

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			i: 0,
		}
	}

	nextItem = (arr) => {
		if (this.state.i === arr.length - 1) {
			this.setState({ i: 0 })
			return arr[0]
		} else {
			this.setState({ i: this.state.i + 1 })
			return arr[this.state.i + 1]
		}
	}

	prevItem = (arr) => {
		if (this.state.i === 0) {
			this.setState({ i: arr.length - 1 })
			return arr[arr.length - 1]
		} else {
			this.setState({ i: this.state.i - 1 })
			return arr[this.state.i - 1]
		}
	}



	render() {



		return (
			<div id="carousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img alt="moto" className="d-block w-100" src={this.props.links[this.state.i]}></img>
					</div>
				</div>
				<button className="carousel-control-prev" onClick={() => this.prevItem(this.props.links)} data-bs-target="#carousel" type="button" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className=" carousel-control-next" onClick={() => this.nextItem(this.props.links)} data-bs-target="#carousel" type="button" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>



		)
	}

}

export default Carousel;