import React, { useState } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import PaymentForm from '../PaymentForm';
import AddressForm from '../AddressForm';

const steps = ['Shipping address', 'Payment details'];
const Checkout = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);

	const Confirmation = () => <div>Confirmation</div>;

	const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
	return (
		<>
			{/* <CssBaseline /> */}
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? <Confirmation /> : <Form />}
				</Paper>
			</main>
		</>
	);
};

export default Checkout;
