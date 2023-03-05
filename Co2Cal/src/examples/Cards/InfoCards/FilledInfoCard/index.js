/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";
import {
  Slide,
  Modal,
  Grid,
  Switch,
  Divider,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
// @mui material components
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

function FilledInfoCard({ variant, color, icon, title, description, action }) {
  const buttonStyles = {
    width: "max-content",
    display: "flex",
    alignItems: "center",

    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: `translateX(3px)`,
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(6px)`,
    },
  };

  let iconColor = color;

  iconColor = "dark";
  // if (variant === "gradient" && color !== "light") {
  //   iconColor = "white";
  // } else if (variant === "gradient" && color === "light") {
  //   iconColor = "dark";
  // }

  const [rotate, setRotate] = useState(false);

  const rotate0 = () => setRotate(false);
  const rotate180 = () => setRotate(true);

  return (
    <MKBox
      // display={{ xs: "block" }}
      // variant={variant}
      // bgColor={variant === "contained" ? "grey-100" : color}
      // borderRadius="xl"
      // pt={3.5}
      // pb={3}
      // px={3}
      variant="contained"
      bgColor="transparent"
      borderRadius="xl"
      coloredShadow="success"
      // shadow={color === "transparent" ? "none" : "md"}
      shadow="lg"
      onMouseEnter={rotate180}
      onMouseLeave={rotate0}
      p={3}
      sx={{
        transform: rotate ? "translateY(10px) scale(1.05) " : "rotateY(0)",
        transformStyle: "preserve-3d",
        transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        // boxShadow: rotate ? "10px 10px 10px green" : "none",
        boxShadow:
          "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",

        // margin: 2,
        // padding: 2,
        // elevation: 12,
        // border: "1px solid black",
        // boxShadow: "5 5 5 5 rgba(23, 244, 0, 2)",
      }}
    >
      <MKTypography
        display="block"
        variant="h3"
        color={iconColor}
        textGradient={variant === "contained"}
        mt={-0.625}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </MKTypography>
      <MKBox pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
        <MKTypography
          // display="block"
          textAlign="center"
          variant="h3"
          // color={variant === "contained" || color === "light" ? "dark" : "white"}
          color="dark"
          fontWeight="bold"
          mb={1}
        >
          {title}
        </MKTypography>
        <MKTypography
          display="block"
          variant="body2"
          color={variant === "contained" || color === "light" ? "text" : "white"}
          mb={2}
        >
          {description}
        </MKTypography>
        <Grid container>
          <Grid item xs={12} md={8}>
            <MKInput
              required
              fullWidth
              type="text"
              onChange={(e) => action.funcT(e.target.value)}
              onBlur={(e) => action.func(e.target.value)}
              value={action.value || ""}
              sx={{
                textAlign: "center",
                outline: "none",
                outlineWidth: "0px",
                border: "2px solid green",
              }}
            />
          </Grid>
          <Grid container xs={12} md={4} alginItems="center" justifyContent="center">
            <MKTypography
              variant="h4"
              fontStyle="italic"
              fontWeight="bold"
              textAlign="right"
              color="success"
              // color={variant === "contained" ? color : "white"}
              sx={buttonStyles}
            >
              {action.unit ? action.unit.toUpperCase() : ""}
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
  variant: "contained",
  color: "transparent",
  action: false,
};

// Typechecking props for the FilledInfoCard
FilledInfoCard.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      func: PropTypes.string.isRequired,
      funcT: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ]),
};

export default FilledInfoCard;
