import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CardItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
	const classes = useStyles();

	const RenderEmptyCart = () => {
		return (
			<Typography variant="subtitle1">
				You have no items in your shopping cart,
				<Link className={classes.link} to="/">
					start adding some
				</Link>
				!
			</Typography>
		);
	};
	if (!cart.line_items) return 'Loading';

	const RenderCart = () => {
		return (
			<div>
				<Grid container spacing={3}>
					{cart.line_items.map((item) => (
						<Grid item xs={12} sm={4} key={item.id}>
							<CardItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
						</Grid>
					))}
				</Grid>
				<div className={classes.cardDetails}>
					<Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
					<div>
						<Button onClick={handleEmptyCart} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
							{' '}
							Empty Cart
						</Button>
						<Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
							{' '}
							Checkout
						</Button>
					</div>
				</div>
			</div>
		);
	};
	// console.log(cart);
	return (
		<div>
			<Container>
				<div className={classes.toolbar} />
				<Typography className={classes.title} variant="h3">
					Your Shopping Cart
				</Typography>
				{!cart.line_items.length ? <RenderEmptyCart /> : <RenderCart />}
			</Container>
		</div>
	);
};

export default Cart;
