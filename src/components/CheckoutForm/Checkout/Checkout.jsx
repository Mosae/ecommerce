import React from 'react';
import { Paper, Stepper, Step, StepLable, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from '.styles.js';

const steps = ['Shipping address', 'Payment details'];
const Checkout = () => {
	const classes = useStyles;
	return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={0} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLable>{step}</StepLable>
							</Step>
						))}
					</Stepper>
				</Paper>
			</main>
		</>
	);
};

export default Checkout;
