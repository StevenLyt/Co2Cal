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
} from "@mui/material";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faPlug, faFaucet } from "@fortawesome/free-solid-svg-icons";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import routes from "routes";
import MKButton from "components/MKButton";

class Utilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gas: 0,
      water: 0,
      electricity: 0,
      tempGas: 0,
      tempWater: 0,
      tempElectricity: 0,
    };
  }

  changeGas = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ gas: value });
    } else {
      this.setState({ tempGas: 0 });
    }
    console.log(this.state.gas);
  };

  changeTempGas = (value) => {
    this.setState({ tempGas: value });
  };

  changeWater = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ water: value });
    } else {
      this.setState({ tempWater: 0 });
    }
  };

  changeTempWater = (value) => {
    this.setState({ tempWater: value });
  };

  changeElectricity = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ electricity: value });
    } else {
      this.setState({ tempElectricity: 0 });
    }
  };

  changeTempElectricity = (value) => {
    this.setState({ tempElectricity: value });
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
                  Home Utilities
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3} alginItems="center" justifyContent="center">
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faPlug} />}
                  title="Electricity"
                  description=""
                  action={{
                    func: this.changeElectricity,
                    funcT: this.changeTempElectricity,
                    unit: "usd",
                    value: this.state.tempElectricity,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faFireFlameCurved} />}
                  title="Natural Gas"
                  description=""
                  action={{
                    func: this.changeGas,
                    funcT: this.changeTempGas,
                    unit: "usd",
                    value: this.state.tempGas,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faFaucet} />}
                  title="Water"
                  description=""
                  action={{
                    func: this.changeWater,
                    funcT: this.changeTempWater,
                    unit: "usd",
                    value: this.state.tempWater,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container mt={5} alginItems="center" justifyContent="center">
              <MKButton
                variant="gradient"
                color="info"
                endIcon={<ArrowForwardIosIcon />}
                textAlign="center"
                href="/foodAndCloth"
                onClick={() => {
                  window.localStorage.setItem("gas", this.state.gas);
                  window.localStorage.setItem("water", this.state.water);
                  window.localStorage.setItem("electricity", this.state.electricity);
                }}
              >
                Next: Food & Clothing
              </MKButton>
            </Grid>
          </Container>
        </BaseLayout>
      </>
    );
  }
}

export default Utilities;
