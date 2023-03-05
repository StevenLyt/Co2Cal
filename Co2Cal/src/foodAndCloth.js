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
import {
  faCow,
  faWineBottle,
  faShirt,
  faCarrot,
  faBowlRice,
} from "@fortawesome/free-solid-svg-icons";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import Icon from "@mui/material/Icon";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import routes from "routes";
import MKButton from "components/MKButton";

class FoodAndCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dairy: 0,
      meat: 0,
      fruitAndVeg: 0,
      wine: 0,
      other: 0,
      clothing: 0,
      tempDairy: 0,
      tempMeat: 0,
      tempFruitAndVeg: 0,
      tempWine: 0,
      tempOther: 0,
      tempClothing: 0,
    };
  }

  changeDairy = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ dairy: value });
    } else {
      this.setState({ tempDairy: 0 });
    }
  };

  changeTempDairy = (value) => {
    this.setState({ tempDairy: value });
  };

  changeMeat = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ meat: value });
    } else {
      this.setState({ tempMeat: 0 });
    }
  };

  changeTempMeat = (value) => {
    this.setState({ tempMeat: value });
  };

  changeFruitAndVeg = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ fruitAndVeg: value });
    } else {
      this.setState({ tempFruitAndVeg: 0 });
    }
  };

  changeTempFruitAndVeg = (value) => {
    this.setState({ tempFruitAndVeg: value });
  };

  changeWine = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ wine: value });
    } else {
      this.setState({ tempWine: 0 });
    }
  };

  changeTempWine = (value) => {
    this.setState({ tempWine: value });
  };

  changeOther = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ other: value });
    } else {
      this.setState({ tempOther: 0 });
    }
  };

  changeTempOther = (value) => {
    this.setState({ tempOther: value });
  };

  changeClothing = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ clothing: value });
    } else {
      this.setState({ tempClothing: 0 });
    }
  };

  changeTempClothing = (value) => {
    this.setState({ tempClothing: value });
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
                  Food & Clothing
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3} alginItems="center" justifyContent="center">
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faCow} />}
                  title="Dairy"
                  description=""
                  action={{
                    func: this.changeDairy,
                    funcT: this.changeTempDairy,
                    unit: "usd",
                    value: this.state.tempDairy,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<KebabDiningIcon />}
                  title="Meat"
                  description=""
                  action={{
                    func: this.changeMeat,
                    funcT: this.changeTempMeat,
                    unit: "usd",
                    value: this.state.tempMeat,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faCarrot} />}
                  title="Fruit & Veg"
                  description=""
                  action={{
                    func: this.changeFruitAndVeg,
                    funcT: this.changeTempFruitAndVeg,
                    unit: "usd",
                    value: this.state.tempFruitAndVeg,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faWineBottle} />}
                  title="Wine"
                  description=""
                  action={{
                    func: this.changeWine,
                    funcT: this.changeTempWine,
                    unit: "usd",
                    value: this.state.tempWine,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faBowlRice} />}
                  title="Other Food"
                  description=""
                  action={{
                    func: this.changeOther,
                    funcT: this.changeTempOther,
                    unit: "usd",
                    value: this.state.tempOther,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faShirt} />}
                  title="Clothing"
                  description=""
                  action={{
                    func: this.changeClothing,
                    funcT: this.changeTempClothing,
                    unit: "usd",
                    value: this.state.tempClothing,
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
                href="/restaurantAndAccommodation"
                onClick={() => {
                  window.localStorage.setItem("dairy", this.state.dairy);
                  window.localStorage.setItem("meat", this.state.meat);
                  window.localStorage.setItem("fruitAndVeg", this.state.fruitAndVeg);
                  window.localStorage.setItem("wine", this.state.wine);
                  window.localStorage.setItem("other", this.state.other);
                  window.localStorage.setItem("clothing", this.state.clothing);
                }}
              >
                Next: Restaurant & Accommodation
              </MKButton>
            </Grid>
          </Container>
        </BaseLayout>
      </>
    );
  }
}

export default FoodAndCloth;
