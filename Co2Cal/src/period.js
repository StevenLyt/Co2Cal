import React, { Component } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
  Card,
} from "@mui/material";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faCar, faPlane, faTrain, faSubway } from "@fortawesome/free-solid-svg-icons";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import routes from "routes";
import MKButton from "components/MKButton";

class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <>
        <BaseLayout>
          <Container>
            <Grid container justifyContent="center">
              <Grid
                item
                xs={12}
                md={12}
                mt={15}
                mb={15}
                alginItems="center"
                justifyContent="center"
              >
                <MKTypography variant="h2" textAlign="center">
                  Please select the time period you would like to calculate your carbon footprint
                  for.
                </MKTypography>
              </Grid>
            </Grid>

            <Grid container spacing={3} alginItems="center" justifyContent="center">
              <Grid item xs={12} lg={4}>
                <RadioGroup
                  value={this.state.value}
                  onChange={(e) => {
                    this.setState({ value: e.target.value });
                    console.log(this.state.value);
                  }}
                >
                  <FormControlLabel
                    key="Day"
                    value={0}
                    control={<Radio />}
                    label="Day"
                    sx={{ fontSize: "px" }}
                  />
                  ;
                  <FormControlLabel key="Week" value={1} control={<Radio />} label="Week" />;
                  <FormControlLabel key="Month" value={2} control={<Radio />} label="Month" />;
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container mt={5} alginItems="center" justifyContent="center">
              <MKButton
                variant="gradient"
                color="info"
                endIcon={<ArrowForwardIosIcon />}
                // textAlign="center"
                href="/transportation"
                onClick={() => {
                  localStorage.setItem("period", this.state.value);
                }}
              >
                Next: Transportation
              </MKButton>
            </Grid>
          </Container>
        </BaseLayout>
      </>
    );
  }
}

export default Period;
