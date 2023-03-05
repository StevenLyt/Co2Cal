import React, { Component } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faHotel } from "@fortawesome/free-solid-svg-icons";

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

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import routes from "routes";
import MKButton from "components/MKButton";

class RestaurantAndAccommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 0,
      hotel: 0,
      tempRestaurant: 0,
      tempHotel: 0,
    };
  }

  changeRestaurant = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ restaurant: value });
    } else {
      this.setState({ tempRestaurant: 0 });
    }
  };

  changeTempRestaurant = (value) => {
    this.setState({ tempRestaurant: value });
  };

  changeHotel = (value) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      this.setState({ hotel: value });
    } else {
      this.setState({ tempHotel: 0 });
    }
  };

  changeTempHotel = (value) => {
    this.setState({ tempHotel: value });
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
                  Restaurant & Accommodation
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3} alginItems="center" justifyContent="center">
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faUtensils} />}
                  title="Restaurant"
                  description=""
                  action={{
                    func: this.changeRestaurant,
                    funcT: this.changeTempRestaurant,
                    unit: "usd",
                    value: this.state.tempRestaurant,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon={<FontAwesomeIcon icon={faHotel} />}
                  title="Hotel"
                  description=""
                  action={{
                    func: this.changeHotel,
                    funcT: this.changeTempHotel,
                    unit: "night",
                    value: this.state.tempHotel,
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
                href="/result"
                onClick={() => {
                  localStorage.setItem("restaurant", this.state.restaurant);
                  localStorage.setItem("hotel", this.state.hotel);
                }}
              >
                Submit & View Total carbon footprint
              </MKButton>
            </Grid>
          </Container>
        </BaseLayout>
      </>
    );
  }
}

export default RestaurantAndAccommodation;
