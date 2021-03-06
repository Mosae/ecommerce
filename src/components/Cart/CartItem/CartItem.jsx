import React from 'react';
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({
	item,
	onUpdateCartQty,
	onRemoveFromCart,
	handleEmptyCart,
}) => {
	const classes = useStyles();

	return (
		<Card>
			<CardMedia
				image={item.media.source}
				alt={item.name}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant="h4">{item.name}</Typography>
				<Typography variant="h4">
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardAction}>
				<div className={classes.buttons}>
					<Button
						type="button"
						size="small"
						onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>
						-
					</Button>
					<Typography> {item.quantity}</Typography>
					<Button
						type="button"
						size="small"
						onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
						+
					</Button>
				</div>
				<Button
					onClick={() => onRemoveFromCart(item.id)}
					variant="contained"
					type="button"
					color="secondary"
					item
					xs={12}
					sm={4}>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
