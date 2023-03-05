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

class Transportation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: 0,
      bus: 0,
      subway: 0,
      airplane: 0,
      intercityTrain: 0,
      tempCar: 0,
      tempBus: 0,
      tempSubway: 0,
      tempAirplane: 0,
      tempIntercityTrain: 0,
    };
  }

  changeCar = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ car: value });
    } else {
      this.setState({ tempCar: 0 });
    }
    console.log(this.state.car);
  };

  changeTempCar = (value) => {
    this.setState({ tempCar: value });
  };

  changeBus = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ bus: value });
    } else {
      this.setState({ tempBus: 0 });
    }
  };

  changeTempBus = (value) => {
    this.setState({ tempBus: value });
  };

  changeSubway = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ subway: value });
    } else {
      this.setState({ tempSubway: 0 });
    }
  };

  changeTempSubway = (value) => {
    this.setState({ tempSubway: value });
  };

  changeAirplane = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ airplane: value });
    } else {
      this.setState({ tempAirplane: 0 });
    }
  };

  changeTempAirplane = (value) => {
    this.setState({ tempAirplane: value });
  };

  changeIntercityTrain = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ intercityTrain: value });
    } else {
      this.setState({ tempIntercityTrain: 0 });
    }
  };

  changeTempIntercityTrain = (value) => {
    this.setState({ tempIntercityTrain: value });
  };

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
                <MKTypography variant="h1" textAlign="center">
                  Transportation
                </MKTypography>
              </Grid>
            </Grid>
            {/* <Card
              sx={{
                p: 2,
                mx: { xs: 2, lg: 3 },
                mt: -8,
                mb: 4,
                // backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                //   rgba(white.main, 0.8),
                // backdropFilter: "saturate(200%) blur(30px)",
                // boxShadow: ({ boxShadows: { xxl } }) => xxl,
              }}
            > */}
            <Grid container spacing={3} alginItems="center" justifyContent="center">
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon={<FontAwesomeIcon icon={faCar} />}
                  title="Car"
                  description=""
                  action={{
                    func: this.changeCar,
                    funcT: this.changeTempCar,
                    unit: "miles",
                    value: this.state.tempCar,
                  }}
                />
              </Grid>

              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faBus} />}
                  title="Bus"
                  description=""
                  action={{
                    func: this.changeBus,
                    funcT: this.changeTempBus,
                    unit: "miles",
                    value: this.state.tempBus,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faSubway} />}
                  title="Subway"
                  description=""
                  action={{
                    func: this.changeSubway,
                    funcT: this.changeTempSubway,
                    unit: "miles",
                    value: this.state.tempSubway,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faPlane} />}
                  title="Airplane"
                  description=" "
                  action={{
                    func: this.changeAirplane,
                    funcT: this.changeTempAirplane,
                    unit: "miles",
                    value: this.state.tempAirplane,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faTrain} />}
                  title="Intercity Train"
                  description=""
                  action={{
                    func: this.changeIntercityTrain,
                    funcT: this.changeTempIntercityTrain,
                    unit: "miles",
                    value: this.state.tempIntercityTrain,
                  }}
                />
              </Grid>
            </Grid>
            {/* </Card> */}
            <Grid container mt={5} alginItems="center" justifyContent="center">
              <MKButton
                variant="gradient"
                color="info"
                endIcon={<ArrowForwardIosIcon />}
                textAlign="center"
                href="/utilities"
                onClick={() => {
                  window.localStorage.setItem("car", this.state.car);
                  window.localStorage.setItem("bus", this.state.bus);
                  window.localStorage.setItem("subway", this.state.subway);
                  window.localStorage.setItem("airplane", this.state.airplane);
                  window.localStorage.setItem("intercityTrain", this.state.intercityTrain);
                }}
              >
                Next: Utilities
              </MKButton>
            </Grid>
          </Container>
        </BaseLayout>
      </>
    );
  }
}

export default Transportation;
