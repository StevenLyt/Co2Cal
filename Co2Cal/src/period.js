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
    this.state = {};
  }

  render() {
    return (
      <>
        <BaseLayout>
          <Container>
            <Grid container alginItems="center" justifyContent="center">
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
                  value={option.value}
                  onChange={(e) => {
                    option.value = Number(e.target.value);
                    this.setState({});
                    if (option.hasOwnProperty("control")) {
                      for (let key2 in option.control) {
                        option.control[key2].forEach((control) => {
                          if (Number(e.target.value) === control) {
                            this.state.options[key2].value = 0;
                            this.setState({});
                          }
                        });
                      }
                    }
                  }}
                >
                  <FormControlLabel key={id} value={id} control={<Radio />} label={opt} />;
                  <FormControlLabel key={id} value={id} control={<Radio />} label={opt} />;
                  <FormControlLabel key={id} value={id} control={<Radio />} label={opt} />;
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container mt={5} alginItems="center" justifyContent="center">
              <MKButton
                variant="gradient"
                color="info"
                endIcon={<ArrowForwardIosIcon />}
                textAlign="center"
                href="/transportation"
                onClick={() => {}}
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
