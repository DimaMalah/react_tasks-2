import React from "react";

class MyForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = JSON.parse(this.savedState) || {
			email: "",
			address: "",
			password: "",
			city: "",
			country: "",
			acceptRules: false,
			display_form: 'block',
			display_table: 'none'
		}
	}

	savedState = localStorage.getItem('state')

	handleChenge = (e) => {
		e.target.type !== "checkbox" ?
			this.setState({ [e.target.name]: e.target.value }) : e.target.checked ?
				this.setState({ acceptRules: true }) : this.setState({ acceptRules: false })

	}
	//-----меняем флаги стилей формы и таблицы, когда видно форму---
	handleFormSubmit = (e) => {
		e.preventDefault()
		this.setState({ display_form: 'none' })
		this.setState({ display_table: 'block' })
	}

	//-----меняем флаги стилей формы и таблицы, когда видно таблицу---
	handleTableSubmit = (e) => {
		e.preventDefault()
		this.setState({ display_form: 'block' })
		this.setState({ display_table: 'none' })
	}

	render() {


		localStorage.setItem('state', JSON.stringify(this.state))
		console.log(this.state);
		return (
			<>
				<form onSubmit={this.handleFormSubmit} onChange={this.handleChenge} name="myForm" style={{ display: this.state.display_form, }}>
					<div className="col-md-6 mb-3">
						<label for="email" className="col-form-label">Email</label>
						<input type="email" name="email" className="form-control" id="email" placeholder="Email" volume="ggfg" value={this.state.email} />
					</div>
					<div className="form-group col-md-6">
						<label for="password" className="col-form-label" value={this.state.password}>Password</label>
						<input type="password" name="password" className="form-control" id="password" placeholder="Password" />
					</div>
					<div className="col-md-6 mb-3">
						<label for="address" className="col-form-label" >Address</label>
						<textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" value={this.state.address}></textarea>
					</div>
					<div className="col-md-6 mb-3">
						<label for="city" className="col-form-label" >City</label>
						<input type="text" className="form-control" name="city" id="city" value={this.state.city} />
					</div>
					<div className="col-md-6 mb-3">
						<label for="country" className="col-form-label" >Country</label>
						<select id="country" name="country" className="form-control" value={this.state.country}>
							<option>Choose</option>
							<option value="argentina">Argentina</option>
							<option value="ukraine">Ukraine</option>
							<option value="china">China</option>
						</select>
					</div>
					<div className="col-md-6 mb-3">
						<div className="form-check">
							<label className="form-check-label" for="rules">
								<input id="rules" type="checkbox" name="acceptRules" className="form-check-input" onChange={this.handleChenge} checked={(this.state.acceptRules)} />
								Accept Rules
							</label>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">Sign in</button>
				</form>


				<form onSubmit={this.handleTableSubmit} style={{ display: this.state.display_table }}>
					<button type="submit" class="btn btn-primary" >Back</button>
					<table class="table">
						<tbody>
							<tr>
								<td>acceptRules</td>
								<td>{`${this.state.acceptRules}`}</td>
							</tr>
							<tr>
								<td>address</td>
								<td>{this.state.address}</td>
							</tr>
							<tr>
								<td>city</td>
								<td>{this.state.city}</td>
							</tr>
							<tr>
								<td>country</td>
								<td>{this.state.country}</td>
							</tr>
							<tr>
								<td>email</td>
								<td>{this.state.email}</td>
							</tr>
							<tr>
								<td>password</td>
								<td>{this.state.password}</td>
							</tr>
						</tbody>
					</table>
				</form>
			</>

		)
	}
}
export default MyForm;