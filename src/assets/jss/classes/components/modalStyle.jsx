const modalStyle = theme => ({
	paper: {
		position: 'absolute', 
		top: "50%",
		left: "50%", 
		transform: "translate(-50%, -50%) !important",
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
	label: {
		paddingBottom: "35px",
	},
	containerInput: {
		paddingBottom: theme.spacing.unit * 4
	},
	container: {
		marginTop: theme.spacing.unit * 4
	},
	button: {
		width: "40%",
		marginRight: theme.spacing.unit * 1,
		marginLeft: theme.spacing.unit * 1
	}
});
export default modalStyle;
