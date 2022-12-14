import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	heroImg: {
		display: "flex",
		cursor: "pointer",
		justifyContent: "center",
		alignItems: "center",
	},
	h1: {
		fontWeight: "700",
	},
	span: {
		fontSize: "1.2rem",
		fontWeight: "400",
	},

	logo: {
		width: "7rem",
	},
}));

const HeroImg = () => {
	const classes = useStyles();
	return (
		<Link
			to="/"
			style={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
			<div className={classes.heroImg}>
				<Box
					component={"img"}
					className={classes.logo}
					src="https://www.web3bridge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.55f23e71.png&w=3840&q=75"
					alt="PicAndEdit_logo"
				/>
			</div>
		</Link>
	);
};

export default HeroImg;
