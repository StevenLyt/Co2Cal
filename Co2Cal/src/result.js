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
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: true,
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

      transportation: {},
      utilities: {},
      foodAndClothing: {},
      restaurantAndAccommodation: {},
    };
  }

  async componentDidMount() {
    const data = window.localStorage;
    const data2Send = [
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
    await fetch("url", {
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
          gas: values[0].value,
          electricity: values[1].value,
          water: values[2].value,
          car: values[3].value,
          bus: values[4].value,
          subway: values[5].value,
          intercityTrain: values[6].value,
          airplane: values[7].value,
          hotel: values[8].value,
          restaurant: values[9].value,
          other: values[10].value,
          clothing: values[11].value,
          dairy: values[12].value,
          meat: values[13].value,
          fruitAndVeg: values[14].value,
          wine: values[15].value,
          foodAndClothing: stats.CONSUMER_GOODS,
          restaurantAndAccommodation: stats.ACCOMMODATION,
          utilities: stats.UTILITIES,
          transportation: stats.TRANS,
        });
      })
      .then(() => this.setState({ fetched: true }));
  }

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
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon={<FontAwesomeIcon icon={faCar} />}
                      title="Transportation"
                      description={
                        this.state.car +
                        this.state.bus +
                        this.state.subway +
                        this.state.airplane +
                        this.state.intercityTrain
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
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
                  <RotatingCard>
                    <RotatingCardFront
                      // image={bgFront}
                      icon={<FontAwesomeIcon icon={faFaucet} />}
                      title="Home Utilities"
                      description={this.state.gas + this.state.electricity + this.state.water}
                    />
                    <RotatingCardBack
                      // image={bgBack}
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
                  <RotatingCard>
                    <RotatingCardFront
                      // image={bgFront}
                      icon={<FontAwesomeIcon icon={faBowlRice} />}
                      title="Food & Clothing"
                      description={
                        this.state.other +
                        this.state.clothing +
                        this.state.dairy +
                        this.state.meat +
                        this.state.fruitAndVeg +
                        this.state.wine
                      }
                    />
                    <RotatingCardBack
                      // image={bgBack}
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
                  <RotatingCard>
                    <RotatingCardFront
                      // image={bgFront}
                      icon={<FontAwesomeIcon icon={faUtensils} />}
                      title="Restaurant & Accommodation"
                      description={this.state.hotel + this.state.restaurant}
                    />
                    <RotatingCardBack
                      // image={bgBack}
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
        </BaseLayout>
      </>
    );
  }
}

export default Result;
