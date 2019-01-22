import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "components/Button.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import modalStyle from "assets/jss/classes/components/modalStyle.jsx";

class SimpleModal extends React.Component {

	render(){
		const { classes, open, close } = this.props;
		return (
			<div>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={open}
				>
					<GridContainer>
						<GridItem xs={6} sm={12} md={12}>
							<div className={classes.paper}>
								<div className={classes.container}>
									<center>
										<div className={classes.label}>
											<GridItem xs={6} sm={12} md={12}>
												<InputLabel >As informações estão corretas?</InputLabel>
											</GridItem>
										</div>
										<Button className={classes.button} onClick={close} color="primary">Sim</Button>
										<Button className={classes.button} onClick={close} color="primary">Não</Button>				
									</center>
								</div>
							</div>
						</GridItem>
					</GridContainer>
				</Modal>
    		</div>
		);
	}
}

SimpleModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(modalStyle)(SimpleModal);

export default SimpleModalWrapped;
