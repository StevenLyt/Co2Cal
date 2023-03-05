import React, { Component } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
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
import LoadingAnimation from "components/LoadingAnimation";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import routes from "routes";
import MKButton from "components/MKButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaucet, faCar, faBowlRice, faUtensils } from "@fortawesome/free-solid-svg-icons";
import carFront from "assets/car.jpeg";
import utilitiesFront from "assets/utilities.jpeg";
import foodFront from "assets/food.jpeg";
import restaurantFront from "assets/restaurant.jpeg";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      car: 0,
      bus: 0,
      subway: 0,
      airplane: 0,
      intercityTrain: 0,
      gas: 0,
      electricity: 0,
      water: 0,
      restaurant: 0,
      hotel: 0,
      other: 0,
      clothing: 0,
      dairy: 0,
      meat: 0,
      fruitAndVeg: 0,
      wine: 0,

      transportation: { recommendation: "sdsdsds", stats: 0 },
      utilities: {},
      foodAndClothing: {},
      restaurantAndAccommodation: {},

      whichSelected: -1,
    };
  }

  async componentDidMount() {
    const data = window.localStorage;
    const data2Send = [
      {
        unit: data.getItem("period"),
      },
      {
        name: "NATURALGAS",
        value: data.getItem("gas"),
      },
      {
        name: "ELECTRICITY",
        value: data.getItem("electricity"),
      },
      {
        name: "WATER",
        value: data.getItem("water"),
      },
      {
        name: "CAR",
        value: data.getItem("car"),
      },
      {
        name: "BUS",
        value: data.getItem("bus"),
      },
      {
        name: "SUBWAY",
        value: data.getItem("subway"),
      },
      {
        name: "RAIL",
        value: data.getItem("intercityTrain"),
      },
      {
        name: "AIRPLANE",
        value: data.getItem("airplane"),
      },
      {
        name: "HOTEL",
        value: data.getItem("hotel"),
      },
      {
        name: "RESTAURANT",
        value: data.getItem("restaurant"),
      },
      {
        name: "FOOD",
        value: data.getItem("other"),
      },
      {
        name: "CLOTHING",
        value: data.getItem("clothing"),
      },
      {
        name: "DAIRY",
        value: data.getItem("dairy"),
      },
      {
        name: "MEAT",
        value: data.getItem("meat"),
      },
      {
        name: "FRUIT&VEG",
        value: data.getItem("fruitAndVeg"),
      },
      {
        name: "WINE",
        value: data.getItem("wine"),
      },
    ];
    console.log(data2Send);
    const url = "https://74xxrc6bkblhweowdhb53cjdjq0cnlzf.lambda-url.us-west-1.on.aws/";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data2Send),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res");
        console.log(res);
        const stats = res[1];
        const values = res[0];
        this.setState({
          gas: parseFloat(values[0].value),
          electricity: parseFloat(values[1].value),
          water: parseFloat(values[2].value),
          car: parseFloat(values[3].value),
          bus: parseFloat(values[4].value),
          subway: parseFloat(values[5].value),
          intercityTrain: parseFloat(values[6].value),
          airplane: parseFloat(values[7].value),
          hotel: parseFloat(values[8].value),
          restaurant: parseFloat(values[9].value),
          other: parseFloat(values[10].value),
          clothing: parseFloat(values[11].value),
          dairy: parseFloat(values[12].value),
          meat: parseFloat(values[13].value),
          fruitAndVeg: parseFloat(values[14].value),
          wine: parseFloat(values[15].value),
          foodAndClothing: stats.CONSUMER_GOODS,
          restaurantAndAccommodation: stats.ACCOMMODATION,
          utilities: stats.UTILITIES,
          transportation: stats.TRANS,
        });
      })
      .then(() => this.setState({ fetched: true }));
  }

  clickHandler = (e) => {
    this.setState({ whichSelected: e });
  };

  renderRecommendation = () => {
    if (this.state.whichSelected === 0) {
      return this.state.transportation.recommendation;
    }
    if (this.state.whichSelected === 1) {
      return this.state.utilities.recommendation;
    }
    if (this.state.whichSelected === 2) {
      return this.state.foodAndClothing.recommendation;
    }
    if (this.state.whichSelected === 3) {
      return this.state.restaurantAndAccommodation.recommendation;
    }
    return "Select a category to see your recommendation";
  };

  render() {
    return (
      <>
        <BaseLayout>
          <Container>
            {this.state.fetched ? (
              <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
                <Grid item xs={12} lg={12} mt={20} sx={{ mx: "auto" }}>
                  <MKTypography variant="h1" align="center" color="dark">
                    Your total carbon footprint
                  </MKTypography>
                </Grid>
                <Grid item xs={12} lg={3} sx={{ mx: "auto" }}>
                  <RotatingCard click={this.clickHandler} num={0}>
                    <RotatingCardFront
                      image={carFront}
                      icon={<FontAwesomeIcon icon={faCar} />}
                      title="Transportation"
                      description={(
                        this.state.car +
                        this.state.bus +
                        this.state.subway +
                        this.state.airplane +
                        this.state.intercityTrain
                      ).toFixed(2)}
                    />
                    <RotatingCardBack
                      description=""
                      title={this.state.transportation ? this.state.transportation.stats : ""}
                      action={{
                        car: this.state.car,
                        bus: this.state.bus,
                        subway: this.state.subway,
                        airplane: this.state.airplane,
                        intercityTrain: this.state.intercityTrain,
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} lg={3} sx={{ mx: "auto" }}>
                  <RotatingCard click={this.clickHandler} num={1}>
                    <RotatingCardFront
                      image={utilitiesFront}
                      icon={<FontAwesomeIcon icon={faFaucet} />}
                      title="Home Utilities"
                      description={(
                        this.state.gas +
                        this.state.electricity +
                        this.state.water
                      ).toFixed(2)}
                    />
                    <RotatingCardBack
                      title={this.state.utilities ? this.state.utilities.stats : ""}
                      description=""
                      action={{
                        gas: this.state.gas,
                        electricity: this.state.electricity,
                        water: this.state.water,
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} lg={3} sx={{ mx: "auto" }}>
                  <RotatingCard click={this.clickHandler} num={2}>
                    <RotatingCardFront
                      image={foodFront}
                      icon={<FontAwesomeIcon icon={faBowlRice} />}
                      title="Food & Clothing"
                      description={(
                        this.state.other +
                        this.state.clothing +
                        this.state.dairy +
                        this.state.meat +
                        this.state.fruitAndVeg +
                        this.state.wine
                      ).toFixed(2)}
                    />
                    <RotatingCardBack
                      title={this.state.foodAndClothing ? this.state.foodAndClothing.stats : ""}
                      description=""
                      action={{
                        dairy: this.state.dairy,
                        meat: this.state.meat,
                        fruitAndVeg: this.state.fruitAndVeg,
                        wine: this.state.wine,
                        clothing: this.state.clothing,
                        other: this.state.other,
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} lg={3} sx={{ mx: "auto" }}>
                  <RotatingCard click={this.clickHandler} num={3}>
                    <RotatingCardFront
                      image={restaurantFront}
                      icon={<FontAwesomeIcon icon={faUtensils} />}
                      title="Restaurant & Accommodation"
                      description={(this.state.hotel + this.state.restaurant).toFixed(2)}
                    />
                    <RotatingCardBack
                      title={
                        this.state.restaurantAndAccommodation
                          ? this.state.restaurantAndAccommodation.stats
                          : ""
                      }
                      description=""
                      action={{
                        hotel: this.state.hotel,
                        restaurant: this.state.restaurant,
                      }}
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            ) : (
              <Grid container justifyContent="center" alignItems="center">
                <LoadingAnimation />
              </Grid>
            )}
          </Container>
          <Modal
            open={this.state.whichSelected !== -1}
            onClose={() => {
              this.setState({ whichSelected: -1 });
            }}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Slide direction="down" in={this.state.whichSelected !== -1} timeout={500}>
              <MKBox
                position="relative"
                width="50vw"
                display="flex"
                flexDirection="column"
                borderRadius="xl"
                variant="gradient"
                shadow="sm"
              >
                <MKBox display="flex" alginItems="center" justifyContent="center" p={2}>
                  <MKTypography variant="h4">Here are our recommendations </MKTypography>
                </MKBox>
                <Divider sx={{ my: 0 }} />
                <MKBox px={6} py={3} textAlign="left">
                  <MKTypography component="div" variant="body2" mb={1}>
                    {this.renderRecommendation()}
                  </MKTypography>
                </MKBox>
                <Divider light sx={{ my: 0 }} />
                <MKBox display="flex" justifyContent="right" py={1} px={1.5}>
                  <MKButton onClick={() => this.setState({ whichSelected: -1 })}>Got it</MKButton>
                </MKBox>
              </MKBox>
            </Slide>
          </Modal>
        </BaseLayout>
      </>
    );
  }
}

export default Result;
