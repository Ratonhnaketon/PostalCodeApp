/* eslint-disable */
import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import Modal from 'components/Modal.jsx';
import Button from "components/Button.jsx";
import CustomInput from "components/CustomInput.jsx";

const axios = require("axios");
const url = "https://autocomplete.geocoder.api.here.com/6.2/suggest.json";

const APPLICATION_ID = 'QxBQhHIViFEp97G3sfnm';
const  APPLICATION_CODE = 'TYzHirivnUBspDs-PqvAiQ';

// Main app

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: {
				postalCode: "",
				district: "",
				address: "",
				complement: "",
				submit: false
			},
		}
		this.handlePostal = this.handlePostal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleComplement = this.handleComplement.bind(this);
		this.close = this.close.bind(this);
	};

	handleComplement(evt){
		var { address } = this.state;
		address.complement = evt.target.value;
		this.setState({ address });
	}

	handlePostal(evt){
		var { address } = this.state;
		address.postalCode = evt.target.value;
		axios.get(
			url, {
				'params': {
					'app_id': APPLICATION_ID,
					'app_code': APPLICATION_CODE,
					'query': address.postalCode,
					'maxresults': 1,
			}
		}
		).then(
			answer => { 
				console.log(answer.data.suggestions[0].address)
				var { country, 	state, city, district } = answer.data.suggestions[0].address;
				var { address } = this.state;
				address.district = district;
				address.address = country + ", " + state + ", " + city
				this.setState({ address });
			}
		).catch(err => { console.log(err) });
		this.setState({ address });
	};

	handleSubmit(){
		var { address } = this.state;
		address.submit = true;
		this.setState({ address });
	};

	close(){
		var { address } = this.state;
		address.submit = false;
		this.setState({ address });		
	}

	render() {
			const { postalCode, submit, address, complement, district } = this.state.address;
			return (
			<div>
				<Modal
					open={submit}
					close={this.close}
				/>
				<GridContainer>
					<GridItem xs={12} sm={12} md={6}>
						<Card>
							<CardBody>
								<GridContainer>
									<GridItem xs={12} sm={12} md={9}>
										<CustomInput
											labelText="CEP"
											id="postal"
											formControlProps={{
												fullWidth: true
											}}
												inputProps={{
												type: "text",
												onChange: this.handlePostal,
												value: postalCode
											}}
										>
										</CustomInput>
										<CustomInput
											labelText="Endereço"
											id="address"
											formControlProps={{
												fullWidth: true
											}}
												inputProps={{
												type: "text",
												value: address
											}}
										>
										</CustomInput>
										<CustomInput
											labelText="Bairro"
											formControlProps={{
												fullWidth: true
											}}
												inputProps={{
												type: "text",
												value: district
											}}
										>									
										</CustomInput>
										<CustomInput
											labelText="Complemento"
											formControlProps={{
												fullWidth: true
											}}
												inputProps={{
												type: "text",
												value: complement,
												onChange: this.handleComplement
											}}
										>									
										</CustomInput>
									</GridItem>
								</GridContainer>
							</CardBody>
							<CardFooter>
								<Button onClick={this.handleSubmit} color="primary">Confirmar</Button>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default App;
